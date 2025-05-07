# `dataGoogleSpannerDatabase` Submodule <a name="`dataGoogleSpannerDatabase` Submodule" id="@cdktf/provider-google.dataGoogleSpannerDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSpannerDatabase <a name="DataGoogleSpannerDatabase" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/spanner_database google_spanner_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_spanner_database

dataGoogleSpannerDatabase.DataGoogleSpannerDatabase(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance: str,
  name: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.name">name</a></code> | <code>str</code> | A unique identifier for the database, which cannot be changed after the instance is created. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/spanner_database#id DataGoogleSpannerDatabase#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/spanner_database#project DataGoogleSpannerDatabase#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.instance"></a>

- *Type:* str

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/spanner_database#instance DataGoogleSpannerDatabase#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.name"></a>

- *Type:* str

A unique identifier for the database, which cannot be changed after the instance is created.

Values are of the form '[a-z][-_a-z0-9]*[a-z0-9]'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/spanner_database#name DataGoogleSpannerDatabase#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/spanner_database#id DataGoogleSpannerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/spanner_database#project DataGoogleSpannerDatabase#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleSpannerDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_spanner_database

dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_spanner_database

dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_spanner_database

dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_spanner_database

dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleSpannerDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleSpannerDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleSpannerDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/spanner_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleSpannerDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.databaseDialect">database_dialect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.ddl">ddl</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.deletionProtection">deletion_protection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.enableDropProtection">enable_drop_protection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList">DataGoogleSpannerDatabaseEncryptionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.versionRetentionPeriod">version_retention_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `database_dialect`<sup>Required</sup> <a name="database_dialect" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.databaseDialect"></a>

```python
database_dialect: str
```

- *Type:* str

---

##### `ddl`<sup>Required</sup> <a name="ddl" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.ddl"></a>

```python
ddl: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.deletionProtection"></a>

```python
deletion_protection: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_drop_protection`<sup>Required</sup> <a name="enable_drop_protection" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.enableDropProtection"></a>

```python
enable_drop_protection: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.encryptionConfig"></a>

```python
encryption_config: DataGoogleSpannerDatabaseEncryptionConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList">DataGoogleSpannerDatabaseEncryptionConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `version_retention_period`<sup>Required</sup> <a name="version_retention_period" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.versionRetentionPeriod"></a>

```python
version_retention_period: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSpannerDatabaseConfig <a name="DataGoogleSpannerDatabaseConfig" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_spanner_database

dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance: str,
  name: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.instance">instance</a></code> | <code>str</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.name">name</a></code> | <code>str</code> | A unique identifier for the database, which cannot be changed after the instance is created. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/spanner_database#id DataGoogleSpannerDatabase#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/spanner_database#project DataGoogleSpannerDatabase#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/spanner_database#instance DataGoogleSpannerDatabase#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A unique identifier for the database, which cannot be changed after the instance is created.

Values are of the form '[a-z][-_a-z0-9]*[a-z0-9]'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/spanner_database#name DataGoogleSpannerDatabase#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/spanner_database#id DataGoogleSpannerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/spanner_database#project DataGoogleSpannerDatabase#project}.

---

### DataGoogleSpannerDatabaseEncryptionConfig <a name="DataGoogleSpannerDatabaseEncryptionConfig" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_spanner_database

dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSpannerDatabaseEncryptionConfigList <a name="DataGoogleSpannerDatabaseEncryptionConfigList" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_spanner_database

dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSpannerDatabaseEncryptionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSpannerDatabaseEncryptionConfigOutputReference <a name="DataGoogleSpannerDatabaseEncryptionConfigOutputReference" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_spanner_database

dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyNames">kms_key_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfig">DataGoogleSpannerDatabaseEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `kms_key_names`<sup>Required</sup> <a name="kms_key_names" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyNames"></a>

```python
kms_key_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSpannerDatabaseEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSpannerDatabase.DataGoogleSpannerDatabaseEncryptionConfig">DataGoogleSpannerDatabaseEncryptionConfig</a>

---



