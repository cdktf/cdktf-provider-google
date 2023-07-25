# `google_cloudfunctions2_function`

Refer to the Terraform Registory for docs: [`google_cloudfunctions2_function`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function).

# `cloudfunctions2Function` Submodule <a name="`cloudfunctions2Function` Submodule" id="@cdktf/provider-google.cloudfunctions2Function"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloudfunctions2Function <a name="Cloudfunctions2Function" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function google_cloudfunctions2_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2Function(
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
  build_config: Cloudfunctions2FunctionBuildConfig = None,
  description: str = None,
  event_trigger: Cloudfunctions2FunctionEventTrigger = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  service_config: Cloudfunctions2FunctionServiceConfig = None,
  timeouts: Cloudfunctions2FunctionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.name">name</a></code> | <code>str</code> | A user-defined name of the function. Function names must be unique globally and match pattern 'projects/*\/locations/*\/functions/*'. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.buildConfig">build_config</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a></code> | build_config block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.description">description</a></code> | <code>str</code> | User-provided description of a function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.eventTrigger">event_trigger</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a></code> | event_trigger block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#id Cloudfunctions2Function#id}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs associated with this Cloud Function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of this cloud function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#project Cloudfunctions2Function#project}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.serviceConfig">service_config</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a></code> | service_config block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.name"></a>

- *Type:* str

A user-defined name of the function. Function names must be unique globally and match pattern 'projects/*\/locations/*\/functions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#name Cloudfunctions2Function#name}

---

##### `build_config`<sup>Optional</sup> <a name="build_config" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.buildConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a>

build_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#build_config Cloudfunctions2Function#build_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.description"></a>

- *Type:* str

User-provided description of a function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#description Cloudfunctions2Function#description}

---

##### `event_trigger`<sup>Optional</sup> <a name="event_trigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.eventTrigger"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a>

event_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#event_trigger Cloudfunctions2Function#event_trigger}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#id Cloudfunctions2Function#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A set of key/value label pairs associated with this Cloud Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#labels Cloudfunctions2Function#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.location"></a>

- *Type:* str

The location of this cloud function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#location Cloudfunctions2Function#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#project Cloudfunctions2Function#project}.

---

##### `service_config`<sup>Optional</sup> <a name="service_config" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.serviceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a>

service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#service_config Cloudfunctions2Function#service_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#timeouts Cloudfunctions2Function#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putBuildConfig">put_build_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putEventTrigger">put_event_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig">put_service_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetBuildConfig">reset_build_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetEventTrigger">reset_event_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetServiceConfig">reset_service_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_build_config` <a name="put_build_config" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putBuildConfig"></a>

```python
def put_build_config(
  docker_repository: str = None,
  entry_point: str = None,
  environment_variables: typing.Mapping[str] = None,
  runtime: str = None,
  source: Cloudfunctions2FunctionBuildConfigSource = None,
  worker_pool: str = None
) -> None
```

###### `docker_repository`<sup>Optional</sup> <a name="docker_repository" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putBuildConfig.parameter.dockerRepository"></a>

- *Type:* str

User managed repository created in Artifact Registry optionally with a customer managed encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#docker_repository Cloudfunctions2Function#docker_repository}

---

###### `entry_point`<sup>Optional</sup> <a name="entry_point" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putBuildConfig.parameter.entryPoint"></a>

- *Type:* str

The name of the function (as defined in source code) that will be executed.

Defaults to the resource name suffix, if not specified. For backward
compatibility, if function with given name is not found, then the system
will try to use function named "function". For Node.js this is name of a
function exported by the module specified in source_location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#entry_point Cloudfunctions2Function#entry_point}

---

###### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putBuildConfig.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

User-provided build-time environment variables for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#environment_variables Cloudfunctions2Function#environment_variables}

---

###### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putBuildConfig.parameter.runtime"></a>

- *Type:* str

The runtime in which to run the function. Required when deploying a new function, optional when updating an existing function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#runtime Cloudfunctions2Function#runtime}

---

###### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putBuildConfig.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#source Cloudfunctions2Function#source}

---

###### `worker_pool`<sup>Optional</sup> <a name="worker_pool" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putBuildConfig.parameter.workerPool"></a>

- *Type:* str

Name of the Cloud Build Custom Worker Pool that should be used to build the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#worker_pool Cloudfunctions2Function#worker_pool}

---

##### `put_event_trigger` <a name="put_event_trigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putEventTrigger"></a>

```python
def put_event_trigger(
  event_filters: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionEventTriggerEventFilters]] = None,
  event_type: str = None,
  pubsub_topic: str = None,
  retry_policy: str = None,
  service_account_email: str = None,
  trigger_region: str = None
) -> None
```

###### `event_filters`<sup>Optional</sup> <a name="event_filters" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putEventTrigger.parameter.eventFilters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a>]]

event_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#event_filters Cloudfunctions2Function#event_filters}

---

###### `event_type`<sup>Optional</sup> <a name="event_type" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putEventTrigger.parameter.eventType"></a>

- *Type:* str

Required. The type of event to observe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#event_type Cloudfunctions2Function#event_type}

---

###### `pubsub_topic`<sup>Optional</sup> <a name="pubsub_topic" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putEventTrigger.parameter.pubsubTopic"></a>

- *Type:* str

The name of a Pub/Sub topic in the same project that will be used as the transport topic for the event delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#pubsub_topic Cloudfunctions2Function#pubsub_topic}

---

###### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putEventTrigger.parameter.retryPolicy"></a>

- *Type:* str

Describes the retry policy in case of function's execution failure.

Retried execution is charged as any other execution. Possible values: ["RETRY_POLICY_UNSPECIFIED", "RETRY_POLICY_DO_NOT_RETRY", "RETRY_POLICY_RETRY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#retry_policy Cloudfunctions2Function#retry_policy}

---

###### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putEventTrigger.parameter.serviceAccountEmail"></a>

- *Type:* str

The email of the service account for this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#service_account_email Cloudfunctions2Function#service_account_email}

---

###### `trigger_region`<sup>Optional</sup> <a name="trigger_region" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putEventTrigger.parameter.triggerRegion"></a>

- *Type:* str

The region that the trigger will be in.

The trigger will only receive
events originating in this region. It can be the same
region as the function, a different region or multi-region, or the global
region. If not provided, defaults to the same region as the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#trigger_region Cloudfunctions2Function#trigger_region}

---

##### `put_service_config` <a name="put_service_config" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig"></a>

```python
def put_service_config(
  all_traffic_on_latest_revision: typing.Union[bool, IResolvable] = None,
  available_cpu: str = None,
  available_memory: str = None,
  environment_variables: typing.Mapping[str] = None,
  ingress_settings: str = None,
  max_instance_count: typing.Union[int, float] = None,
  max_instance_request_concurrency: typing.Union[int, float] = None,
  min_instance_count: typing.Union[int, float] = None,
  secret_environment_variables: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables]] = None,
  secret_volumes: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionServiceConfigSecretVolumes]] = None,
  service: str = None,
  service_account_email: str = None,
  timeout_seconds: typing.Union[int, float] = None,
  vpc_connector: str = None,
  vpc_connector_egress_settings: str = None
) -> None
```

###### `all_traffic_on_latest_revision`<sup>Optional</sup> <a name="all_traffic_on_latest_revision" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig.parameter.allTrafficOnLatestRevision"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether 100% of traffic is routed to the latest revision. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#all_traffic_on_latest_revision Cloudfunctions2Function#all_traffic_on_latest_revision}

---

###### `available_cpu`<sup>Optional</sup> <a name="available_cpu" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig.parameter.availableCpu"></a>

- *Type:* str

The number of CPUs used in a single container instance. Default value is calculated from available memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#available_cpu Cloudfunctions2Function#available_cpu}

---

###### `available_memory`<sup>Optional</sup> <a name="available_memory" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig.parameter.availableMemory"></a>

- *Type:* str

The amount of memory available for a function.

Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is
supplied the value is interpreted as bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#available_memory Cloudfunctions2Function#available_memory}

---

###### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

Environment variables that shall be available during function execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#environment_variables Cloudfunctions2Function#environment_variables}

---

###### `ingress_settings`<sup>Optional</sup> <a name="ingress_settings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig.parameter.ingressSettings"></a>

- *Type:* str

Available ingress settings. Defaults to "ALLOW_ALL" if unspecified. Default value: "ALLOW_ALL" Possible values: ["ALLOW_ALL", "ALLOW_INTERNAL_ONLY", "ALLOW_INTERNAL_AND_GCLB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#ingress_settings Cloudfunctions2Function#ingress_settings}

---

###### `max_instance_count`<sup>Optional</sup> <a name="max_instance_count" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig.parameter.maxInstanceCount"></a>

- *Type:* typing.Union[int, float]

The limit on the maximum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#max_instance_count Cloudfunctions2Function#max_instance_count}

---

###### `max_instance_request_concurrency`<sup>Optional</sup> <a name="max_instance_request_concurrency" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig.parameter.maxInstanceRequestConcurrency"></a>

- *Type:* typing.Union[int, float]

Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#max_instance_request_concurrency Cloudfunctions2Function#max_instance_request_concurrency}

---

###### `min_instance_count`<sup>Optional</sup> <a name="min_instance_count" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig.parameter.minInstanceCount"></a>

- *Type:* typing.Union[int, float]

The limit on the minimum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#min_instance_count Cloudfunctions2Function#min_instance_count}

---

###### `secret_environment_variables`<sup>Optional</sup> <a name="secret_environment_variables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig.parameter.secretEnvironmentVariables"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>]]

secret_environment_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#secret_environment_variables Cloudfunctions2Function#secret_environment_variables}

---

###### `secret_volumes`<sup>Optional</sup> <a name="secret_volumes" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig.parameter.secretVolumes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a>]]

secret_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#secret_volumes Cloudfunctions2Function#secret_volumes}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig.parameter.service"></a>

- *Type:* str

Name of the service associated with a Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#service Cloudfunctions2Function#service}

---

###### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig.parameter.serviceAccountEmail"></a>

- *Type:* str

The email of the service account for this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#service_account_email Cloudfunctions2Function#service_account_email}

---

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

The function execution timeout.

Execution is considered failed and
can be terminated if the function is not completed at the end of the
timeout period. Defaults to 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#timeout_seconds Cloudfunctions2Function#timeout_seconds}

---

###### `vpc_connector`<sup>Optional</sup> <a name="vpc_connector" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig.parameter.vpcConnector"></a>

- *Type:* str

The Serverless VPC Access connector that this cloud function can connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#vpc_connector Cloudfunctions2Function#vpc_connector}

---

###### `vpc_connector_egress_settings`<sup>Optional</sup> <a name="vpc_connector_egress_settings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig.parameter.vpcConnectorEgressSettings"></a>

- *Type:* str

Available egress settings. Possible values: ["VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED", "PRIVATE_RANGES_ONLY", "ALL_TRAFFIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#vpc_connector_egress_settings Cloudfunctions2Function#vpc_connector_egress_settings}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#create Cloudfunctions2Function#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#delete Cloudfunctions2Function#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#update Cloudfunctions2Function#update}.

---

##### `reset_build_config` <a name="reset_build_config" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetBuildConfig"></a>

```python
def reset_build_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_event_trigger` <a name="reset_event_trigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetEventTrigger"></a>

```python
def reset_event_trigger() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_service_config` <a name="reset_service_config" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetServiceConfig"></a>

```python
def reset_service_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2Function.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2Function.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2Function.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.buildConfig">build_config</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference">Cloudfunctions2FunctionBuildConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.eventTrigger">event_trigger</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference">Cloudfunctions2FunctionEventTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.serviceConfig">service_config</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference">Cloudfunctions2FunctionServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference">Cloudfunctions2FunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.buildConfigInput">build_config_input</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.eventTriggerInput">event_trigger_input</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.serviceConfigInput">service_config_input</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `build_config`<sup>Required</sup> <a name="build_config" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.buildConfig"></a>

```python
build_config: Cloudfunctions2FunctionBuildConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference">Cloudfunctions2FunctionBuildConfigOutputReference</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `event_trigger`<sup>Required</sup> <a name="event_trigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.eventTrigger"></a>

```python
event_trigger: Cloudfunctions2FunctionEventTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference">Cloudfunctions2FunctionEventTriggerOutputReference</a>

---

##### `service_config`<sup>Required</sup> <a name="service_config" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.serviceConfig"></a>

```python
service_config: Cloudfunctions2FunctionServiceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference">Cloudfunctions2FunctionServiceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.timeouts"></a>

```python
timeouts: Cloudfunctions2FunctionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference">Cloudfunctions2FunctionTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `build_config_input`<sup>Optional</sup> <a name="build_config_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.buildConfigInput"></a>

```python
build_config_input: Cloudfunctions2FunctionBuildConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `event_trigger_input`<sup>Optional</sup> <a name="event_trigger_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.eventTriggerInput"></a>

```python
event_trigger_input: Cloudfunctions2FunctionEventTrigger
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_config_input`<sup>Optional</sup> <a name="service_config_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.serviceConfigInput"></a>

```python
service_config_input: Cloudfunctions2FunctionServiceConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, Cloudfunctions2FunctionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Cloudfunctions2FunctionBuildConfig <a name="Cloudfunctions2FunctionBuildConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig(
  docker_repository: str = None,
  entry_point: str = None,
  environment_variables: typing.Mapping[str] = None,
  runtime: str = None,
  source: Cloudfunctions2FunctionBuildConfigSource = None,
  worker_pool: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.dockerRepository">docker_repository</a></code> | <code>str</code> | User managed repository created in Artifact Registry optionally with a customer managed encryption key. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.entryPoint">entry_point</a></code> | <code>str</code> | The name of the function (as defined in source code) that will be executed. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | User-provided build-time environment variables for the function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.runtime">runtime</a></code> | <code>str</code> | The runtime in which to run the function. Required when deploying a new function, optional when updating an existing function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.workerPool">worker_pool</a></code> | <code>str</code> | Name of the Cloud Build Custom Worker Pool that should be used to build the function. |

---

##### `docker_repository`<sup>Optional</sup> <a name="docker_repository" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.dockerRepository"></a>

```python
docker_repository: str
```

- *Type:* str

User managed repository created in Artifact Registry optionally with a customer managed encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#docker_repository Cloudfunctions2Function#docker_repository}

---

##### `entry_point`<sup>Optional</sup> <a name="entry_point" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.entryPoint"></a>

```python
entry_point: str
```

- *Type:* str

The name of the function (as defined in source code) that will be executed.

Defaults to the resource name suffix, if not specified. For backward
compatibility, if function with given name is not found, then the system
will try to use function named "function". For Node.js this is name of a
function exported by the module specified in source_location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#entry_point Cloudfunctions2Function#entry_point}

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-provided build-time environment variables for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#environment_variables Cloudfunctions2Function#environment_variables}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

The runtime in which to run the function. Required when deploying a new function, optional when updating an existing function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#runtime Cloudfunctions2Function#runtime}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.source"></a>

```python
source: Cloudfunctions2FunctionBuildConfigSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#source Cloudfunctions2Function#source}

---

##### `worker_pool`<sup>Optional</sup> <a name="worker_pool" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.workerPool"></a>

```python
worker_pool: str
```

- *Type:* str

Name of the Cloud Build Custom Worker Pool that should be used to build the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#worker_pool Cloudfunctions2Function#worker_pool}

---

### Cloudfunctions2FunctionBuildConfigSource <a name="Cloudfunctions2FunctionBuildConfigSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource(
  repo_source: Cloudfunctions2FunctionBuildConfigSourceRepoSource = None,
  storage_source: Cloudfunctions2FunctionBuildConfigSourceStorageSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource.property.repoSource">repo_source</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a></code> | repo_source block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource.property.storageSource">storage_source</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a></code> | storage_source block. |

---

##### `repo_source`<sup>Optional</sup> <a name="repo_source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource.property.repoSource"></a>

```python
repo_source: Cloudfunctions2FunctionBuildConfigSourceRepoSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a>

repo_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#repo_source Cloudfunctions2Function#repo_source}

---

##### `storage_source`<sup>Optional</sup> <a name="storage_source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource.property.storageSource"></a>

```python
storage_source: Cloudfunctions2FunctionBuildConfigSourceStorageSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a>

storage_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#storage_source Cloudfunctions2Function#storage_source}

---

### Cloudfunctions2FunctionBuildConfigSourceRepoSource <a name="Cloudfunctions2FunctionBuildConfigSourceRepoSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource(
  branch_name: str = None,
  commit_sha: str = None,
  dir: str = None,
  invert_regex: typing.Union[bool, IResolvable] = None,
  project_id: str = None,
  repo_name: str = None,
  tag_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.branchName">branch_name</a></code> | <code>str</code> | Regex matching branches to build. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.commitSha">commit_sha</a></code> | <code>str</code> | Regex matching tags to build. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.dir">dir</a></code> | <code>str</code> | Directory, relative to the source root, in which to run the build. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.invertRegex">invert_regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only trigger a build if the revision regex does NOT match the revision regex. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.projectId">project_id</a></code> | <code>str</code> | ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.repoName">repo_name</a></code> | <code>str</code> | Name of the Cloud Source Repository. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.tagName">tag_name</a></code> | <code>str</code> | Regex matching tags to build. |

---

##### `branch_name`<sup>Optional</sup> <a name="branch_name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

Regex matching branches to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#branch_name Cloudfunctions2Function#branch_name}

---

##### `commit_sha`<sup>Optional</sup> <a name="commit_sha" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.commitSha"></a>

```python
commit_sha: str
```

- *Type:* str

Regex matching tags to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#commit_sha Cloudfunctions2Function#commit_sha}

---

##### `dir`<sup>Optional</sup> <a name="dir" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.dir"></a>

```python
dir: str
```

- *Type:* str

Directory, relative to the source root, in which to run the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#dir Cloudfunctions2Function#dir}

---

##### `invert_regex`<sup>Optional</sup> <a name="invert_regex" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.invertRegex"></a>

```python
invert_regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only trigger a build if the revision regex does NOT match the revision regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#invert_regex Cloudfunctions2Function#invert_regex}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#project_id Cloudfunctions2Function#project_id}

---

##### `repo_name`<sup>Optional</sup> <a name="repo_name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.repoName"></a>

```python
repo_name: str
```

- *Type:* str

Name of the Cloud Source Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#repo_name Cloudfunctions2Function#repo_name}

---

##### `tag_name`<sup>Optional</sup> <a name="tag_name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.tagName"></a>

```python
tag_name: str
```

- *Type:* str

Regex matching tags to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#tag_name Cloudfunctions2Function#tag_name}

---

### Cloudfunctions2FunctionBuildConfigSourceStorageSource <a name="Cloudfunctions2FunctionBuildConfigSourceStorageSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource(
  bucket: str = None,
  generation: typing.Union[int, float] = None,
  object: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.property.bucket">bucket</a></code> | <code>str</code> | Google Cloud Storage bucket containing the source. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.property.object">object</a></code> | <code>str</code> | Google Cloud Storage object containing the source. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Google Cloud Storage bucket containing the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#bucket Cloudfunctions2Function#bucket}

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#generation Cloudfunctions2Function#generation}

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.property.object"></a>

```python
object: str
```

- *Type:* str

Google Cloud Storage object containing the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#object Cloudfunctions2Function#object}

---

### Cloudfunctions2FunctionConfig <a name="Cloudfunctions2FunctionConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  build_config: Cloudfunctions2FunctionBuildConfig = None,
  description: str = None,
  event_trigger: Cloudfunctions2FunctionEventTrigger = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  service_config: Cloudfunctions2FunctionServiceConfig = None,
  timeouts: Cloudfunctions2FunctionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.name">name</a></code> | <code>str</code> | A user-defined name of the function. Function names must be unique globally and match pattern 'projects/*\/locations/*\/functions/*'. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.buildConfig">build_config</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a></code> | build_config block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.description">description</a></code> | <code>str</code> | User-provided description of a function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.eventTrigger">event_trigger</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a></code> | event_trigger block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#id Cloudfunctions2Function#id}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs associated with this Cloud Function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.location">location</a></code> | <code>str</code> | The location of this cloud function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#project Cloudfunctions2Function#project}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.serviceConfig">service_config</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a></code> | service_config block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A user-defined name of the function. Function names must be unique globally and match pattern 'projects/*\/locations/*\/functions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#name Cloudfunctions2Function#name}

---

##### `build_config`<sup>Optional</sup> <a name="build_config" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.buildConfig"></a>

```python
build_config: Cloudfunctions2FunctionBuildConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a>

build_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#build_config Cloudfunctions2Function#build_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-provided description of a function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#description Cloudfunctions2Function#description}

---

##### `event_trigger`<sup>Optional</sup> <a name="event_trigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.eventTrigger"></a>

```python
event_trigger: Cloudfunctions2FunctionEventTrigger
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a>

event_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#event_trigger Cloudfunctions2Function#event_trigger}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#id Cloudfunctions2Function#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs associated with this Cloud Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#labels Cloudfunctions2Function#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of this cloud function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#location Cloudfunctions2Function#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#project Cloudfunctions2Function#project}.

---

##### `service_config`<sup>Optional</sup> <a name="service_config" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.serviceConfig"></a>

```python
service_config: Cloudfunctions2FunctionServiceConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a>

service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#service_config Cloudfunctions2Function#service_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.timeouts"></a>

```python
timeouts: Cloudfunctions2FunctionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#timeouts Cloudfunctions2Function#timeouts}

---

### Cloudfunctions2FunctionEventTrigger <a name="Cloudfunctions2FunctionEventTrigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger(
  event_filters: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionEventTriggerEventFilters]] = None,
  event_type: str = None,
  pubsub_topic: str = None,
  retry_policy: str = None,
  service_account_email: str = None,
  trigger_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.eventFilters">event_filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a>]]</code> | event_filters block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.eventType">event_type</a></code> | <code>str</code> | Required. The type of event to observe. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | The name of a Pub/Sub topic in the same project that will be used as the transport topic for the event delivery. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.retryPolicy">retry_policy</a></code> | <code>str</code> | Describes the retry policy in case of function's execution failure. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | The email of the service account for this function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.triggerRegion">trigger_region</a></code> | <code>str</code> | The region that the trigger will be in. |

---

##### `event_filters`<sup>Optional</sup> <a name="event_filters" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.eventFilters"></a>

```python
event_filters: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionEventTriggerEventFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a>]]

event_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#event_filters Cloudfunctions2Function#event_filters}

---

##### `event_type`<sup>Optional</sup> <a name="event_type" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

Required. The type of event to observe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#event_type Cloudfunctions2Function#event_type}

---

##### `pubsub_topic`<sup>Optional</sup> <a name="pubsub_topic" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

The name of a Pub/Sub topic in the same project that will be used as the transport topic for the event delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#pubsub_topic Cloudfunctions2Function#pubsub_topic}

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.retryPolicy"></a>

```python
retry_policy: str
```

- *Type:* str

Describes the retry policy in case of function's execution failure.

Retried execution is charged as any other execution. Possible values: ["RETRY_POLICY_UNSPECIFIED", "RETRY_POLICY_DO_NOT_RETRY", "RETRY_POLICY_RETRY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#retry_policy Cloudfunctions2Function#retry_policy}

---

##### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

The email of the service account for this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#service_account_email Cloudfunctions2Function#service_account_email}

---

##### `trigger_region`<sup>Optional</sup> <a name="trigger_region" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.triggerRegion"></a>

```python
trigger_region: str
```

- *Type:* str

The region that the trigger will be in.

The trigger will only receive
events originating in this region. It can be the same
region as the function, a different region or multi-region, or the global
region. If not provided, defaults to the same region as the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#trigger_region Cloudfunctions2Function#trigger_region}

---

### Cloudfunctions2FunctionEventTriggerEventFilters <a name="Cloudfunctions2FunctionEventTriggerEventFilters" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters(
  attribute: str,
  value: str,
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.property.attribute">attribute</a></code> | <code>str</code> | 'Required. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.property.value">value</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.property.operator">operator</a></code> | <code>str</code> | Optional. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

'Required.

The name of a CloudEvents attribute.
Currently, only a subset of attributes are supported for filtering. Use the 'gcloud eventarc providers describe' command to learn more about events and their attributes.
Do not filter for the 'type' attribute here, as this is already achieved by the resource's 'event_type' attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#attribute Cloudfunctions2Function#attribute}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.property.value"></a>

```python
value: str
```

- *Type:* str

Required.

The value for the attribute.
If the operator field is set as 'match-path-pattern', this value can be a path pattern instead of an exact value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#value Cloudfunctions2Function#value}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.property.operator"></a>

```python
operator: str
```

- *Type:* str

Optional.

The operator used for matching the events with the value of
the filter. If not specified, only events that have an exact key-value
pair specified in the filter are matched.
The only allowed value is 'match-path-pattern'.
[See documentation on path patterns here](https://cloud.google.com/eventarc/docs/path-patterns)'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#operator Cloudfunctions2Function#operator}

---

### Cloudfunctions2FunctionServiceConfig <a name="Cloudfunctions2FunctionServiceConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig(
  all_traffic_on_latest_revision: typing.Union[bool, IResolvable] = None,
  available_cpu: str = None,
  available_memory: str = None,
  environment_variables: typing.Mapping[str] = None,
  ingress_settings: str = None,
  max_instance_count: typing.Union[int, float] = None,
  max_instance_request_concurrency: typing.Union[int, float] = None,
  min_instance_count: typing.Union[int, float] = None,
  secret_environment_variables: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables]] = None,
  secret_volumes: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionServiceConfigSecretVolumes]] = None,
  service: str = None,
  service_account_email: str = None,
  timeout_seconds: typing.Union[int, float] = None,
  vpc_connector: str = None,
  vpc_connector_egress_settings: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.allTrafficOnLatestRevision">all_traffic_on_latest_revision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether 100% of traffic is routed to the latest revision. Defaults to true. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.availableCpu">available_cpu</a></code> | <code>str</code> | The number of CPUs used in a single container instance. Default value is calculated from available memory. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.availableMemory">available_memory</a></code> | <code>str</code> | The amount of memory available for a function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Environment variables that shall be available during function execution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.ingressSettings">ingress_settings</a></code> | <code>str</code> | Available ingress settings. Defaults to "ALLOW_ALL" if unspecified. Default value: "ALLOW_ALL" Possible values: ["ALLOW_ALL", "ALLOW_INTERNAL_ONLY", "ALLOW_INTERNAL_AND_GCLB"]. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | The limit on the maximum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.maxInstanceRequestConcurrency">max_instance_request_concurrency</a></code> | <code>typing.Union[int, float]</code> | Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | The limit on the minimum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.secretEnvironmentVariables">secret_environment_variables</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>]]</code> | secret_environment_variables block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.secretVolumes">secret_volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a>]]</code> | secret_volumes block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.service">service</a></code> | <code>str</code> | Name of the service associated with a Function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | The email of the service account for this function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | The function execution timeout. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.vpcConnector">vpc_connector</a></code> | <code>str</code> | The Serverless VPC Access connector that this cloud function can connect to. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.vpcConnectorEgressSettings">vpc_connector_egress_settings</a></code> | <code>str</code> | Available egress settings. Possible values: ["VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED", "PRIVATE_RANGES_ONLY", "ALL_TRAFFIC"]. |

---

##### `all_traffic_on_latest_revision`<sup>Optional</sup> <a name="all_traffic_on_latest_revision" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.allTrafficOnLatestRevision"></a>

```python
all_traffic_on_latest_revision: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether 100% of traffic is routed to the latest revision. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#all_traffic_on_latest_revision Cloudfunctions2Function#all_traffic_on_latest_revision}

---

##### `available_cpu`<sup>Optional</sup> <a name="available_cpu" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.availableCpu"></a>

```python
available_cpu: str
```

- *Type:* str

The number of CPUs used in a single container instance. Default value is calculated from available memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#available_cpu Cloudfunctions2Function#available_cpu}

---

##### `available_memory`<sup>Optional</sup> <a name="available_memory" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.availableMemory"></a>

```python
available_memory: str
```

- *Type:* str

The amount of memory available for a function.

Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is
supplied the value is interpreted as bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#available_memory Cloudfunctions2Function#available_memory}

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables that shall be available during function execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#environment_variables Cloudfunctions2Function#environment_variables}

---

##### `ingress_settings`<sup>Optional</sup> <a name="ingress_settings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.ingressSettings"></a>

```python
ingress_settings: str
```

- *Type:* str

Available ingress settings. Defaults to "ALLOW_ALL" if unspecified. Default value: "ALLOW_ALL" Possible values: ["ALLOW_ALL", "ALLOW_INTERNAL_ONLY", "ALLOW_INTERNAL_AND_GCLB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#ingress_settings Cloudfunctions2Function#ingress_settings}

---

##### `max_instance_count`<sup>Optional</sup> <a name="max_instance_count" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The limit on the maximum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#max_instance_count Cloudfunctions2Function#max_instance_count}

---

##### `max_instance_request_concurrency`<sup>Optional</sup> <a name="max_instance_request_concurrency" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.maxInstanceRequestConcurrency"></a>

```python
max_instance_request_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#max_instance_request_concurrency Cloudfunctions2Function#max_instance_request_concurrency}

---

##### `min_instance_count`<sup>Optional</sup> <a name="min_instance_count" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The limit on the minimum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#min_instance_count Cloudfunctions2Function#min_instance_count}

---

##### `secret_environment_variables`<sup>Optional</sup> <a name="secret_environment_variables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.secretEnvironmentVariables"></a>

```python
secret_environment_variables: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>]]

secret_environment_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#secret_environment_variables Cloudfunctions2Function#secret_environment_variables}

---

##### `secret_volumes`<sup>Optional</sup> <a name="secret_volumes" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.secretVolumes"></a>

```python
secret_volumes: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionServiceConfigSecretVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a>]]

secret_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#secret_volumes Cloudfunctions2Function#secret_volumes}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Name of the service associated with a Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#service Cloudfunctions2Function#service}

---

##### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

The email of the service account for this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#service_account_email Cloudfunctions2Function#service_account_email}

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The function execution timeout.

Execution is considered failed and
can be terminated if the function is not completed at the end of the
timeout period. Defaults to 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#timeout_seconds Cloudfunctions2Function#timeout_seconds}

---

##### `vpc_connector`<sup>Optional</sup> <a name="vpc_connector" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.vpcConnector"></a>

```python
vpc_connector: str
```

- *Type:* str

The Serverless VPC Access connector that this cloud function can connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#vpc_connector Cloudfunctions2Function#vpc_connector}

---

##### `vpc_connector_egress_settings`<sup>Optional</sup> <a name="vpc_connector_egress_settings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.vpcConnectorEgressSettings"></a>

```python
vpc_connector_egress_settings: str
```

- *Type:* str

Available egress settings. Possible values: ["VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED", "PRIVATE_RANGES_ONLY", "ALL_TRAFFIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#vpc_connector_egress_settings Cloudfunctions2Function#vpc_connector_egress_settings}

---

### Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables <a name="Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables(
  key: str,
  project_id: str,
  secret: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.key">key</a></code> | <code>str</code> | Name of the environment variable. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.projectId">project_id</a></code> | <code>str</code> | Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.secret">secret</a></code> | <code>str</code> | Name of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.version">version</a></code> | <code>str</code> | Version of the secret (version number or the string 'latest'). |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.key"></a>

```python
key: str
```

- *Type:* str

Name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#key Cloudfunctions2Function#key}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret.

If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#project_id Cloudfunctions2Function#project_id}

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.secret"></a>

```python
secret: str
```

- *Type:* str

Name of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#secret Cloudfunctions2Function#secret}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.version"></a>

```python
version: str
```

- *Type:* str

Version of the secret (version number or the string 'latest').

It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new instances start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#version Cloudfunctions2Function#version}

---

### Cloudfunctions2FunctionServiceConfigSecretVolumes <a name="Cloudfunctions2FunctionServiceConfigSecretVolumes" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes(
  mount_path: str,
  project_id: str,
  secret: str,
  versions: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionServiceConfigSecretVolumesVersions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.mountPath">mount_path</a></code> | <code>str</code> | The path within the container to mount the secret volume. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.projectId">project_id</a></code> | <code>str</code> | Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.secret">secret</a></code> | <code>str</code> | Name of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.versions">versions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions">Cloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>]]</code> | versions block. |

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

The path within the container to mount the secret volume.

For example, setting the mountPath as /etc/secrets would mount the secret value files under the /etc/secrets directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount path: /etc/secrets

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#mount_path Cloudfunctions2Function#mount_path}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret.

If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#project_id Cloudfunctions2Function#project_id}

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.secret"></a>

```python
secret: str
```

- *Type:* str

Name of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#secret Cloudfunctions2Function#secret}

---

##### `versions`<sup>Optional</sup> <a name="versions" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.versions"></a>

```python
versions: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionServiceConfigSecretVolumesVersions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions">Cloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>]]

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#versions Cloudfunctions2Function#versions}

---

### Cloudfunctions2FunctionServiceConfigSecretVolumesVersions <a name="Cloudfunctions2FunctionServiceConfigSecretVolumesVersions" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions(
  path: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions.property.path">path</a></code> | <code>str</code> | Relative path of the file under the mount path where the secret value for this version will be fetched and made available. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions.property.version">version</a></code> | <code>str</code> | Version of the secret (version number or the string 'latest'). |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions.property.path"></a>

```python
path: str
```

- *Type:* str

Relative path of the file under the mount path where the secret value for this version will be fetched and made available.

For example, setting the mountPath as '/etc/secrets' and path as secret_foo would mount the secret value file at /etc/secrets/secret_foo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#path Cloudfunctions2Function#path}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions.property.version"></a>

```python
version: str
```

- *Type:* str

Version of the secret (version number or the string 'latest').

It is preferable to use latest version with secret volumes as secret value changes are reflected immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#version Cloudfunctions2Function#version}

---

### Cloudfunctions2FunctionTimeouts <a name="Cloudfunctions2FunctionTimeouts" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#create Cloudfunctions2Function#create}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#delete Cloudfunctions2Function#delete}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#update Cloudfunctions2Function#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#create Cloudfunctions2Function#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#delete Cloudfunctions2Function#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#update Cloudfunctions2Function#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Cloudfunctions2FunctionBuildConfigOutputReference <a name="Cloudfunctions2FunctionBuildConfigOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetDockerRepository">reset_docker_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetEntryPoint">reset_entry_point</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetRuntime">reset_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetWorkerPool">reset_worker_pool</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source` <a name="put_source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.putSource"></a>

```python
def put_source(
  repo_source: Cloudfunctions2FunctionBuildConfigSourceRepoSource = None,
  storage_source: Cloudfunctions2FunctionBuildConfigSourceStorageSource = None
) -> None
```

###### `repo_source`<sup>Optional</sup> <a name="repo_source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.putSource.parameter.repoSource"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a>

repo_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#repo_source Cloudfunctions2Function#repo_source}

---

###### `storage_source`<sup>Optional</sup> <a name="storage_source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.putSource.parameter.storageSource"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a>

storage_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#storage_source Cloudfunctions2Function#storage_source}

---

##### `reset_docker_repository` <a name="reset_docker_repository" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetDockerRepository"></a>

```python
def reset_docker_repository() -> None
```

##### `reset_entry_point` <a name="reset_entry_point" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetEntryPoint"></a>

```python
def reset_entry_point() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetRuntime"></a>

```python
def reset_runtime() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_worker_pool` <a name="reset_worker_pool" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetWorkerPool"></a>

```python
def reset_worker_pool() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.buildAttribute">build_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference">Cloudfunctions2FunctionBuildConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepositoryInput">docker_repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.entryPointInput">entry_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.workerPoolInput">worker_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepository">docker_repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.entryPoint">entry_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.workerPool">worker_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `build_attribute`<sup>Required</sup> <a name="build_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.buildAttribute"></a>

```python
build_attribute: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.source"></a>

```python
source: Cloudfunctions2FunctionBuildConfigSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference">Cloudfunctions2FunctionBuildConfigSourceOutputReference</a>

---

##### `docker_repository_input`<sup>Optional</sup> <a name="docker_repository_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepositoryInput"></a>

```python
docker_repository_input: str
```

- *Type:* str

---

##### `entry_point_input`<sup>Optional</sup> <a name="entry_point_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.entryPointInput"></a>

```python
entry_point_input: str
```

- *Type:* str

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.sourceInput"></a>

```python
source_input: Cloudfunctions2FunctionBuildConfigSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a>

---

##### `worker_pool_input`<sup>Optional</sup> <a name="worker_pool_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.workerPoolInput"></a>

```python
worker_pool_input: str
```

- *Type:* str

---

##### `docker_repository`<sup>Required</sup> <a name="docker_repository" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepository"></a>

```python
docker_repository: str
```

- *Type:* str

---

##### `entry_point`<sup>Required</sup> <a name="entry_point" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.entryPoint"></a>

```python
entry_point: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `worker_pool`<sup>Required</sup> <a name="worker_pool" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.workerPool"></a>

```python
worker_pool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.internalValue"></a>

```python
internal_value: Cloudfunctions2FunctionBuildConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a>

---


### Cloudfunctions2FunctionBuildConfigSourceOutputReference <a name="Cloudfunctions2FunctionBuildConfigSourceOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putRepoSource">put_repo_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putStorageSource">put_storage_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resetRepoSource">reset_repo_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resetStorageSource">reset_storage_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_repo_source` <a name="put_repo_source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putRepoSource"></a>

```python
def put_repo_source(
  branch_name: str = None,
  commit_sha: str = None,
  dir: str = None,
  invert_regex: typing.Union[bool, IResolvable] = None,
  project_id: str = None,
  repo_name: str = None,
  tag_name: str = None
) -> None
```

###### `branch_name`<sup>Optional</sup> <a name="branch_name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putRepoSource.parameter.branchName"></a>

- *Type:* str

Regex matching branches to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#branch_name Cloudfunctions2Function#branch_name}

---

###### `commit_sha`<sup>Optional</sup> <a name="commit_sha" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putRepoSource.parameter.commitSha"></a>

- *Type:* str

Regex matching tags to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#commit_sha Cloudfunctions2Function#commit_sha}

---

###### `dir`<sup>Optional</sup> <a name="dir" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putRepoSource.parameter.dir"></a>

- *Type:* str

Directory, relative to the source root, in which to run the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#dir Cloudfunctions2Function#dir}

---

###### `invert_regex`<sup>Optional</sup> <a name="invert_regex" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putRepoSource.parameter.invertRegex"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only trigger a build if the revision regex does NOT match the revision regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#invert_regex Cloudfunctions2Function#invert_regex}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putRepoSource.parameter.projectId"></a>

- *Type:* str

ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#project_id Cloudfunctions2Function#project_id}

---

###### `repo_name`<sup>Optional</sup> <a name="repo_name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putRepoSource.parameter.repoName"></a>

- *Type:* str

Name of the Cloud Source Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#repo_name Cloudfunctions2Function#repo_name}

---

###### `tag_name`<sup>Optional</sup> <a name="tag_name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putRepoSource.parameter.tagName"></a>

- *Type:* str

Regex matching tags to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#tag_name Cloudfunctions2Function#tag_name}

---

##### `put_storage_source` <a name="put_storage_source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putStorageSource"></a>

```python
def put_storage_source(
  bucket: str = None,
  generation: typing.Union[int, float] = None,
  object: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putStorageSource.parameter.bucket"></a>

- *Type:* str

Google Cloud Storage bucket containing the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#bucket Cloudfunctions2Function#bucket}

---

###### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putStorageSource.parameter.generation"></a>

- *Type:* typing.Union[int, float]

Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#generation Cloudfunctions2Function#generation}

---

###### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putStorageSource.parameter.object"></a>

- *Type:* str

Google Cloud Storage object containing the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudfunctions2_function#object Cloudfunctions2Function#object}

---

##### `reset_repo_source` <a name="reset_repo_source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resetRepoSource"></a>

```python
def reset_repo_source() -> None
```

##### `reset_storage_source` <a name="reset_storage_source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resetStorageSource"></a>

```python
def reset_storage_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSource">repo_source</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference">Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSource">storage_source</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference">Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSourceInput">repo_source_input</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSourceInput">storage_source_input</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repo_source`<sup>Required</sup> <a name="repo_source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSource"></a>

```python
repo_source: Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference">Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference</a>

---

##### `storage_source`<sup>Required</sup> <a name="storage_source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSource"></a>

```python
storage_source: Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference">Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference</a>

---

##### `repo_source_input`<sup>Optional</sup> <a name="repo_source_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSourceInput"></a>

```python
repo_source_input: Cloudfunctions2FunctionBuildConfigSourceRepoSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a>

---

##### `storage_source_input`<sup>Optional</sup> <a name="storage_source_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSourceInput"></a>

```python
storage_source_input: Cloudfunctions2FunctionBuildConfigSourceStorageSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.internalValue"></a>

```python
internal_value: Cloudfunctions2FunctionBuildConfigSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a>

---


### Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference <a name="Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetBranchName">reset_branch_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetCommitSha">reset_commit_sha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetDir">reset_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetInvertRegex">reset_invert_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetRepoName">reset_repo_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetTagName">reset_tag_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch_name` <a name="reset_branch_name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetBranchName"></a>

```python
def reset_branch_name() -> None
```

##### `reset_commit_sha` <a name="reset_commit_sha" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetCommitSha"></a>

```python
def reset_commit_sha() -> None
```

##### `reset_dir` <a name="reset_dir" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetDir"></a>

```python
def reset_dir() -> None
```

##### `reset_invert_regex` <a name="reset_invert_regex" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetInvertRegex"></a>

```python
def reset_invert_regex() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_repo_name` <a name="reset_repo_name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetRepoName"></a>

```python
def reset_repo_name() -> None
```

##### `reset_tag_name` <a name="reset_tag_name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetTagName"></a>

```python
def reset_tag_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchNameInput">branch_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitShaInput">commit_sha_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dirInput">dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegexInput">invert_regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoNameInput">repo_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagNameInput">tag_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchName">branch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitSha">commit_sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dir">dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegex">invert_regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoName">repo_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagName">tag_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_name_input`<sup>Optional</sup> <a name="branch_name_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchNameInput"></a>

```python
branch_name_input: str
```

- *Type:* str

---

##### `commit_sha_input`<sup>Optional</sup> <a name="commit_sha_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitShaInput"></a>

```python
commit_sha_input: str
```

- *Type:* str

---

##### `dir_input`<sup>Optional</sup> <a name="dir_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dirInput"></a>

```python
dir_input: str
```

- *Type:* str

---

##### `invert_regex_input`<sup>Optional</sup> <a name="invert_regex_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegexInput"></a>

```python
invert_regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `repo_name_input`<sup>Optional</sup> <a name="repo_name_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoNameInput"></a>

```python
repo_name_input: str
```

- *Type:* str

---

##### `tag_name_input`<sup>Optional</sup> <a name="tag_name_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagNameInput"></a>

```python
tag_name_input: str
```

- *Type:* str

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

---

##### `commit_sha`<sup>Required</sup> <a name="commit_sha" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitSha"></a>

```python
commit_sha: str
```

- *Type:* str

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dir"></a>

```python
dir: str
```

- *Type:* str

---

##### `invert_regex`<sup>Required</sup> <a name="invert_regex" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegex"></a>

```python
invert_regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `repo_name`<sup>Required</sup> <a name="repo_name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoName"></a>

```python
repo_name: str
```

- *Type:* str

---

##### `tag_name`<sup>Required</sup> <a name="tag_name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagName"></a>

```python
tag_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.internalValue"></a>

```python
internal_value: Cloudfunctions2FunctionBuildConfigSourceRepoSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a>

---


### Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference <a name="Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetGeneration">reset_generation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetObject">reset_object</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_generation` <a name="reset_generation" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetGeneration"></a>

```python
def reset_generation() -> None
```

##### `reset_object` <a name="reset_object" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetObject"></a>

```python
def reset_object() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generationInput">generation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `generation_input`<sup>Optional</sup> <a name="generation_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generationInput"></a>

```python
generation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.internalValue"></a>

```python
internal_value: Cloudfunctions2FunctionBuildConfigSourceStorageSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a>

---


### Cloudfunctions2FunctionEventTriggerEventFiltersList <a name="Cloudfunctions2FunctionEventTriggerEventFiltersList" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionEventTriggerEventFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a>]]

---


### Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference <a name="Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Cloudfunctions2FunctionEventTriggerEventFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a>]

---


### Cloudfunctions2FunctionEventTriggerOutputReference <a name="Cloudfunctions2FunctionEventTriggerOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.putEventFilters">put_event_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetEventFilters">reset_event_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetEventType">reset_event_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetPubsubTopic">reset_pubsub_topic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetRetryPolicy">reset_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetServiceAccountEmail">reset_service_account_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetTriggerRegion">reset_trigger_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_event_filters` <a name="put_event_filters" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.putEventFilters"></a>

```python
def put_event_filters(
  value: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionEventTriggerEventFilters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.putEventFilters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a>]]

---

##### `reset_event_filters` <a name="reset_event_filters" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetEventFilters"></a>

```python
def reset_event_filters() -> None
```

##### `reset_event_type` <a name="reset_event_type" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetEventType"></a>

```python
def reset_event_type() -> None
```

##### `reset_pubsub_topic` <a name="reset_pubsub_topic" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetPubsubTopic"></a>

```python
def reset_pubsub_topic() -> None
```

##### `reset_retry_policy` <a name="reset_retry_policy" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetRetryPolicy"></a>

```python
def reset_retry_policy() -> None
```

##### `reset_service_account_email` <a name="reset_service_account_email" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetServiceAccountEmail"></a>

```python
def reset_service_account_email() -> None
```

##### `reset_trigger_region` <a name="reset_trigger_region" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetTriggerRegion"></a>

```python
def reset_trigger_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventFilters">event_filters</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList">Cloudfunctions2FunctionEventTriggerEventFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.trigger">trigger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventFiltersInput">event_filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopicInput">pubsub_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicyInput">retry_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegionInput">trigger_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicy">retry_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegion">trigger_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_filters`<sup>Required</sup> <a name="event_filters" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventFilters"></a>

```python
event_filters: Cloudfunctions2FunctionEventTriggerEventFiltersList
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList">Cloudfunctions2FunctionEventTriggerEventFiltersList</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.trigger"></a>

```python
trigger: str
```

- *Type:* str

---

##### `event_filters_input`<sup>Optional</sup> <a name="event_filters_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventFiltersInput"></a>

```python
event_filters_input: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionEventTriggerEventFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a>]]

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `pubsub_topic_input`<sup>Optional</sup> <a name="pubsub_topic_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopicInput"></a>

```python
pubsub_topic_input: str
```

- *Type:* str

---

##### `retry_policy_input`<sup>Optional</sup> <a name="retry_policy_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicyInput"></a>

```python
retry_policy_input: str
```

- *Type:* str

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `trigger_region_input`<sup>Optional</sup> <a name="trigger_region_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegionInput"></a>

```python
trigger_region_input: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

---

##### `retry_policy`<sup>Required</sup> <a name="retry_policy" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicy"></a>

```python
retry_policy: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `trigger_region`<sup>Required</sup> <a name="trigger_region" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegion"></a>

```python
trigger_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.internalValue"></a>

```python
internal_value: Cloudfunctions2FunctionEventTrigger
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a>

---


### Cloudfunctions2FunctionServiceConfigOutputReference <a name="Cloudfunctions2FunctionServiceConfigOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.putSecretEnvironmentVariables">put_secret_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.putSecretVolumes">put_secret_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetAllTrafficOnLatestRevision">reset_all_traffic_on_latest_revision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetAvailableCpu">reset_available_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetAvailableMemory">reset_available_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetIngressSettings">reset_ingress_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetMaxInstanceCount">reset_max_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetMaxInstanceRequestConcurrency">reset_max_instance_request_concurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetMinInstanceCount">reset_min_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetSecretEnvironmentVariables">reset_secret_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetSecretVolumes">reset_secret_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetServiceAccountEmail">reset_service_account_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetVpcConnector">reset_vpc_connector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetVpcConnectorEgressSettings">reset_vpc_connector_egress_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secret_environment_variables` <a name="put_secret_environment_variables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.putSecretEnvironmentVariables"></a>

```python
def put_secret_environment_variables(
  value: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.putSecretEnvironmentVariables.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>]]

---

##### `put_secret_volumes` <a name="put_secret_volumes" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.putSecretVolumes"></a>

```python
def put_secret_volumes(
  value: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionServiceConfigSecretVolumes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.putSecretVolumes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a>]]

---

##### `reset_all_traffic_on_latest_revision` <a name="reset_all_traffic_on_latest_revision" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetAllTrafficOnLatestRevision"></a>

```python
def reset_all_traffic_on_latest_revision() -> None
```

##### `reset_available_cpu` <a name="reset_available_cpu" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetAvailableCpu"></a>

```python
def reset_available_cpu() -> None
```

##### `reset_available_memory` <a name="reset_available_memory" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetAvailableMemory"></a>

```python
def reset_available_memory() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_ingress_settings` <a name="reset_ingress_settings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetIngressSettings"></a>

```python
def reset_ingress_settings() -> None
```

##### `reset_max_instance_count` <a name="reset_max_instance_count" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetMaxInstanceCount"></a>

```python
def reset_max_instance_count() -> None
```

##### `reset_max_instance_request_concurrency` <a name="reset_max_instance_request_concurrency" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetMaxInstanceRequestConcurrency"></a>

```python
def reset_max_instance_request_concurrency() -> None
```

##### `reset_min_instance_count` <a name="reset_min_instance_count" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetMinInstanceCount"></a>

```python
def reset_min_instance_count() -> None
```

##### `reset_secret_environment_variables` <a name="reset_secret_environment_variables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetSecretEnvironmentVariables"></a>

```python
def reset_secret_environment_variables() -> None
```

##### `reset_secret_volumes` <a name="reset_secret_volumes" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetSecretVolumes"></a>

```python
def reset_secret_volumes() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_service_account_email` <a name="reset_service_account_email" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetServiceAccountEmail"></a>

```python
def reset_service_account_email() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```

##### `reset_vpc_connector` <a name="reset_vpc_connector" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetVpcConnector"></a>

```python
def reset_vpc_connector() -> None
```

##### `reset_vpc_connector_egress_settings` <a name="reset_vpc_connector_egress_settings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetVpcConnectorEgressSettings"></a>

```python
def reset_vpc_connector_egress_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.gcfUri">gcf_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariables">secret_environment_variables</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumes">secret_volumes</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList">Cloudfunctions2FunctionServiceConfigSecretVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevisionInput">all_traffic_on_latest_revision_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableCpuInput">available_cpu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableMemoryInput">available_memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettingsInput">ingress_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCountInput">max_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrencyInput">max_instance_request_concurrency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCountInput">min_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariablesInput">secret_environment_variables_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumesInput">secret_volumes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettingsInput">vpc_connector_egress_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorInput">vpc_connector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevision">all_traffic_on_latest_revision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableCpu">available_cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableMemory">available_memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettings">ingress_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrency">max_instance_request_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnector">vpc_connector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettings">vpc_connector_egress_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcf_uri`<sup>Required</sup> <a name="gcf_uri" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.gcfUri"></a>

```python
gcf_uri: str
```

- *Type:* str

---

##### `secret_environment_variables`<sup>Required</sup> <a name="secret_environment_variables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariables"></a>

```python
secret_environment_variables: Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList</a>

---

##### `secret_volumes`<sup>Required</sup> <a name="secret_volumes" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumes"></a>

```python
secret_volumes: Cloudfunctions2FunctionServiceConfigSecretVolumesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList">Cloudfunctions2FunctionServiceConfigSecretVolumesList</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `all_traffic_on_latest_revision_input`<sup>Optional</sup> <a name="all_traffic_on_latest_revision_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevisionInput"></a>

```python
all_traffic_on_latest_revision_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `available_cpu_input`<sup>Optional</sup> <a name="available_cpu_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableCpuInput"></a>

```python
available_cpu_input: str
```

- *Type:* str

---

##### `available_memory_input`<sup>Optional</sup> <a name="available_memory_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableMemoryInput"></a>

```python
available_memory_input: str
```

- *Type:* str

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ingress_settings_input`<sup>Optional</sup> <a name="ingress_settings_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettingsInput"></a>

```python
ingress_settings_input: str
```

- *Type:* str

---

##### `max_instance_count_input`<sup>Optional</sup> <a name="max_instance_count_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCountInput"></a>

```python
max_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instance_request_concurrency_input`<sup>Optional</sup> <a name="max_instance_request_concurrency_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrencyInput"></a>

```python
max_instance_request_concurrency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count_input`<sup>Optional</sup> <a name="min_instance_count_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCountInput"></a>

```python
min_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret_environment_variables_input`<sup>Optional</sup> <a name="secret_environment_variables_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariablesInput"></a>

```python
secret_environment_variables_input: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>]]

---

##### `secret_volumes_input`<sup>Optional</sup> <a name="secret_volumes_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumesInput"></a>

```python
secret_volumes_input: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionServiceConfigSecretVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a>]]

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vpc_connector_egress_settings_input`<sup>Optional</sup> <a name="vpc_connector_egress_settings_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettingsInput"></a>

```python
vpc_connector_egress_settings_input: str
```

- *Type:* str

---

##### `vpc_connector_input`<sup>Optional</sup> <a name="vpc_connector_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorInput"></a>

```python
vpc_connector_input: str
```

- *Type:* str

---

##### `all_traffic_on_latest_revision`<sup>Required</sup> <a name="all_traffic_on_latest_revision" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevision"></a>

```python
all_traffic_on_latest_revision: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `available_cpu`<sup>Required</sup> <a name="available_cpu" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableCpu"></a>

```python
available_cpu: str
```

- *Type:* str

---

##### `available_memory`<sup>Required</sup> <a name="available_memory" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableMemory"></a>

```python
available_memory: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ingress_settings`<sup>Required</sup> <a name="ingress_settings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettings"></a>

```python
ingress_settings: str
```

- *Type:* str

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instance_request_concurrency`<sup>Required</sup> <a name="max_instance_request_concurrency" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrency"></a>

```python
max_instance_request_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vpc_connector`<sup>Required</sup> <a name="vpc_connector" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnector"></a>

```python
vpc_connector: str
```

- *Type:* str

---

##### `vpc_connector_egress_settings`<sup>Required</sup> <a name="vpc_connector_egress_settings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettings"></a>

```python
vpc_connector_egress_settings: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.internalValue"></a>

```python
internal_value: Cloudfunctions2FunctionServiceConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a>

---


### Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList <a name="Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>]]

---


### Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference <a name="Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>]

---


### Cloudfunctions2FunctionServiceConfigSecretVolumesList <a name="Cloudfunctions2FunctionServiceConfigSecretVolumesList" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionServiceConfigSecretVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a>]]

---


### Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference <a name="Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.putVersions">put_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resetVersions">reset_versions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_versions` <a name="put_versions" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.putVersions"></a>

```python
def put_versions(
  value: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionServiceConfigSecretVolumesVersions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.putVersions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions">Cloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>]]

---

##### `reset_versions` <a name="reset_versions" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resetVersions"></a>

```python
def reset_versions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versions">versions</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList">Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versionsInput">versions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions">Cloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versions"></a>

```python
versions: Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList">Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList</a>

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `versions_input`<sup>Optional</sup> <a name="versions_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versionsInput"></a>

```python
versions_input: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionServiceConfigSecretVolumesVersions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions">Cloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>]]

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Cloudfunctions2FunctionServiceConfigSecretVolumes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a>]

---


### Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList <a name="Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions">Cloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Cloudfunctions2FunctionServiceConfigSecretVolumesVersions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions">Cloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>]]

---


### Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference <a name="Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions">Cloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Cloudfunctions2FunctionServiceConfigSecretVolumesVersions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions">Cloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>]

---


### Cloudfunctions2FunctionTimeoutsOutputReference <a name="Cloudfunctions2FunctionTimeoutsOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function

cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Cloudfunctions2FunctionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a>]

---



