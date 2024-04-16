# `dataGoogleStorageBucketObjectContent` Submodule <a name="`dataGoogleStorageBucketObjectContent` Submodule" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageBucketObjectContent <a name="DataGoogleStorageBucketObjectContent" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/storage_bucket_object_content google_storage_bucket_object_content}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket_object_content

dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent(
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
  content: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | The name of the containing bucket. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the object. If you're interpolating the name of this object, see output_name instead. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.content">content</a></code> | <code>str</code> | Data as string to be uploaded. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/storage_bucket_object_content#id DataGoogleStorageBucketObjectContent#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.bucket"></a>

- *Type:* str

The name of the containing bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/storage_bucket_object_content#bucket DataGoogleStorageBucketObjectContent#bucket}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.name"></a>

- *Type:* str

The name of the object. If you're interpolating the name of this object, see output_name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/storage_bucket_object_content#name DataGoogleStorageBucketObjectContent#name}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.content"></a>

- *Type:* str

Data as string to be uploaded.

Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/storage_bucket_object_content#content DataGoogleStorageBucketObjectContent#content}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/storage_bucket_object_content#id DataGoogleStorageBucketObjectContent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_content` <a name="reset_content" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleStorageBucketObjectContent resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket_object_content

dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket_object_content

dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket_object_content

dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket_object_content

dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleStorageBucketObjectContent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleStorageBucketObjectContent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleStorageBucketObjectContent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/storage_bucket_object_content#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageBucketObjectContent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.cacheControl">cache_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentDisposition">content_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentEncoding">content_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentLanguage">content_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.crc32C">crc32_c</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.customerEncryption">customer_encryption</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList">DataGoogleStorageBucketObjectContentCustomerEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.detectMd5Hash">detect_md5_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.eventBasedHold">event_based_hold</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.md5Hash">md5_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.mediaLink">media_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.outputName">output_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.retention">retention</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList">DataGoogleStorageBucketObjectContentRetentionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.temporaryHold">temporary_hold</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cache_control`<sup>Required</sup> <a name="cache_control" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

---

##### `content_disposition`<sup>Required</sup> <a name="content_disposition" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

---

##### `content_encoding`<sup>Required</sup> <a name="content_encoding" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

---

##### `content_language`<sup>Required</sup> <a name="content_language" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `crc32_c`<sup>Required</sup> <a name="crc32_c" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.crc32C"></a>

```python
crc32_c: str
```

- *Type:* str

---

##### `customer_encryption`<sup>Required</sup> <a name="customer_encryption" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.customerEncryption"></a>

```python
customer_encryption: DataGoogleStorageBucketObjectContentCustomerEncryptionList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList">DataGoogleStorageBucketObjectContentCustomerEncryptionList</a>

---

##### `detect_md5_hash`<sup>Required</sup> <a name="detect_md5_hash" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.detectMd5Hash"></a>

```python
detect_md5_hash: str
```

- *Type:* str

---

##### `event_based_hold`<sup>Required</sup> <a name="event_based_hold" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.eventBasedHold"></a>

```python
event_based_hold: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `md5_hash`<sup>Required</sup> <a name="md5_hash" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.md5Hash"></a>

```python
md5_hash: str
```

- *Type:* str

---

##### `media_link`<sup>Required</sup> <a name="media_link" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.mediaLink"></a>

```python
media_link: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `output_name`<sup>Required</sup> <a name="output_name" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.outputName"></a>

```python
output_name: str
```

- *Type:* str

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.retention"></a>

```python
retention: DataGoogleStorageBucketObjectContentRetentionList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList">DataGoogleStorageBucketObjectContentRetentionList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `temporary_hold`<sup>Required</sup> <a name="temporary_hold" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.temporaryHold"></a>

```python
temporary_hold: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageBucketObjectContentConfig <a name="DataGoogleStorageBucketObjectContentConfig" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket_object_content

dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  name: str,
  content: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.bucket">bucket</a></code> | <code>str</code> | The name of the containing bucket. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.name">name</a></code> | <code>str</code> | The name of the object. If you're interpolating the name of this object, see output_name instead. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.content">content</a></code> | <code>str</code> | Data as string to be uploaded. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/storage_bucket_object_content#id DataGoogleStorageBucketObjectContent#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the containing bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/storage_bucket_object_content#bucket DataGoogleStorageBucketObjectContent#bucket}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the object. If you're interpolating the name of this object, see output_name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/storage_bucket_object_content#name DataGoogleStorageBucketObjectContent#name}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.content"></a>

```python
content: str
```

- *Type:* str

Data as string to be uploaded.

Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/storage_bucket_object_content#content DataGoogleStorageBucketObjectContent#content}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/storage_bucket_object_content#id DataGoogleStorageBucketObjectContent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleStorageBucketObjectContentCustomerEncryption <a name="DataGoogleStorageBucketObjectContentCustomerEncryption" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket_object_content

dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryption()
```


### DataGoogleStorageBucketObjectContentRetention <a name="DataGoogleStorageBucketObjectContentRetention" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetention.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket_object_content

dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetention()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageBucketObjectContentCustomerEncryptionList <a name="DataGoogleStorageBucketObjectContentCustomerEncryptionList" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket_object_content

dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference <a name="DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket_object_content

dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.encryptionKey">encryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryption">DataGoogleStorageBucketObjectContentCustomerEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageBucketObjectContentCustomerEncryption
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryption">DataGoogleStorageBucketObjectContentCustomerEncryption</a>

---


### DataGoogleStorageBucketObjectContentRetentionList <a name="DataGoogleStorageBucketObjectContentRetentionList" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket_object_content

dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageBucketObjectContentRetentionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageBucketObjectContentRetentionOutputReference <a name="DataGoogleStorageBucketObjectContentRetentionOutputReference" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket_object_content

dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.retainUntilTime">retain_until_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetention">DataGoogleStorageBucketObjectContentRetention</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `retain_until_time`<sup>Required</sup> <a name="retain_until_time" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.retainUntilTime"></a>

```python
retain_until_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageBucketObjectContentRetention
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetention">DataGoogleStorageBucketObjectContentRetention</a>

---



