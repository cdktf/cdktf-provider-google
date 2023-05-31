# `google_monitoring_monitored_project`

Refer to the Terraform Registory for docs: [`google_monitoring_monitored_project`](https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/monitoring_monitored_project).

# `monitoringMonitoredProject` Submodule <a name="`monitoringMonitoredProject` Submodule" id="@cdktf/provider-google.monitoringMonitoredProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringMonitoredProject <a name="MonitoringMonitoredProject" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/monitoring_monitored_project google_monitoring_monitored_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer"></a>

```python
from cdktf_cdktf_provider_google import monitoring_monitored_project

monitoringMonitoredProject.MonitoringMonitoredProject(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metrics_scope: str,
  name: str,
  id: str = None,
  timeouts: MonitoringMonitoredProjectTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.metricsScope">metrics_scope</a></code> | <code>str</code> | Required. The resource name of the existing Metrics Scope that will monitor this project. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.name">name</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/monitoring_monitored_project#id MonitoringMonitoredProject#id}. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts">MonitoringMonitoredProjectTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metrics_scope`<sup>Required</sup> <a name="metrics_scope" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.metricsScope"></a>

- *Type:* str

Required. The resource name of the existing Metrics Scope that will monitor this project. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/monitoring_monitored_project#metrics_scope MonitoringMonitoredProject#metrics_scope}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.name"></a>

- *Type:* str

Immutable.

The resource name of the `MonitoredProject`. On input, the resource name includes the scoping project ID and monitored project ID. On output, it contains the equivalent project numbers. Example: `locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER}`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/monitoring_monitored_project#name MonitoringMonitoredProject#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/monitoring_monitored_project#id MonitoringMonitoredProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts">MonitoringMonitoredProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/monitoring_monitored_project#timeouts MonitoringMonitoredProject#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/monitoring_monitored_project#create MonitoringMonitoredProject#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/monitoring_monitored_project#delete MonitoringMonitoredProject#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import monitoring_monitored_project

monitoringMonitoredProject.MonitoringMonitoredProject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import monitoring_monitored_project

monitoringMonitoredProject.MonitoringMonitoredProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import monitoring_monitored_project

monitoringMonitoredProject.MonitoringMonitoredProject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference">MonitoringMonitoredProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.metricsScopeInput">metrics_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts">MonitoringMonitoredProjectTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.metricsScope">metrics_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.timeouts"></a>

```python
timeouts: MonitoringMonitoredProjectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference">MonitoringMonitoredProjectTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metrics_scope_input`<sup>Optional</sup> <a name="metrics_scope_input" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.metricsScopeInput"></a>

```python
metrics_scope_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[MonitoringMonitoredProjectTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts">MonitoringMonitoredProjectTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metrics_scope`<sup>Required</sup> <a name="metrics_scope" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.metricsScope"></a>

```python
metrics_scope: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringMonitoredProjectConfig <a name="MonitoringMonitoredProjectConfig" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import monitoring_monitored_project

monitoringMonitoredProject.MonitoringMonitoredProjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metrics_scope: str,
  name: str,
  id: str = None,
  timeouts: MonitoringMonitoredProjectTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.metricsScope">metrics_scope</a></code> | <code>str</code> | Required. The resource name of the existing Metrics Scope that will monitor this project. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.name">name</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/monitoring_monitored_project#id MonitoringMonitoredProject#id}. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts">MonitoringMonitoredProjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metrics_scope`<sup>Required</sup> <a name="metrics_scope" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.metricsScope"></a>

```python
metrics_scope: str
```

- *Type:* str

Required. The resource name of the existing Metrics Scope that will monitor this project. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/monitoring_monitored_project#metrics_scope MonitoringMonitoredProject#metrics_scope}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Immutable.

The resource name of the `MonitoredProject`. On input, the resource name includes the scoping project ID and monitored project ID. On output, it contains the equivalent project numbers. Example: `locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER}`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/monitoring_monitored_project#name MonitoringMonitoredProject#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/monitoring_monitored_project#id MonitoringMonitoredProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.timeouts"></a>

```python
timeouts: MonitoringMonitoredProjectTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts">MonitoringMonitoredProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/monitoring_monitored_project#timeouts MonitoringMonitoredProject#timeouts}

---

### MonitoringMonitoredProjectTimeouts <a name="MonitoringMonitoredProjectTimeouts" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import monitoring_monitored_project

monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/monitoring_monitored_project#create MonitoringMonitoredProject#create}. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/monitoring_monitored_project#delete MonitoringMonitoredProject#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/monitoring_monitored_project#create MonitoringMonitoredProject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/monitoring_monitored_project#delete MonitoringMonitoredProject#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringMonitoredProjectTimeoutsOutputReference <a name="MonitoringMonitoredProjectTimeoutsOutputReference" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import monitoring_monitored_project

monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts">MonitoringMonitoredProjectTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MonitoringMonitoredProjectTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts">MonitoringMonitoredProjectTimeouts</a>, cdktf.IResolvable]

---



