# `dataGoogleSecretManagerSecrets` Submodule <a name="`dataGoogleSecretManagerSecrets` Submodule" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerSecrets <a name="DataGoogleSecretManagerSecrets" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/secret_manager_secrets google_secret_manager_secrets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: str = None,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Filter string, adhering to the rules in List-operation filtering (https://cloud.google.com/secret-manager/docs/filtering). List only secrets matching the filter. If filter is empty, all secrets are listed. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/secret_manager_secrets#id DataGoogleSecretManagerSecrets#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/secret_manager_secrets#project DataGoogleSecretManagerSecrets#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.filter"></a>

- *Type:* str

Filter string, adhering to the rules in List-operation filtering (https://cloud.google.com/secret-manager/docs/filtering). List only secrets matching the filter. If filter is empty, all secrets are listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/secret_manager_secrets#filter DataGoogleSecretManagerSecrets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/secret_manager_secrets#id DataGoogleSecretManagerSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/secret_manager_secrets#project DataGoogleSecretManagerSecrets#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleSecretManagerSecrets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleSecretManagerSecrets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleSecretManagerSecrets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleSecretManagerSecrets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/secret_manager_secrets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleSecretManagerSecrets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList">DataGoogleSecretManagerSecretsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.secrets"></a>

```python
secrets: DataGoogleSecretManagerSecretsSecretsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList">DataGoogleSecretManagerSecretsSecretsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerSecretsConfig <a name="DataGoogleSecretManagerSecretsConfig" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: str = None,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.filter">filter</a></code> | <code>str</code> | Filter string, adhering to the rules in List-operation filtering (https://cloud.google.com/secret-manager/docs/filtering). List only secrets matching the filter. If filter is empty, all secrets are listed. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/secret_manager_secrets#id DataGoogleSecretManagerSecrets#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/secret_manager_secrets#project DataGoogleSecretManagerSecrets#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Filter string, adhering to the rules in List-operation filtering (https://cloud.google.com/secret-manager/docs/filtering). List only secrets matching the filter. If filter is empty, all secrets are listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/secret_manager_secrets#filter DataGoogleSecretManagerSecrets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/secret_manager_secrets#id DataGoogleSecretManagerSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/secret_manager_secrets#project DataGoogleSecretManagerSecrets#project}.

---

### DataGoogleSecretManagerSecretsSecrets <a name="DataGoogleSecretManagerSecretsSecrets" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecrets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecrets()
```


### DataGoogleSecretManagerSecretsSecretsReplication <a name="DataGoogleSecretManagerSecretsSecretsReplication" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplication.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplication()
```


### DataGoogleSecretManagerSecretsSecretsReplicationAuto <a name="DataGoogleSecretManagerSecretsSecretsReplicationAuto" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAuto"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAuto.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAuto()
```


### DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption <a name="DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption()
```


### DataGoogleSecretManagerSecretsSecretsReplicationUserManaged <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManaged" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManaged.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManaged()
```


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas()
```


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption()
```


### DataGoogleSecretManagerSecretsSecretsRotation <a name="DataGoogleSecretManagerSecretsSecretsRotation" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotation()
```


### DataGoogleSecretManagerSecretsSecretsTopics <a name="DataGoogleSecretManagerSecretsSecretsTopics" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopics.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopics()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSecretManagerSecretsSecretsList <a name="DataGoogleSecretManagerSecretsSecretsList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSecretManagerSecretsSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSecretManagerSecretsSecretsOutputReference <a name="DataGoogleSecretManagerSecretsSecretsOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.annotations">annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.deletionProtection">deletion_protection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.replication">replication</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList">DataGoogleSecretManagerSecretsSecretsReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.rotation">rotation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList">DataGoogleSecretManagerSecretsSecretsRotationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.topics">topics</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList">DataGoogleSecretManagerSecretsSecretsTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.versionAliases">version_aliases</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.versionDestroyTtl">version_destroy_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecrets">DataGoogleSecretManagerSecretsSecrets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.annotations"></a>

```python
annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.deletionProtection"></a>

```python
deletion_protection: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.replication"></a>

```python
replication: DataGoogleSecretManagerSecretsSecretsReplicationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList">DataGoogleSecretManagerSecretsSecretsReplicationList</a>

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.rotation"></a>

```python
rotation: DataGoogleSecretManagerSecretsSecretsRotationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList">DataGoogleSecretManagerSecretsSecretsRotationList</a>

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.topics"></a>

```python
topics: DataGoogleSecretManagerSecretsSecretsTopicsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList">DataGoogleSecretManagerSecretsSecretsTopicsList</a>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `version_aliases`<sup>Required</sup> <a name="version_aliases" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.versionAliases"></a>

```python
version_aliases: StringMap
```

- *Type:* cdktf.StringMap

---

##### `version_destroy_ttl`<sup>Required</sup> <a name="version_destroy_ttl" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.versionDestroyTtl"></a>

```python
version_destroy_ttl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSecretManagerSecretsSecrets
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecrets">DataGoogleSecretManagerSecretsSecrets</a>

---


### DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList <a name="DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference <a name="DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption">DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption">DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption</a>

---


### DataGoogleSecretManagerSecretsSecretsReplicationAutoList <a name="DataGoogleSecretManagerSecretsSecretsReplicationAutoList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference <a name="DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.customerManagedEncryption">customer_managed_encryption</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList">DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAuto">DataGoogleSecretManagerSecretsSecretsReplicationAuto</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_managed_encryption`<sup>Required</sup> <a name="customer_managed_encryption" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.customerManagedEncryption"></a>

```python
customer_managed_encryption: DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList">DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSecretManagerSecretsSecretsReplicationAuto
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAuto">DataGoogleSecretManagerSecretsSecretsReplicationAuto</a>

---


### DataGoogleSecretManagerSecretsSecretsReplicationList <a name="DataGoogleSecretManagerSecretsSecretsReplicationList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSecretManagerSecretsSecretsReplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSecretManagerSecretsSecretsReplicationOutputReference <a name="DataGoogleSecretManagerSecretsSecretsReplicationOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.auto">auto</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList">DataGoogleSecretManagerSecretsSecretsReplicationAutoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.userManaged">user_managed</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplication">DataGoogleSecretManagerSecretsSecretsReplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto`<sup>Required</sup> <a name="auto" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.auto"></a>

```python
auto: DataGoogleSecretManagerSecretsSecretsReplicationAutoList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList">DataGoogleSecretManagerSecretsSecretsReplicationAutoList</a>

---

##### `user_managed`<sup>Required</sup> <a name="user_managed" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.userManaged"></a>

```python
user_managed: DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSecretManagerSecretsSecretsReplication
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplication">DataGoogleSecretManagerSecretsSecretsReplication</a>

---


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.replicas">replicas</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManaged">DataGoogleSecretManagerSecretsSecretsReplicationUserManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.replicas"></a>

```python
replicas: DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSecretManagerSecretsSecretsReplicationUserManaged
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManaged">DataGoogleSecretManagerSecretsSecretsReplicationUserManaged</a>

---


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption</a>

---


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption">customer_managed_encryption</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_managed_encryption`<sup>Required</sup> <a name="customer_managed_encryption" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption"></a>

```python
customer_managed_encryption: DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas</a>

---


### DataGoogleSecretManagerSecretsSecretsRotationList <a name="DataGoogleSecretManagerSecretsSecretsRotationList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSecretManagerSecretsSecretsRotationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSecretManagerSecretsSecretsRotationOutputReference <a name="DataGoogleSecretManagerSecretsSecretsRotationOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.nextRotationTime">next_rotation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.rotationPeriod">rotation_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotation">DataGoogleSecretManagerSecretsSecretsRotation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `next_rotation_time`<sup>Required</sup> <a name="next_rotation_time" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.nextRotationTime"></a>

```python
next_rotation_time: str
```

- *Type:* str

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.rotationPeriod"></a>

```python
rotation_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSecretManagerSecretsSecretsRotation
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotation">DataGoogleSecretManagerSecretsSecretsRotation</a>

---


### DataGoogleSecretManagerSecretsSecretsTopicsList <a name="DataGoogleSecretManagerSecretsSecretsTopicsList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSecretManagerSecretsSecretsTopicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSecretManagerSecretsSecretsTopicsOutputReference <a name="DataGoogleSecretManagerSecretsSecretsTopicsOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_secret_manager_secrets

dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopics">DataGoogleSecretManagerSecretsSecretsTopics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSecretManagerSecretsSecretsTopics
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopics">DataGoogleSecretManagerSecretsSecretsTopics</a>

---



