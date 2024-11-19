# `dataGoogleComputeForwardingRules` Submodule <a name="`dataGoogleComputeForwardingRules` Submodule" id="@cdktf/provider-google.dataGoogleComputeForwardingRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeForwardingRules <a name="DataGoogleComputeForwardingRules" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/compute_forwarding_rules google_compute_forwarding_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_forwarding_rules

dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/compute_forwarding_rules#id DataGoogleComputeForwardingRules#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/compute_forwarding_rules#project DataGoogleComputeForwardingRules#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/compute_forwarding_rules#region DataGoogleComputeForwardingRules#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/compute_forwarding_rules#id DataGoogleComputeForwardingRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/compute_forwarding_rules#project DataGoogleComputeForwardingRules#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/compute_forwarding_rules#region DataGoogleComputeForwardingRules#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleComputeForwardingRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_forwarding_rules

dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_forwarding_rules

dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_forwarding_rules

dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_forwarding_rules

dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleComputeForwardingRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeForwardingRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeForwardingRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/compute_forwarding_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeForwardingRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList">DataGoogleComputeForwardingRulesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.rules"></a>

```python
rules: DataGoogleComputeForwardingRulesRulesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList">DataGoogleComputeForwardingRulesRulesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeForwardingRulesConfig <a name="DataGoogleComputeForwardingRulesConfig" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_forwarding_rules

dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/compute_forwarding_rules#id DataGoogleComputeForwardingRules#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/compute_forwarding_rules#project DataGoogleComputeForwardingRules#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/compute_forwarding_rules#region DataGoogleComputeForwardingRules#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/compute_forwarding_rules#id DataGoogleComputeForwardingRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/compute_forwarding_rules#project DataGoogleComputeForwardingRules#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/compute_forwarding_rules#region DataGoogleComputeForwardingRules#region}.

---

### DataGoogleComputeForwardingRulesRules <a name="DataGoogleComputeForwardingRulesRules" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_forwarding_rules

dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRules()
```


### DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations <a name="DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_forwarding_rules

dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeForwardingRulesRulesList <a name="DataGoogleComputeForwardingRulesRulesList" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_forwarding_rules

dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeForwardingRulesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeForwardingRulesRulesOutputReference <a name="DataGoogleComputeForwardingRulesRulesOutputReference" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_forwarding_rules

dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.allowGlobalAccess">allow_global_access</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.allowPscGlobalAccess">allow_psc_global_access</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.allPorts">all_ports</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.backendService">backend_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.baseForwardingRule">base_forwarding_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.forwardingRuleId">forwarding_rule_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.ipVersion">ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.isMirroringCollector">is_mirroring_collector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.networkTier">network_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.noAutomateDnsZone">no_automate_dns_zone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.portRange">port_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.ports">ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.pscConnectionId">psc_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.pscConnectionStatus">psc_connection_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.recreateClosedPsc">recreate_closed_psc</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.serviceDirectoryRegistrations">service_directory_registrations</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList">DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.serviceLabel">service_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.sourceIpRanges">source_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRules">DataGoogleComputeForwardingRulesRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_global_access`<sup>Required</sup> <a name="allow_global_access" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.allowGlobalAccess"></a>

```python
allow_global_access: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `allow_psc_global_access`<sup>Required</sup> <a name="allow_psc_global_access" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.allowPscGlobalAccess"></a>

```python
allow_psc_global_access: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `all_ports`<sup>Required</sup> <a name="all_ports" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.allPorts"></a>

```python
all_ports: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `backend_service`<sup>Required</sup> <a name="backend_service" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.backendService"></a>

```python
backend_service: str
```

- *Type:* str

---

##### `base_forwarding_rule`<sup>Required</sup> <a name="base_forwarding_rule" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.baseForwardingRule"></a>

```python
base_forwarding_rule: str
```

- *Type:* str

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `forwarding_rule_id`<sup>Required</sup> <a name="forwarding_rule_id" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.forwardingRuleId"></a>

```python
forwarding_rule_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

---

##### `is_mirroring_collector`<sup>Required</sup> <a name="is_mirroring_collector" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.isMirroringCollector"></a>

```python
is_mirroring_collector: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `load_balancing_scheme`<sup>Required</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

---

##### `no_automate_dns_zone`<sup>Required</sup> <a name="no_automate_dns_zone" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.noAutomateDnsZone"></a>

```python
no_automate_dns_zone: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `port_range`<sup>Required</sup> <a name="port_range" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.portRange"></a>

```python
port_range: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `psc_connection_id`<sup>Required</sup> <a name="psc_connection_id" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.pscConnectionId"></a>

```python
psc_connection_id: str
```

- *Type:* str

---

##### `psc_connection_status`<sup>Required</sup> <a name="psc_connection_status" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.pscConnectionStatus"></a>

```python
psc_connection_status: str
```

- *Type:* str

---

##### `recreate_closed_psc`<sup>Required</sup> <a name="recreate_closed_psc" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.recreateClosedPsc"></a>

```python
recreate_closed_psc: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `service_directory_registrations`<sup>Required</sup> <a name="service_directory_registrations" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.serviceDirectoryRegistrations"></a>

```python
service_directory_registrations: DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList">DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList</a>

---

##### `service_label`<sup>Required</sup> <a name="service_label" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.serviceLabel"></a>

```python
service_label: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `source_ip_ranges`<sup>Required</sup> <a name="source_ip_ranges" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.sourceIpRanges"></a>

```python
source_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeForwardingRulesRules
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRules">DataGoogleComputeForwardingRulesRules</a>

---


### DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList <a name="DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_forwarding_rules

dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference <a name="DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_forwarding_rules

dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations">DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations">DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations</a>

---



