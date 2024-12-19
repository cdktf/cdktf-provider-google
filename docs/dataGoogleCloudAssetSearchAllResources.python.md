# `dataGoogleCloudAssetSearchAllResources` Submodule <a name="`dataGoogleCloudAssetSearchAllResources` Submodule" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudAssetSearchAllResources <a name="DataGoogleCloudAssetSearchAllResources" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/data-sources/cloud_asset_search_all_resources google_cloud_asset_search_all_resources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_asset_search_all_resources

dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scope: str,
  asset_types: typing.List[str] = None,
  id: str = None,
  query: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/data-sources/cloud_asset_search_all_resources#scope DataGoogleCloudAssetSearchAllResources#scope}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.assetTypes">asset_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/data-sources/cloud_asset_search_all_resources#asset_types DataGoogleCloudAssetSearchAllResources#asset_types}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/data-sources/cloud_asset_search_all_resources#id DataGoogleCloudAssetSearchAllResources#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/data-sources/cloud_asset_search_all_resources#query DataGoogleCloudAssetSearchAllResources#query}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/data-sources/cloud_asset_search_all_resources#scope DataGoogleCloudAssetSearchAllResources#scope}.

---

##### `asset_types`<sup>Optional</sup> <a name="asset_types" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.assetTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/data-sources/cloud_asset_search_all_resources#asset_types DataGoogleCloudAssetSearchAllResources#asset_types}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/data-sources/cloud_asset_search_all_resources#id DataGoogleCloudAssetSearchAllResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/data-sources/cloud_asset_search_all_resources#query DataGoogleCloudAssetSearchAllResources#query}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetAssetTypes">reset_asset_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetQuery">reset_query</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_asset_types` <a name="reset_asset_types" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetAssetTypes"></a>

```python
def reset_asset_types() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetQuery"></a>

```python
def reset_query() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleCloudAssetSearchAllResources resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_asset_search_all_resources

dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_asset_search_all_resources

dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_asset_search_all_resources

dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_asset_search_all_resources

dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleCloudAssetSearchAllResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleCloudAssetSearchAllResources to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleCloudAssetSearchAllResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/data-sources/cloud_asset_search_all_resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudAssetSearchAllResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.results">results</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList">DataGoogleCloudAssetSearchAllResourcesResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.assetTypesInput">asset_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.assetTypes">asset_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.results"></a>

```python
results: DataGoogleCloudAssetSearchAllResourcesResultsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList">DataGoogleCloudAssetSearchAllResourcesResultsList</a>

---

##### `asset_types_input`<sup>Optional</sup> <a name="asset_types_input" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.assetTypesInput"></a>

```python
asset_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `asset_types`<sup>Required</sup> <a name="asset_types" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.assetTypes"></a>

```python
asset_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudAssetSearchAllResourcesConfig <a name="DataGoogleCloudAssetSearchAllResourcesConfig" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_asset_search_all_resources

dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scope: str,
  asset_types: typing.List[str] = None,
  id: str = None,
  query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/data-sources/cloud_asset_search_all_resources#scope DataGoogleCloudAssetSearchAllResources#scope}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.assetTypes">asset_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/data-sources/cloud_asset_search_all_resources#asset_types DataGoogleCloudAssetSearchAllResources#asset_types}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/data-sources/cloud_asset_search_all_resources#id DataGoogleCloudAssetSearchAllResources#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/data-sources/cloud_asset_search_all_resources#query DataGoogleCloudAssetSearchAllResources#query}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/data-sources/cloud_asset_search_all_resources#scope DataGoogleCloudAssetSearchAllResources#scope}.

---

##### `asset_types`<sup>Optional</sup> <a name="asset_types" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.assetTypes"></a>

```python
asset_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/data-sources/cloud_asset_search_all_resources#asset_types DataGoogleCloudAssetSearchAllResources#asset_types}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/data-sources/cloud_asset_search_all_resources#id DataGoogleCloudAssetSearchAllResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/data-sources/cloud_asset_search_all_resources#query DataGoogleCloudAssetSearchAllResources#query}.

---

### DataGoogleCloudAssetSearchAllResourcesResults <a name="DataGoogleCloudAssetSearchAllResourcesResults" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResults.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_asset_search_all_resources

dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResults()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudAssetSearchAllResourcesResultsList <a name="DataGoogleCloudAssetSearchAllResourcesResultsList" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_asset_search_all_resources

dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudAssetSearchAllResourcesResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudAssetSearchAllResourcesResultsOutputReference <a name="DataGoogleCloudAssetSearchAllResourcesResultsOutputReference" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_asset_search_all_resources

dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.assetType">asset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.folders">folders</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.kmsKeys">kms_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.parentAssetType">parent_asset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.parentFullResourceName">parent_full_resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResults">DataGoogleCloudAssetSearchAllResourcesResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `folders`<sup>Required</sup> <a name="folders" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.folders"></a>

```python
folders: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_keys`<sup>Required</sup> <a name="kms_keys" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.kmsKeys"></a>

```python
kms_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_tags`<sup>Required</sup> <a name="network_tags" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `parent_asset_type`<sup>Required</sup> <a name="parent_asset_type" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.parentAssetType"></a>

```python
parent_asset_type: str
```

- *Type:* str

---

##### `parent_full_resource_name`<sup>Required</sup> <a name="parent_full_resource_name" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.parentFullResourceName"></a>

```python
parent_full_resource_name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudAssetSearchAllResourcesResults
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResults">DataGoogleCloudAssetSearchAllResourcesResults</a>

---



