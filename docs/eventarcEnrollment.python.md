# `eventarcEnrollment` Submodule <a name="`eventarcEnrollment` Submodule" id="@cdktf/provider-google.eventarcEnrollment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventarcEnrollment <a name="EventarcEnrollment" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment google_eventarc_enrollment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_enrollment

eventarcEnrollment.EventarcEnrollment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cel_match: str,
  destination: str,
  enrollment_id: str,
  location: str,
  message_bus: str,
  annotations: typing.Mapping[str] = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: EventarcEnrollmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.celMatch">cel_match</a></code> | <code>str</code> | A CEL expression identifying which messages this enrollment applies to. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.destination">destination</a></code> | <code>str</code> | Destination is the Pipeline that the Enrollment is delivering to. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.enrollmentId">enrollment_id</a></code> | <code>str</code> | The user-provided ID to be assigned to the Enrollment. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.messageBus">message_bus</a></code> | <code>str</code> | Resource name of the message bus identifying the source of the messages. It matches the form projects/{project}/locations/{location}/messageBuses/{messageBus}. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Resource annotations. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Resource display name. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#id EventarcEnrollment#id}. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#project EventarcEnrollment#project}. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeouts">EventarcEnrollmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cel_match`<sup>Required</sup> <a name="cel_match" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.celMatch"></a>

- *Type:* str

A CEL expression identifying which messages this enrollment applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#cel_match EventarcEnrollment#cel_match}

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.destination"></a>

- *Type:* str

Destination is the Pipeline that the Enrollment is delivering to.

It must
point to the full resource name of a Pipeline. Format:
"projects/{PROJECT_ID}/locations/{region}/pipelines/{PIPELINE_ID)"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#destination EventarcEnrollment#destination}

---

##### `enrollment_id`<sup>Required</sup> <a name="enrollment_id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.enrollmentId"></a>

- *Type:* str

The user-provided ID to be assigned to the Enrollment. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#enrollment_id EventarcEnrollment#enrollment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#location EventarcEnrollment#location}

---

##### `message_bus`<sup>Required</sup> <a name="message_bus" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.messageBus"></a>

- *Type:* str

Resource name of the message bus identifying the source of the messages. It matches the form projects/{project}/locations/{location}/messageBuses/{messageBus}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#message_bus EventarcEnrollment#message_bus}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Resource annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#annotations EventarcEnrollment#annotations}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.displayName"></a>

- *Type:* str

Resource display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#display_name EventarcEnrollment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#id EventarcEnrollment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#labels EventarcEnrollment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#project EventarcEnrollment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeouts">EventarcEnrollmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#timeouts EventarcEnrollment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#create EventarcEnrollment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#delete EventarcEnrollment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#update EventarcEnrollment#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EventarcEnrollment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import eventarc_enrollment

eventarcEnrollment.EventarcEnrollment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import eventarc_enrollment

eventarcEnrollment.EventarcEnrollment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import eventarc_enrollment

eventarcEnrollment.EventarcEnrollment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import eventarc_enrollment

eventarcEnrollment.EventarcEnrollment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EventarcEnrollment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EventarcEnrollment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EventarcEnrollment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventarcEnrollment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference">EventarcEnrollmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.celMatchInput">cel_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.enrollmentIdInput">enrollment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.messageBusInput">message_bus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeouts">EventarcEnrollmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.celMatch">cel_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.enrollmentId">enrollment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.messageBus">message_bus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.timeouts"></a>

```python
timeouts: EventarcEnrollmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference">EventarcEnrollmentTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cel_match_input`<sup>Optional</sup> <a name="cel_match_input" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.celMatchInput"></a>

```python
cel_match_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enrollment_id_input`<sup>Optional</sup> <a name="enrollment_id_input" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.enrollmentIdInput"></a>

```python
enrollment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `message_bus_input`<sup>Optional</sup> <a name="message_bus_input" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.messageBusInput"></a>

```python
message_bus_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, EventarcEnrollmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeouts">EventarcEnrollmentTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cel_match`<sup>Required</sup> <a name="cel_match" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.celMatch"></a>

```python
cel_match: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enrollment_id`<sup>Required</sup> <a name="enrollment_id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.enrollmentId"></a>

```python
enrollment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `message_bus`<sup>Required</sup> <a name="message_bus" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.messageBus"></a>

```python
message_bus: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EventarcEnrollmentConfig <a name="EventarcEnrollmentConfig" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_enrollment

eventarcEnrollment.EventarcEnrollmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cel_match: str,
  destination: str,
  enrollment_id: str,
  location: str,
  message_bus: str,
  annotations: typing.Mapping[str] = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: EventarcEnrollmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.celMatch">cel_match</a></code> | <code>str</code> | A CEL expression identifying which messages this enrollment applies to. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.destination">destination</a></code> | <code>str</code> | Destination is the Pipeline that the Enrollment is delivering to. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.enrollmentId">enrollment_id</a></code> | <code>str</code> | The user-provided ID to be assigned to the Enrollment. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.messageBus">message_bus</a></code> | <code>str</code> | Resource name of the message bus identifying the source of the messages. It matches the form projects/{project}/locations/{location}/messageBuses/{messageBus}. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Resource annotations. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.displayName">display_name</a></code> | <code>str</code> | Resource display name. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#id EventarcEnrollment#id}. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#project EventarcEnrollment#project}. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeouts">EventarcEnrollmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cel_match`<sup>Required</sup> <a name="cel_match" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.celMatch"></a>

```python
cel_match: str
```

- *Type:* str

A CEL expression identifying which messages this enrollment applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#cel_match EventarcEnrollment#cel_match}

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.destination"></a>

```python
destination: str
```

- *Type:* str

Destination is the Pipeline that the Enrollment is delivering to.

It must
point to the full resource name of a Pipeline. Format:
"projects/{PROJECT_ID}/locations/{region}/pipelines/{PIPELINE_ID)"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#destination EventarcEnrollment#destination}

---

##### `enrollment_id`<sup>Required</sup> <a name="enrollment_id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.enrollmentId"></a>

```python
enrollment_id: str
```

- *Type:* str

The user-provided ID to be assigned to the Enrollment. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#enrollment_id EventarcEnrollment#enrollment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#location EventarcEnrollment#location}

---

##### `message_bus`<sup>Required</sup> <a name="message_bus" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.messageBus"></a>

```python
message_bus: str
```

- *Type:* str

Resource name of the message bus identifying the source of the messages. It matches the form projects/{project}/locations/{location}/messageBuses/{messageBus}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#message_bus EventarcEnrollment#message_bus}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#annotations EventarcEnrollment#annotations}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Resource display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#display_name EventarcEnrollment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#id EventarcEnrollment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#labels EventarcEnrollment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#project EventarcEnrollment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentConfig.property.timeouts"></a>

```python
timeouts: EventarcEnrollmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeouts">EventarcEnrollmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#timeouts EventarcEnrollment#timeouts}

---

### EventarcEnrollmentTimeouts <a name="EventarcEnrollmentTimeouts" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_enrollment

eventarcEnrollment.EventarcEnrollmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#create EventarcEnrollment#create}. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#delete EventarcEnrollment#delete}. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#update EventarcEnrollment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#create EventarcEnrollment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#delete EventarcEnrollment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_enrollment#update EventarcEnrollment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventarcEnrollmentTimeoutsOutputReference <a name="EventarcEnrollmentTimeoutsOutputReference" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_enrollment

eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeouts">EventarcEnrollmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EventarcEnrollmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcEnrollment.EventarcEnrollmentTimeouts">EventarcEnrollmentTimeouts</a>]

---



