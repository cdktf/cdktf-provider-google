# `dataGoogleProjectOrganizationPolicy` Submodule <a name="`dataGoogleProjectOrganizationPolicy` Submodule" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleProjectOrganizationPolicy <a name="DataGoogleProjectOrganizationPolicy" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/project_organization_policy google_project_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  constraint: str,
  project: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.constraint">constraint</a></code> | <code>str</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | The project ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/project_organization_policy#id DataGoogleProjectOrganizationPolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.constraint"></a>

- *Type:* str

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/project_organization_policy#constraint DataGoogleProjectOrganizationPolicy#constraint}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.project"></a>

- *Type:* str

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/project_organization_policy#project DataGoogleProjectOrganizationPolicy#project}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/project_organization_policy#id DataGoogleProjectOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleProjectOrganizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleProjectOrganizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleProjectOrganizationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleProjectOrganizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/project_organization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleProjectOrganizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.booleanPolicy">boolean_policy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList">DataGoogleProjectOrganizationPolicyBooleanPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.listPolicy">list_policy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList">DataGoogleProjectOrganizationPolicyListPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.restorePolicy">restore_policy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList">DataGoogleProjectOrganizationPolicyRestorePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.constraintInput">constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.constraint">constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `boolean_policy`<sup>Required</sup> <a name="boolean_policy" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.booleanPolicy"></a>

```python
boolean_policy: DataGoogleProjectOrganizationPolicyBooleanPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList">DataGoogleProjectOrganizationPolicyBooleanPolicyList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `list_policy`<sup>Required</sup> <a name="list_policy" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.listPolicy"></a>

```python
list_policy: DataGoogleProjectOrganizationPolicyListPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList">DataGoogleProjectOrganizationPolicyListPolicyList</a>

---

##### `restore_policy`<sup>Required</sup> <a name="restore_policy" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.restorePolicy"></a>

```python
restore_policy: DataGoogleProjectOrganizationPolicyRestorePolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList">DataGoogleProjectOrganizationPolicyRestorePolicyList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `constraint_input`<sup>Optional</sup> <a name="constraint_input" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.constraintInput"></a>

```python
constraint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleProjectOrganizationPolicyBooleanPolicy <a name="DataGoogleProjectOrganizationPolicyBooleanPolicy" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicy()
```


### DataGoogleProjectOrganizationPolicyConfig <a name="DataGoogleProjectOrganizationPolicyConfig" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  constraint: str,
  project: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.constraint">constraint</a></code> | <code>str</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.project">project</a></code> | <code>str</code> | The project ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/project_organization_policy#id DataGoogleProjectOrganizationPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/project_organization_policy#constraint DataGoogleProjectOrganizationPolicy#constraint}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/project_organization_policy#project DataGoogleProjectOrganizationPolicy#project}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/project_organization_policy#id DataGoogleProjectOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleProjectOrganizationPolicyListPolicy <a name="DataGoogleProjectOrganizationPolicyListPolicy" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicy()
```


### DataGoogleProjectOrganizationPolicyListPolicyAllow <a name="DataGoogleProjectOrganizationPolicyListPolicyAllow" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllow.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllow()
```


### DataGoogleProjectOrganizationPolicyListPolicyDeny <a name="DataGoogleProjectOrganizationPolicyListPolicyDeny" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDeny.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDeny()
```


### DataGoogleProjectOrganizationPolicyRestorePolicy <a name="DataGoogleProjectOrganizationPolicyRestorePolicy" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicy()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleProjectOrganizationPolicyBooleanPolicyList <a name="DataGoogleProjectOrganizationPolicyBooleanPolicyList" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference <a name="DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforced">enforced</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicy">DataGoogleProjectOrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```python
enforced: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleProjectOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyBooleanPolicy">DataGoogleProjectOrganizationPolicyBooleanPolicy</a>

---


### DataGoogleProjectOrganizationPolicyListPolicyAllowList <a name="DataGoogleProjectOrganizationPolicyListPolicyAllowList" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference <a name="DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.all">all</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllow">DataGoogleProjectOrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```python
all: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleProjectOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllow">DataGoogleProjectOrganizationPolicyListPolicyAllow</a>

---


### DataGoogleProjectOrganizationPolicyListPolicyDenyList <a name="DataGoogleProjectOrganizationPolicyListPolicyDenyList" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference <a name="DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.all">all</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDeny">DataGoogleProjectOrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```python
all: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleProjectOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDeny">DataGoogleProjectOrganizationPolicyListPolicyDeny</a>

---


### DataGoogleProjectOrganizationPolicyListPolicyList <a name="DataGoogleProjectOrganizationPolicyListPolicyList" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleProjectOrganizationPolicyListPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleProjectOrganizationPolicyListPolicyOutputReference <a name="DataGoogleProjectOrganizationPolicyListPolicyOutputReference" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList">DataGoogleProjectOrganizationPolicyListPolicyAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList">DataGoogleProjectOrganizationPolicyListPolicyDenyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParent">inherit_from_parent</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValue">suggested_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicy">DataGoogleProjectOrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.property.allow"></a>

```python
allow: DataGoogleProjectOrganizationPolicyListPolicyAllowList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyAllowList">DataGoogleProjectOrganizationPolicyListPolicyAllowList</a>

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.property.deny"></a>

```python
deny: DataGoogleProjectOrganizationPolicyListPolicyDenyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyDenyList">DataGoogleProjectOrganizationPolicyListPolicyDenyList</a>

---

##### `inherit_from_parent`<sup>Required</sup> <a name="inherit_from_parent" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```python
inherit_from_parent: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `suggested_value`<sup>Required</sup> <a name="suggested_value" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```python
suggested_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleProjectOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyListPolicy">DataGoogleProjectOrganizationPolicyListPolicy</a>

---


### DataGoogleProjectOrganizationPolicyRestorePolicyList <a name="DataGoogleProjectOrganizationPolicyRestorePolicyList" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference <a name="DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_organization_policy

dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicy">DataGoogleProjectOrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```python
default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleProjectOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleProjectOrganizationPolicy.DataGoogleProjectOrganizationPolicyRestorePolicy">DataGoogleProjectOrganizationPolicyRestorePolicy</a>

---



