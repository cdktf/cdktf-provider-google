# `dataGoogleMonitoringAppEngineService` Submodule <a name="`dataGoogleMonitoringAppEngineService` Submodule" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringAppEngineService <a name="DataGoogleMonitoringAppEngineService" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/monitoring_app_engine_service google_monitoring_app_engine_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_app_engine_service

dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  module_id: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.moduleId">module_id</a></code> | <code>str</code> | The ID of the App Engine module underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/monitoring_app_engine_service#id DataGoogleMonitoringAppEngineService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/monitoring_app_engine_service#project DataGoogleMonitoringAppEngineService#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `module_id`<sup>Required</sup> <a name="module_id" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.moduleId"></a>

- *Type:* str

The ID of the App Engine module underlying this service.

Corresponds to the 'moduleId' resource label for a 'gae_app'
monitored resource(see https://cloud.google.com/monitoring/api/resources#tag_gae_app)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/monitoring_app_engine_service#module_id DataGoogleMonitoringAppEngineService#module_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/monitoring_app_engine_service#id DataGoogleMonitoringAppEngineService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/monitoring_app_engine_service#project DataGoogleMonitoringAppEngineService#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleMonitoringAppEngineService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_app_engine_service

dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_app_engine_service

dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_app_engine_service

dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_app_engine_service

dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleMonitoringAppEngineService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleMonitoringAppEngineService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleMonitoringAppEngineService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/monitoring_app_engine_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleMonitoringAppEngineService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.telemetry">telemetry</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList">DataGoogleMonitoringAppEngineServiceTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.userLabels">user_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.moduleIdInput">module_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.moduleId">module_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `telemetry`<sup>Required</sup> <a name="telemetry" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.telemetry"></a>

```python
telemetry: DataGoogleMonitoringAppEngineServiceTelemetryList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList">DataGoogleMonitoringAppEngineServiceTelemetryList</a>

---

##### `user_labels`<sup>Required</sup> <a name="user_labels" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.userLabels"></a>

```python
user_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `module_id_input`<sup>Optional</sup> <a name="module_id_input" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.moduleIdInput"></a>

```python
module_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `module_id`<sup>Required</sup> <a name="module_id" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.moduleId"></a>

```python
module_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringAppEngineServiceConfig <a name="DataGoogleMonitoringAppEngineServiceConfig" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_app_engine_service

dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  module_id: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.moduleId">module_id</a></code> | <code>str</code> | The ID of the App Engine module underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/monitoring_app_engine_service#id DataGoogleMonitoringAppEngineService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/monitoring_app_engine_service#project DataGoogleMonitoringAppEngineService#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `module_id`<sup>Required</sup> <a name="module_id" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.moduleId"></a>

```python
module_id: str
```

- *Type:* str

The ID of the App Engine module underlying this service.

Corresponds to the 'moduleId' resource label for a 'gae_app'
monitored resource(see https://cloud.google.com/monitoring/api/resources#tag_gae_app)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/monitoring_app_engine_service#module_id DataGoogleMonitoringAppEngineService#module_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/monitoring_app_engine_service#id DataGoogleMonitoringAppEngineService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/monitoring_app_engine_service#project DataGoogleMonitoringAppEngineService#project}.

---

### DataGoogleMonitoringAppEngineServiceTelemetry <a name="DataGoogleMonitoringAppEngineServiceTelemetry" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetry.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_app_engine_service

dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetry()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringAppEngineServiceTelemetryList <a name="DataGoogleMonitoringAppEngineServiceTelemetryList" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_app_engine_service

dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleMonitoringAppEngineServiceTelemetryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleMonitoringAppEngineServiceTelemetryOutputReference <a name="DataGoogleMonitoringAppEngineServiceTelemetryOutputReference" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_app_engine_service

dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetry">DataGoogleMonitoringAppEngineServiceTelemetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleMonitoringAppEngineServiceTelemetry
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetry">DataGoogleMonitoringAppEngineServiceTelemetry</a>

---



