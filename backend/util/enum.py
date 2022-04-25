import csv
from os import path

class EnumUtil(object):
    def __init__(self):
        self.adjective_dict = {}
        self.adjective_pair_set = set()
        
        with open(path.dirname(path.abspath(__file__)) + '/adjective.csv', 'r') as f:
            csv_reader = csv.reader(f, delimiter=',')
            temp = ''
            for i, row in enumerate(csv_reader):
                self.adjective_dict[row[0]] = list(map(lambda x: tuple(map(int, x[4:-1].split(','))), row[2:]))
                if i % 2 == 0:
                    temp = row[0]
                else:
                    temp += '-' + row[0]
                    self.adjective_pair_set.add(temp)

    def get_adjective_pairs(self):
        return self.adjective_pair_set

    def get_adjectives(self):
        return self.adjective_dict.keys()

    def get_colors_by_adjective(self, type):
        return self.adjective_dict.get(type)

if __name__ == "__main__":
    typeutil = EnumUtil()