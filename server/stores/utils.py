from typing import List


class CrawlableSite:
    name: str
    domain: str
    allowed_domains: List[str]
    start_urls: str | List[str]

    def __init__(self, _name: str, _domain: str, _allowed_domains: List[str], _start_urls: str | List[str]):
        self.name = _name
        self.domain = _domain
        self.allowed_domains = _allowed_domains
        self.start_urls = _start_urls


Erelement = CrawlableSite('erelement', 'erelement.com', ['erelement.com'], ['https://erelement.com/raspberry-pi-4'])


def get_stores():
    pass


def get_store(name: str):
    pass
