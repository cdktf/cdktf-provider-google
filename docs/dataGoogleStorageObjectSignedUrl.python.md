# `dataGoogleStorageObjectSignedUrl` Submodule <a name="`dataGoogleStorageObjectSignedUrl` Submodule" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageObjectSignedUrl <a name="DataGoogleStorageObjectSignedUrl" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url google_storage_object_signed_url}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_object_signed_url

dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl(
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
  path: str,
  content_md5: str = None,
  content_type: str = None,
  credentials: str = None,
  duration: str = None,
  extension_headers: typing.Mapping[str] = None,
  http_method: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#bucket DataGoogleStorageObjectSignedUrl#bucket}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#path DataGoogleStorageObjectSignedUrl#path}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.contentMd5">content_md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#content_md5 DataGoogleStorageObjectSignedUrl#content_md5}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#content_type DataGoogleStorageObjectSignedUrl#content_type}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.credentials">credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#credentials DataGoogleStorageObjectSignedUrl#credentials}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#duration DataGoogleStorageObjectSignedUrl#duration}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.extensionHeaders">extension_headers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#extension_headers DataGoogleStorageObjectSignedUrl#extension_headers}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.httpMethod">http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#http_method DataGoogleStorageObjectSignedUrl#http_method}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#id DataGoogleStorageObjectSignedUrl#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#bucket DataGoogleStorageObjectSignedUrl#bucket}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#path DataGoogleStorageObjectSignedUrl#path}.

---

##### `content_md5`<sup>Optional</sup> <a name="content_md5" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.contentMd5"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#content_md5 DataGoogleStorageObjectSignedUrl#content_md5}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.contentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#content_type DataGoogleStorageObjectSignedUrl#content_type}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.credentials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#credentials DataGoogleStorageObjectSignedUrl#credentials}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.duration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#duration DataGoogleStorageObjectSignedUrl#duration}.

---

##### `extension_headers`<sup>Optional</sup> <a name="extension_headers" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.extensionHeaders"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#extension_headers DataGoogleStorageObjectSignedUrl#extension_headers}.

---

##### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.httpMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#http_method DataGoogleStorageObjectSignedUrl#http_method}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#id DataGoogleStorageObjectSignedUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetContentMd5">reset_content_md5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetExtensionHeaders">reset_extension_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetHttpMethod">reset_http_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_content_md5` <a name="reset_content_md5" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetContentMd5"></a>

```python
def reset_content_md5() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_credentials` <a name="reset_credentials" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_duration` <a name="reset_duration" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_extension_headers` <a name="reset_extension_headers" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetExtensionHeaders"></a>

```python
def reset_extension_headers() -> None
```

##### `reset_http_method` <a name="reset_http_method" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetHttpMethod"></a>

```python
def reset_http_method() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleStorageObjectSignedUrl resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_object_signed_url

dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_object_signed_url

dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_object_signed_url

dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_object_signed_url

dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleStorageObjectSignedUrl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleStorageObjectSignedUrl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleStorageObjectSignedUrl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageObjectSignedUrl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.signedUrl">signed_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentMd5Input">content_md5_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.credentialsInput">credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.extensionHeadersInput">extension_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentMd5">content_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.credentials">credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.extensionHeaders">extension_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.path">path</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `signed_url`<sup>Required</sup> <a name="signed_url" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.signedUrl"></a>

```python
signed_url: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `content_md5_input`<sup>Optional</sup> <a name="content_md5_input" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentMd5Input"></a>

```python
content_md5_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.credentialsInput"></a>

```python
credentials_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `extension_headers_input`<sup>Optional</sup> <a name="extension_headers_input" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.extensionHeadersInput"></a>

```python
extension_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `content_md5`<sup>Required</sup> <a name="content_md5" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentMd5"></a>

```python
content_md5: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `extension_headers`<sup>Required</sup> <a name="extension_headers" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.extensionHeaders"></a>

```python
extension_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.path"></a>

```python
path: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageObjectSignedUrlConfig <a name="DataGoogleStorageObjectSignedUrlConfig" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_object_signed_url

dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  path: str,
  content_md5: str = None,
  content_type: str = None,
  credentials: str = None,
  duration: str = None,
  extension_headers: typing.Mapping[str] = None,
  http_method: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#bucket DataGoogleStorageObjectSignedUrl#bucket}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#path DataGoogleStorageObjectSignedUrl#path}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.contentMd5">content_md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#content_md5 DataGoogleStorageObjectSignedUrl#content_md5}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#content_type DataGoogleStorageObjectSignedUrl#content_type}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.credentials">credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#credentials DataGoogleStorageObjectSignedUrl#credentials}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#duration DataGoogleStorageObjectSignedUrl#duration}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.extensionHeaders">extension_headers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#extension_headers DataGoogleStorageObjectSignedUrl#extension_headers}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.httpMethod">http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#http_method DataGoogleStorageObjectSignedUrl#http_method}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#id DataGoogleStorageObjectSignedUrl#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#bucket DataGoogleStorageObjectSignedUrl#bucket}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#path DataGoogleStorageObjectSignedUrl#path}.

---

##### `content_md5`<sup>Optional</sup> <a name="content_md5" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.contentMd5"></a>

```python
content_md5: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#content_md5 DataGoogleStorageObjectSignedUrl#content_md5}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#content_type DataGoogleStorageObjectSignedUrl#content_type}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#credentials DataGoogleStorageObjectSignedUrl#credentials}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.duration"></a>

```python
duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#duration DataGoogleStorageObjectSignedUrl#duration}.

---

##### `extension_headers`<sup>Optional</sup> <a name="extension_headers" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.extensionHeaders"></a>

```python
extension_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#extension_headers DataGoogleStorageObjectSignedUrl#extension_headers}.

---

##### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#http_method DataGoogleStorageObjectSignedUrl#http_method}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/storage_object_signed_url#id DataGoogleStorageObjectSignedUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



