# `dataGoogleBeyondcorpAppGateway` Submodule <a name="`dataGoogleBeyondcorpAppGateway` Submodule" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBeyondcorpAppGateway <a name="DataGoogleBeyondcorpAppGateway" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/beyondcorp_app_gateway google_beyondcorp_app_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_beyondcorp_app_gateway

dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | ID of the AppGateway. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/beyondcorp_app_gateway#id DataGoogleBeyondcorpAppGateway#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/beyondcorp_app_gateway#project DataGoogleBeyondcorpAppGateway#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the AppGateway. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.name"></a>

- *Type:* str

ID of the AppGateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/beyondcorp_app_gateway#name DataGoogleBeyondcorpAppGateway#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/beyondcorp_app_gateway#id DataGoogleBeyondcorpAppGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/beyondcorp_app_gateway#project DataGoogleBeyondcorpAppGateway#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.Initializer.parameter.region"></a>

- *Type:* str

The region of the AppGateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/beyondcorp_app_gateway#region DataGoogleBeyondcorpAppGateway#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleBeyondcorpAppGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_beyondcorp_app_gateway

dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_beyondcorp_app_gateway

dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_beyondcorp_app_gateway

dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_beyondcorp_app_gateway

dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleBeyondcorpAppGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleBeyondcorpAppGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleBeyondcorpAppGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/beyondcorp_app_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBeyondcorpAppGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.allocatedConnections">allocated_connections</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList">DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.hostType">host_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `allocated_connections`<sup>Required</sup> <a name="allocated_connections" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.allocatedConnections"></a>

```python
allocated_connections: DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList">DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `host_type`<sup>Required</sup> <a name="host_type" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.hostType"></a>

```python
host_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBeyondcorpAppGatewayAllocatedConnections <a name="DataGoogleBeyondcorpAppGatewayAllocatedConnections" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_beyondcorp_app_gateway

dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnections()
```


### DataGoogleBeyondcorpAppGatewayConfig <a name="DataGoogleBeyondcorpAppGatewayConfig" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_beyondcorp_app_gateway

dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.name">name</a></code> | <code>str</code> | ID of the AppGateway. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/beyondcorp_app_gateway#id DataGoogleBeyondcorpAppGateway#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/beyondcorp_app_gateway#project DataGoogleBeyondcorpAppGateway#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.region">region</a></code> | <code>str</code> | The region of the AppGateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

ID of the AppGateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/beyondcorp_app_gateway#name DataGoogleBeyondcorpAppGateway#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/beyondcorp_app_gateway#id DataGoogleBeyondcorpAppGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/beyondcorp_app_gateway#project DataGoogleBeyondcorpAppGateway#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the AppGateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/beyondcorp_app_gateway#region DataGoogleBeyondcorpAppGateway#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList <a name="DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_beyondcorp_app_gateway

dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference <a name="DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_beyondcorp_app_gateway

dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.ingressPort">ingress_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.pscUri">psc_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnections">DataGoogleBeyondcorpAppGatewayAllocatedConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress_port`<sup>Required</sup> <a name="ingress_port" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.ingressPort"></a>

```python
ingress_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `psc_uri`<sup>Required</sup> <a name="psc_uri" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.pscUri"></a>

```python
psc_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBeyondcorpAppGatewayAllocatedConnections
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppGateway.DataGoogleBeyondcorpAppGatewayAllocatedConnections">DataGoogleBeyondcorpAppGatewayAllocatedConnections</a>

---



