import numpy as np
from sklearn.cluster import MeanShift, estimate_bandwidth
from util.enum import EnumUtil

enum_util = EnumUtil()

def clustering(X):
    best_bandwidth = estimate_bandwidth(X)

    meanshift = MeanShift(bandwidth=best_bandwidth)
    cluster_labels = meanshift.fit_predict(X)
    labels = np.unique(cluster_labels, return_counts=True)[1].argsort()[-3:][::-1]
    
    results = []

    for centers in meanshift.cluster_centers_[labels]:
        centers = list(map(int, centers))
        color = {}
        for i, e in enumerate(["mainBackGroup", "mainGroup", "subGroup", "pointGroup"]):
            color[e] = centers[i * 3: i * 3 + 3]
        results.append(color)
    
    return results


def train_data(data):
    list_var = []

    for doc in data:
        vector = []
        for v in doc['inputData'].values():
            vector.extend(v)
        doc['inputData'] = vector
        list_var.append(doc)
    
    result = {}

    for key_pair in enum_util.get_adjective_pairs():
        negative, positive = key_pair.split('-')
        
        # negative
        X = []
        for doc in list_var:
            for _ in range(-doc[key_pair] // 2):
                X.append(doc['inputData'])

        result[negative] = clustering(X)

        # positive
        X = []
        for doc in list_var:
            for _ in range(doc[key_pair] // 2):
                X.append(doc['inputData'])

        result[positive] = clustering(X)
    
    return result