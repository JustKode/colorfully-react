import csv
from os import path

class EnumUtil(object):
    def __init__(self):
        self.adjective_dict = {}
        
        with open(path.dirname(path.abspath(__file__)) + '/adjective.csv', 'r') as f:
            csv_reader = csv.reader(f, delimiter=',')
            for row in csv_reader:
                self.adjective_dict[row[0]] = list(map(lambda x: tuple(map(int, x[4:-1].split(','))), row[2:]))
    
        self.color_type_dict = {"main", "support", "background", "strong"}

    def get_adjectives(self):
        return self.adjective_dict.keys()

    def get_colors_by_adjective(self, type):
        return self.adjective_dict.get(type)

    def get_color_type_dict(self):
        return self.color_type_dict

if __name__ == "__main__":
    typeutil = EnumUtil()