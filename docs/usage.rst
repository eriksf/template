========
Usage
========

To use this template, simply update it::

	import read-the-docs-template


--------------------
Uploading a file(s):
--------------------

**CLI**

.. code:: shell

    $ files-upload -v -F files/picksumipsum.txt -S api.tacc.cloud nryan

..

.. container:: foldable

    .. container:: header

        :fa:`caret-right`
        **cURL**

    .. code:: shell

        $ curl -sk -H "Authorization: Bearer $ACCESS_TOKEN" \
             -X POST \
             -F "fileToUpload=@files/picksumipsum.txt" \
             https://tacc.cloud/files/v2/media/api.tacc.cloud/nryan
