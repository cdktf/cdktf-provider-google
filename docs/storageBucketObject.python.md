# `google_storage_bucket_object`

Refer to the Terraform Registory for docs: [`google_storage_bucket_object`](https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object).

# `storageBucketObject` Submodule <a name="`storageBucketObject` Submodule" id="@cdktf/provider-google.storageBucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBucketObject <a name="StorageBucketObject" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object google_storage_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket_object

storageBucketObject.StorageBucketObject(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  name: str,
  cache_control: str = None,
  content: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_language: str = None,
  content_type: str = None,
  customer_encryption: StorageBucketObjectCustomerEncryption = None,
  detect_md5_hash: str = None,
  event_based_hold: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kms_key_name: str = None,
  metadata: typing.Mapping[str] = None,
  source: str = None,
  storage_class: str = None,
  temporary_hold: typing.Union[bool, IResolvable] = None,
  timeouts: StorageBucketObjectTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | The name of the containing bucket. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the object. If you're interpolating the name of this object, see output_name instead. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.cacheControl">cache_control</a></code> | <code>str</code> | Cache-Control directive to specify caching behavior of object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.content">content</a></code> | <code>str</code> | Data as string to be uploaded. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.contentDisposition">content_disposition</a></code> | <code>str</code> | Content-Disposition of the object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.contentEncoding">content_encoding</a></code> | <code>str</code> | Content-Encoding of the object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.contentLanguage">content_language</a></code> | <code>str</code> | Content-Language of the object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8". |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.customerEncryption">customer_encryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a></code> | customer_encryption block. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.detectMd5Hash">detect_md5_hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#detect_md5hash StorageBucketObject#detect_md5hash}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.eventBasedHold">event_based_hold</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether an object is under event-based hold. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#id StorageBucketObject#id}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Resource name of the Cloud KMS key that will be used to encrypt the object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | User-provided metadata, in key/value pairs. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.source">source</a></code> | <code>str</code> | A path to the data you want to upload. Must be defined if content is not. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.storageClass">storage_class</a></code> | <code>str</code> | The StorageClass of the new bucket object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.temporaryHold">temporary_hold</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether an object is under temporary hold. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.bucket"></a>

- *Type:* str

The name of the containing bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#bucket StorageBucketObject#bucket}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.name"></a>

- *Type:* str

The name of the object. If you're interpolating the name of this object, see output_name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#name StorageBucketObject#name}

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.cacheControl"></a>

- *Type:* str

Cache-Control directive to specify caching behavior of object data.

If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#cache_control StorageBucketObject#cache_control}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.content"></a>

- *Type:* str

Data as string to be uploaded.

Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#content StorageBucketObject#content}

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.contentDisposition"></a>

- *Type:* str

Content-Disposition of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#content_disposition StorageBucketObject#content_disposition}

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.contentEncoding"></a>

- *Type:* str

Content-Encoding of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#content_encoding StorageBucketObject#content_encoding}

---

##### `content_language`<sup>Optional</sup> <a name="content_language" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.contentLanguage"></a>

- *Type:* str

Content-Language of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#content_language StorageBucketObject#content_language}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.contentType"></a>

- *Type:* str

Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#content_type StorageBucketObject#content_type}

---

##### `customer_encryption`<sup>Optional</sup> <a name="customer_encryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.customerEncryption"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a>

customer_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#customer_encryption StorageBucketObject#customer_encryption}

---

##### `detect_md5_hash`<sup>Optional</sup> <a name="detect_md5_hash" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.detectMd5Hash"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#detect_md5hash StorageBucketObject#detect_md5hash}.

---

##### `event_based_hold`<sup>Optional</sup> <a name="event_based_hold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.eventBasedHold"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an object is under event-based hold.

Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#event_based_hold StorageBucketObject#event_based_hold}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#id StorageBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.kmsKeyName"></a>

- *Type:* str

Resource name of the Cloud KMS key that will be used to encrypt the object.

Overrides the object metadata's kmsKeyName value, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#kms_key_name StorageBucketObject#kms_key_name}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

User-provided metadata, in key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#metadata StorageBucketObject#metadata}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.source"></a>

- *Type:* str

A path to the data you want to upload. Must be defined if content is not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#source StorageBucketObject#source}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.storageClass"></a>

- *Type:* str

The StorageClass of the new bucket object.

Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. If not provided, this defaults to the bucket's default storage class or to a standard class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#storage_class StorageBucketObject#storage_class}

---

##### `temporary_hold`<sup>Optional</sup> <a name="temporary_hold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.temporaryHold"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an object is under temporary hold.

While this flag is set to true, the object is protected against deletion and overwrites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#temporary_hold StorageBucketObject#temporary_hold}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#timeouts StorageBucketObject#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.putCustomerEncryption">put_customer_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetCacheControl">reset_cache_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentDisposition">reset_content_disposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentEncoding">reset_content_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentLanguage">reset_content_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetCustomerEncryption">reset_customer_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetDetectMd5Hash">reset_detect_md5_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetEventBasedHold">reset_event_based_hold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetStorageClass">reset_storage_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetTemporaryHold">reset_temporary_hold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_customer_encryption` <a name="put_customer_encryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putCustomerEncryption"></a>

```python
def put_customer_encryption(
  encryption_key: str,
  encryption_algorithm: str = None
) -> None
```

###### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putCustomerEncryption.parameter.encryptionKey"></a>

- *Type:* str

Base64 encoded customer supplied encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#encryption_key StorageBucketObject#encryption_key}

---

###### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putCustomerEncryption.parameter.encryptionAlgorithm"></a>

- *Type:* str

The encryption algorithm. Default: AES256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#encryption_algorithm StorageBucketObject#encryption_algorithm}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#create StorageBucketObject#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#delete StorageBucketObject#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#update StorageBucketObject#update}.

---

##### `reset_cache_control` <a name="reset_cache_control" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetCacheControl"></a>

```python
def reset_cache_control() -> None
```

##### `reset_content` <a name="reset_content" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_content_disposition` <a name="reset_content_disposition" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentDisposition"></a>

```python
def reset_content_disposition() -> None
```

##### `reset_content_encoding` <a name="reset_content_encoding" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentEncoding"></a>

```python
def reset_content_encoding() -> None
```

##### `reset_content_language` <a name="reset_content_language" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentLanguage"></a>

```python
def reset_content_language() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_customer_encryption` <a name="reset_customer_encryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetCustomerEncryption"></a>

```python
def reset_customer_encryption() -> None
```

##### `reset_detect_md5_hash` <a name="reset_detect_md5_hash" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetDetectMd5Hash"></a>

```python
def reset_detect_md5_hash() -> None
```

##### `reset_event_based_hold` <a name="reset_event_based_hold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetEventBasedHold"></a>

```python
def reset_event_based_hold() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```

##### `reset_temporary_hold` <a name="reset_temporary_hold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetTemporaryHold"></a>

```python
def reset_temporary_hold() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket_object

storageBucketObject.StorageBucketObject.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket_object

storageBucketObject.StorageBucketObject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket_object

storageBucketObject.StorageBucketObject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.crc32C">crc32_c</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.customerEncryption">customer_encryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference">StorageBucketObjectCustomerEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.md5Hash">md5_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.mediaLink">media_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.outputName">output_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference">StorageBucketObjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cacheControlInput">cache_control_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentDispositionInput">content_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentEncodingInput">content_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentLanguageInput">content_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.customerEncryptionInput">customer_encryption_input</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.detectMd5HashInput">detect_md5_hash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.eventBasedHoldInput">event_based_hold_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.temporaryHoldInput">temporary_hold_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cacheControl">cache_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentDisposition">content_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentEncoding">content_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentLanguage">content_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.detectMd5Hash">detect_md5_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.eventBasedHold">event_based_hold</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.temporaryHold">temporary_hold</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `crc32_c`<sup>Required</sup> <a name="crc32_c" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.crc32C"></a>

```python
crc32_c: str
```

- *Type:* str

---

##### `customer_encryption`<sup>Required</sup> <a name="customer_encryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.customerEncryption"></a>

```python
customer_encryption: StorageBucketObjectCustomerEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference">StorageBucketObjectCustomerEncryptionOutputReference</a>

---

##### `md5_hash`<sup>Required</sup> <a name="md5_hash" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.md5Hash"></a>

```python
md5_hash: str
```

- *Type:* str

---

##### `media_link`<sup>Required</sup> <a name="media_link" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.mediaLink"></a>

```python
media_link: str
```

- *Type:* str

---

##### `output_name`<sup>Required</sup> <a name="output_name" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.outputName"></a>

```python
output_name: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.timeouts"></a>

```python
timeouts: StorageBucketObjectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference">StorageBucketObjectTimeoutsOutputReference</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `cache_control_input`<sup>Optional</sup> <a name="cache_control_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cacheControlInput"></a>

```python
cache_control_input: str
```

- *Type:* str

---

##### `content_disposition_input`<sup>Optional</sup> <a name="content_disposition_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentDispositionInput"></a>

```python
content_disposition_input: str
```

- *Type:* str

---

##### `content_encoding_input`<sup>Optional</sup> <a name="content_encoding_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentEncodingInput"></a>

```python
content_encoding_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_language_input`<sup>Optional</sup> <a name="content_language_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentLanguageInput"></a>

```python
content_language_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `customer_encryption_input`<sup>Optional</sup> <a name="customer_encryption_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.customerEncryptionInput"></a>

```python
customer_encryption_input: StorageBucketObjectCustomerEncryption
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a>

---

##### `detect_md5_hash_input`<sup>Optional</sup> <a name="detect_md5_hash_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.detectMd5HashInput"></a>

```python
detect_md5_hash_input: str
```

- *Type:* str

---

##### `event_based_hold_input`<sup>Optional</sup> <a name="event_based_hold_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.eventBasedHoldInput"></a>

```python
event_based_hold_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `temporary_hold_input`<sup>Optional</sup> <a name="temporary_hold_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.temporaryHoldInput"></a>

```python
temporary_hold_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[StorageBucketObjectTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a>, cdktf.IResolvable]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `cache_control`<sup>Required</sup> <a name="cache_control" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_disposition`<sup>Required</sup> <a name="content_disposition" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

---

##### `content_encoding`<sup>Required</sup> <a name="content_encoding" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

---

##### `content_language`<sup>Required</sup> <a name="content_language" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `detect_md5_hash`<sup>Required</sup> <a name="detect_md5_hash" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.detectMd5Hash"></a>

```python
detect_md5_hash: str
```

- *Type:* str

---

##### `event_based_hold`<sup>Required</sup> <a name="event_based_hold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.eventBasedHold"></a>

```python
event_based_hold: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `temporary_hold`<sup>Required</sup> <a name="temporary_hold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.temporaryHold"></a>

```python
temporary_hold: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBucketObjectConfig <a name="StorageBucketObjectConfig" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket_object

storageBucketObject.StorageBucketObjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  name: str,
  cache_control: str = None,
  content: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_language: str = None,
  content_type: str = None,
  customer_encryption: StorageBucketObjectCustomerEncryption = None,
  detect_md5_hash: str = None,
  event_based_hold: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kms_key_name: str = None,
  metadata: typing.Mapping[str] = None,
  source: str = None,
  storage_class: str = None,
  temporary_hold: typing.Union[bool, IResolvable] = None,
  timeouts: StorageBucketObjectTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.bucket">bucket</a></code> | <code>str</code> | The name of the containing bucket. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.name">name</a></code> | <code>str</code> | The name of the object. If you're interpolating the name of this object, see output_name instead. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.cacheControl">cache_control</a></code> | <code>str</code> | Cache-Control directive to specify caching behavior of object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.content">content</a></code> | <code>str</code> | Data as string to be uploaded. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentDisposition">content_disposition</a></code> | <code>str</code> | Content-Disposition of the object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentEncoding">content_encoding</a></code> | <code>str</code> | Content-Encoding of the object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentLanguage">content_language</a></code> | <code>str</code> | Content-Language of the object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentType">content_type</a></code> | <code>str</code> | Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8". |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.customerEncryption">customer_encryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a></code> | customer_encryption block. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.detectMd5Hash">detect_md5_hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#detect_md5hash StorageBucketObject#detect_md5hash}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.eventBasedHold">event_based_hold</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether an object is under event-based hold. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#id StorageBucketObject#id}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Resource name of the Cloud KMS key that will be used to encrypt the object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | User-provided metadata, in key/value pairs. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.source">source</a></code> | <code>str</code> | A path to the data you want to upload. Must be defined if content is not. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.storageClass">storage_class</a></code> | <code>str</code> | The StorageClass of the new bucket object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.temporaryHold">temporary_hold</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether an object is under temporary hold. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the containing bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#bucket StorageBucketObject#bucket}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the object. If you're interpolating the name of this object, see output_name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#name StorageBucketObject#name}

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

Cache-Control directive to specify caching behavior of object data.

If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#cache_control StorageBucketObject#cache_control}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.content"></a>

```python
content: str
```

- *Type:* str

Data as string to be uploaded.

Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#content StorageBucketObject#content}

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

Content-Disposition of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#content_disposition StorageBucketObject#content_disposition}

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

Content-Encoding of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#content_encoding StorageBucketObject#content_encoding}

---

##### `content_language`<sup>Optional</sup> <a name="content_language" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

Content-Language of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#content_language StorageBucketObject#content_language}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#content_type StorageBucketObject#content_type}

---

##### `customer_encryption`<sup>Optional</sup> <a name="customer_encryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.customerEncryption"></a>

```python
customer_encryption: StorageBucketObjectCustomerEncryption
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a>

customer_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#customer_encryption StorageBucketObject#customer_encryption}

---

##### `detect_md5_hash`<sup>Optional</sup> <a name="detect_md5_hash" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.detectMd5Hash"></a>

```python
detect_md5_hash: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#detect_md5hash StorageBucketObject#detect_md5hash}.

---

##### `event_based_hold`<sup>Optional</sup> <a name="event_based_hold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.eventBasedHold"></a>

```python
event_based_hold: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an object is under event-based hold.

Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#event_based_hold StorageBucketObject#event_based_hold}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#id StorageBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Resource name of the Cloud KMS key that will be used to encrypt the object.

Overrides the object metadata's kmsKeyName value, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#kms_key_name StorageBucketObject#kms_key_name}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-provided metadata, in key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#metadata StorageBucketObject#metadata}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.source"></a>

```python
source: str
```

- *Type:* str

A path to the data you want to upload. Must be defined if content is not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#source StorageBucketObject#source}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

The StorageClass of the new bucket object.

Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. If not provided, this defaults to the bucket's default storage class or to a standard class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#storage_class StorageBucketObject#storage_class}

---

##### `temporary_hold`<sup>Optional</sup> <a name="temporary_hold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.temporaryHold"></a>

```python
temporary_hold: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an object is under temporary hold.

While this flag is set to true, the object is protected against deletion and overwrites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#temporary_hold StorageBucketObject#temporary_hold}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.timeouts"></a>

```python
timeouts: StorageBucketObjectTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#timeouts StorageBucketObject#timeouts}

---

### StorageBucketObjectCustomerEncryption <a name="StorageBucketObjectCustomerEncryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket_object

storageBucketObject.StorageBucketObjectCustomerEncryption(
  encryption_key: str,
  encryption_algorithm: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.property.encryptionKey">encryption_key</a></code> | <code>str</code> | Base64 encoded customer supplied encryption key. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | The encryption algorithm. Default: AES256. |

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

Base64 encoded customer supplied encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#encryption_key StorageBucketObject#encryption_key}

---

##### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

The encryption algorithm. Default: AES256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#encryption_algorithm StorageBucketObject#encryption_algorithm}

---

### StorageBucketObjectTimeouts <a name="StorageBucketObjectTimeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket_object

storageBucketObject.StorageBucketObjectTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#create StorageBucketObject#create}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#delete StorageBucketObject#delete}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#update StorageBucketObject#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#create StorageBucketObject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#delete StorageBucketObject#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/storage_bucket_object#update StorageBucketObject#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBucketObjectCustomerEncryptionOutputReference <a name="StorageBucketObjectCustomerEncryptionOutputReference" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket_object

storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resetEncryptionAlgorithm">reset_encryption_algorithm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_algorithm` <a name="reset_encryption_algorithm" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```python
def reset_encryption_algorithm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithmInput">encryption_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKeyInput">encryption_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKey">encryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_algorithm_input`<sup>Optional</sup> <a name="encryption_algorithm_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```python
encryption_algorithm_input: str
```

- *Type:* str

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKeyInput"></a>

```python
encryption_key_input: str
```

- *Type:* str

---

##### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: StorageBucketObjectCustomerEncryption
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a>

---


### StorageBucketObjectTimeoutsOutputReference <a name="StorageBucketObjectTimeoutsOutputReference" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_bucket_object

storageBucketObject.StorageBucketObjectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StorageBucketObjectTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a>, cdktf.IResolvable]

---



