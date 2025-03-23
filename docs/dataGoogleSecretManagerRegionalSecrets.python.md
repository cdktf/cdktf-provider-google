# `dataGoogleSecretManagerRegionalSecrets` Submodule <a name="`dataGoogleSecretManagerRegionalSecrets` Submodule" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerRegionalSecrets <a name="DataGoogleSecretManagerRegionalSecrets" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/secret_manager_regional_secrets google_secret_manager_regional_secrets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secrets

dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  filter: str = None,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/secret_manager_regional_secrets#location DataGoogleSecretManagerRegionalSecrets#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Filter string, adhering to the rules in List-operation filtering (https://cloud.google.com/secret-manager/docs/filtering). List only secrets matching the filter. If filter is empty, all regional secrets are listed from the specified location. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/secret_manager_regional_secrets#id DataGoogleSecretManagerRegionalSecrets#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/secret_manager_regional_secrets#project DataGoogleSecretManagerRegionalSecrets#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/secret_manager_regional_secrets#location DataGoogleSecretManagerRegionalSecrets#location}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.filter"></a>

- *Type:* str

Filter string, adhering to the rules in List-operation filtering (https://cloud.google.com/secret-manager/docs/filtering). List only secrets matching the filter. If filter is empty, all regional secrets are listed from the specified location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/secret_manager_regional_secrets#filter DataGoogleSecretManagerRegionalSecrets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/secret_manager_regional_secrets#id DataGoogleSecretManagerRegionalSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/secret_manager_regional_secrets#project DataGoogleSecretManagerRegionalSecrets#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleSecretManagerRegionalSecrets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secrets

dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secrets

dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secrets

dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secrets

dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleSecretManagerRegionalSecrets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleSecretManagerRegionalSecrets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleSecretManagerRegionalSecrets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/secret_manager_regional_secrets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleSecretManagerRegionalSecrets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList">DataGoogleSecretManagerRegionalSecretsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.secrets"></a>

```python
secrets: DataGoogleSecretManagerRegionalSecretsSecretsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList">DataGoogleSecretManagerRegionalSecretsSecretsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerRegionalSecretsConfig <a name="DataGoogleSecretManagerRegionalSecretsConfig" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secrets

dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  filter: str = None,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/secret_manager_regional_secrets#location DataGoogleSecretManagerRegionalSecrets#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.filter">filter</a></code> | <code>str</code> | Filter string, adhering to the rules in List-operation filtering (https://cloud.google.com/secret-manager/docs/filtering). List only secrets matching the filter. If filter is empty, all regional secrets are listed from the specified location. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/secret_manager_regional_secrets#id DataGoogleSecretManagerRegionalSecrets#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/secret_manager_regional_secrets#project DataGoogleSecretManagerRegionalSecrets#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/secret_manager_regional_secrets#location DataGoogleSecretManagerRegionalSecrets#location}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Filter string, adhering to the rules in List-operation filtering (https://cloud.google.com/secret-manager/docs/filtering). List only secrets matching the filter. If filter is empty, all regional secrets are listed from the specified location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/secret_manager_regional_secrets#filter DataGoogleSecretManagerRegionalSecrets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/secret_manager_regional_secrets#id DataGoogleSecretManagerRegionalSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/secret_manager_regional_secrets#project DataGoogleSecretManagerRegionalSecrets#project}.

---

### DataGoogleSecretManagerRegionalSecretsSecrets <a name="DataGoogleSecretManagerRegionalSecretsSecrets" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecrets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secrets

dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecrets()
```


### DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption <a name="DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secrets

dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption()
```


### DataGoogleSecretManagerRegionalSecretsSecretsRotation <a name="DataGoogleSecretManagerRegionalSecretsSecretsRotation" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secrets

dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotation()
```


### DataGoogleSecretManagerRegionalSecretsSecretsTopics <a name="DataGoogleSecretManagerRegionalSecretsSecretsTopics" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopics.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secrets

dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopics()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList <a name="DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secrets

dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference <a name="DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secrets

dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption">DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption">DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption</a>

---


### DataGoogleSecretManagerRegionalSecretsSecretsList <a name="DataGoogleSecretManagerRegionalSecretsSecretsList" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secrets

dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSecretManagerRegionalSecretsSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSecretManagerRegionalSecretsSecretsOutputReference <a name="DataGoogleSecretManagerRegionalSecretsSecretsOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secrets

dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.annotations">annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.customerManagedEncryption">customer_managed_encryption</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList">DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.rotation">rotation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList">DataGoogleSecretManagerRegionalSecretsSecretsRotationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.topics">topics</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList">DataGoogleSecretManagerRegionalSecretsSecretsTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.versionAliases">version_aliases</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.versionDestroyTtl">version_destroy_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecrets">DataGoogleSecretManagerRegionalSecretsSecrets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.annotations"></a>

```python
annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `customer_managed_encryption`<sup>Required</sup> <a name="customer_managed_encryption" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.customerManagedEncryption"></a>

```python
customer_managed_encryption: DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList">DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList</a>

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.rotation"></a>

```python
rotation: DataGoogleSecretManagerRegionalSecretsSecretsRotationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList">DataGoogleSecretManagerRegionalSecretsSecretsRotationList</a>

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.topics"></a>

```python
topics: DataGoogleSecretManagerRegionalSecretsSecretsTopicsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList">DataGoogleSecretManagerRegionalSecretsSecretsTopicsList</a>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `version_aliases`<sup>Required</sup> <a name="version_aliases" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.versionAliases"></a>

```python
version_aliases: StringMap
```

- *Type:* cdktf.StringMap

---

##### `version_destroy_ttl`<sup>Required</sup> <a name="version_destroy_ttl" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.versionDestroyTtl"></a>

```python
version_destroy_ttl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSecretManagerRegionalSecretsSecrets
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecrets">DataGoogleSecretManagerRegionalSecretsSecrets</a>

---


### DataGoogleSecretManagerRegionalSecretsSecretsRotationList <a name="DataGoogleSecretManagerRegionalSecretsSecretsRotationList" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secrets

dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference <a name="DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secrets

dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.nextRotationTime">next_rotation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.rotationPeriod">rotation_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotation">DataGoogleSecretManagerRegionalSecretsSecretsRotation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `next_rotation_time`<sup>Required</sup> <a name="next_rotation_time" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.nextRotationTime"></a>

```python
next_rotation_time: str
```

- *Type:* str

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.rotationPeriod"></a>

```python
rotation_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSecretManagerRegionalSecretsSecretsRotation
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotation">DataGoogleSecretManagerRegionalSecretsSecretsRotation</a>

---


### DataGoogleSecretManagerRegionalSecretsSecretsTopicsList <a name="DataGoogleSecretManagerRegionalSecretsSecretsTopicsList" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secrets

dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference <a name="DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_regional_secrets

dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopics">DataGoogleSecretManagerRegionalSecretsSecretsTopics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSecretManagerRegionalSecretsSecretsTopics
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopics">DataGoogleSecretManagerRegionalSecretsSecretsTopics</a>

---



