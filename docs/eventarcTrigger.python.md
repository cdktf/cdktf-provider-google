# `google_eventarc_trigger`

Refer to the Terraform Registory for docs: [`google_eventarc_trigger`](https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger).

# `eventarcTrigger` Submodule <a name="`eventarcTrigger` Submodule" id="@cdktf/provider-google.eventarcTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventarcTrigger <a name="EventarcTrigger" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger google_eventarc_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTrigger(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: EventarcTriggerDestination,
  location: str,
  matching_criteria: typing.Union[IResolvable, typing.List[EventarcTriggerMatchingCriteria]],
  name: str,
  channel: str = None,
  event_data_content_type: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  service_account: str = None,
  timeouts: EventarcTriggerTimeouts = None,
  transport: EventarcTriggerTransport = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.destination">destination</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.matchingCriteria">matching_criteria</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>]]</code> | matching_criteria block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.name">name</a></code> | <code>str</code> | Required. The resource name of the trigger. Must be unique within the location on the project. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.channel">channel</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.eventDataContentType">event_data_content_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#id EventarcTrigger#id}. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. User labels attached to the triggers that can be used to group resources. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.transport">transport</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a></code> | transport block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.destination"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#destination EventarcTrigger#destination}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#location EventarcTrigger#location}

---

##### `matching_criteria`<sup>Required</sup> <a name="matching_criteria" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.matchingCriteria"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>]]

matching_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#matching_criteria EventarcTrigger#matching_criteria}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.name"></a>

- *Type:* str

Required. The resource name of the trigger. Must be unique within the location on the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#name EventarcTrigger#name}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.channel"></a>

- *Type:* str

Optional.

The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#channel EventarcTrigger#channel}

---

##### `event_data_content_type`<sup>Optional</sup> <a name="event_data_content_type" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.eventDataContentType"></a>

- *Type:* str

Optional.

EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to `application/json` if the value is not defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#event_data_content_type EventarcTrigger#event_data_content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#id EventarcTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. User labels attached to the triggers that can be used to group resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#labels EventarcTrigger#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#project EventarcTrigger#project}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.serviceAccount"></a>

- *Type:* str

Optional.

The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have `roles/eventarc.eventReceiver` IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#service_account EventarcTrigger#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#timeouts EventarcTrigger#timeouts}

---

##### `transport`<sup>Optional</sup> <a name="transport" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.transport"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a>

transport block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#transport EventarcTrigger#transport}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putMatchingCriteria">put_matching_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTransport">put_transport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetChannel">reset_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetEventDataContentType">reset_event_data_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetTransport">reset_transport</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_destination` <a name="put_destination" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putDestination"></a>

```python
def put_destination(
  cloud_function: str = None,
  cloud_run_service: EventarcTriggerDestinationCloudRunService = None,
  gke: EventarcTriggerDestinationGke = None,
  workflow: str = None
) -> None
```

###### `cloud_function`<sup>Optional</sup> <a name="cloud_function" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putDestination.parameter.cloudFunction"></a>

- *Type:* str

[WARNING] Configuring a Cloud Function in Trigger is not supported as of today.

The Cloud Function resource name. Format: projects/{project}/locations/{location}/functions/{function}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#cloud_function EventarcTrigger#cloud_function}

---

###### `cloud_run_service`<sup>Optional</sup> <a name="cloud_run_service" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putDestination.parameter.cloudRunService"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a>

cloud_run_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#cloud_run_service EventarcTrigger#cloud_run_service}

---

###### `gke`<sup>Optional</sup> <a name="gke" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putDestination.parameter.gke"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#gke EventarcTrigger#gke}

---

###### `workflow`<sup>Optional</sup> <a name="workflow" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putDestination.parameter.workflow"></a>

- *Type:* str

The resource name of the Workflow whose Executions are triggered by the events.

The Workflow resource should be deployed in the same project as the trigger. Format: `projects/{project}/locations/{location}/workflows/{workflow}`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#workflow EventarcTrigger#workflow}

---

##### `put_matching_criteria` <a name="put_matching_criteria" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putMatchingCriteria"></a>

```python
def put_matching_criteria(
  value: typing.Union[IResolvable, typing.List[EventarcTriggerMatchingCriteria]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putMatchingCriteria.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#create EventarcTrigger#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#delete EventarcTrigger#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#update EventarcTrigger#update}.

---

##### `put_transport` <a name="put_transport" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTransport"></a>

```python
def put_transport(
  pubsub: EventarcTriggerTransportPubsub = None
) -> None
```

###### `pubsub`<sup>Optional</sup> <a name="pubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTransport.parameter.pubsub"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a>

pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#pubsub EventarcTrigger#pubsub}

---

##### `reset_channel` <a name="reset_channel" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetChannel"></a>

```python
def reset_channel() -> None
```

##### `reset_event_data_content_type` <a name="reset_event_data_content_type" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetEventDataContentType"></a>

```python
def reset_event_data_content_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transport` <a name="reset_transport" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetTransport"></a>

```python
def reset_transport() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EventarcTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTrigger.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTrigger.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTrigger.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTrigger.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EventarcTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EventarcTrigger to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EventarcTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventarcTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.conditions">conditions</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference">EventarcTriggerDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.matchingCriteria">matching_criteria</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList">EventarcTriggerMatchingCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference">EventarcTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.transport">transport</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference">EventarcTriggerTransportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.destinationInput">destination_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.eventDataContentTypeInput">event_data_content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.matchingCriteriaInput">matching_criteria_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.transportInput">transport_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.eventDataContentType">event_data_content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.conditions"></a>

```python
conditions: StringMap
```

- *Type:* cdktf.StringMap

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.destination"></a>

```python
destination: EventarcTriggerDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference">EventarcTriggerDestinationOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `matching_criteria`<sup>Required</sup> <a name="matching_criteria" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.matchingCriteria"></a>

```python
matching_criteria: EventarcTriggerMatchingCriteriaList
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList">EventarcTriggerMatchingCriteriaList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.timeouts"></a>

```python
timeouts: EventarcTriggerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference">EventarcTriggerTimeoutsOutputReference</a>

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.transport"></a>

```python
transport: EventarcTriggerTransportOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference">EventarcTriggerTransportOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.destinationInput"></a>

```python
destination_input: EventarcTriggerDestination
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a>

---

##### `event_data_content_type_input`<sup>Optional</sup> <a name="event_data_content_type_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.eventDataContentTypeInput"></a>

```python
event_data_content_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `matching_criteria_input`<sup>Optional</sup> <a name="matching_criteria_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.matchingCriteriaInput"></a>

```python
matching_criteria_input: typing.Union[IResolvable, typing.List[EventarcTriggerMatchingCriteria]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, EventarcTriggerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a>]

---

##### `transport_input`<sup>Optional</sup> <a name="transport_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.transportInput"></a>

```python
transport_input: EventarcTriggerTransport
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a>

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `event_data_content_type`<sup>Required</sup> <a name="event_data_content_type" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.eventDataContentType"></a>

```python
event_data_content_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EventarcTriggerConfig <a name="EventarcTriggerConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTriggerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: EventarcTriggerDestination,
  location: str,
  matching_criteria: typing.Union[IResolvable, typing.List[EventarcTriggerMatchingCriteria]],
  name: str,
  channel: str = None,
  event_data_content_type: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  service_account: str = None,
  timeouts: EventarcTriggerTimeouts = None,
  transport: EventarcTriggerTransport = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.matchingCriteria">matching_criteria</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>]]</code> | matching_criteria block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.name">name</a></code> | <code>str</code> | Required. The resource name of the trigger. Must be unique within the location on the project. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.channel">channel</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.eventDataContentType">event_data_content_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#id EventarcTrigger#id}. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. User labels attached to the triggers that can be used to group resources. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.transport">transport</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a></code> | transport block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.destination"></a>

```python
destination: EventarcTriggerDestination
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#destination EventarcTrigger#destination}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#location EventarcTrigger#location}

---

##### `matching_criteria`<sup>Required</sup> <a name="matching_criteria" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.matchingCriteria"></a>

```python
matching_criteria: typing.Union[IResolvable, typing.List[EventarcTriggerMatchingCriteria]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>]]

matching_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#matching_criteria EventarcTrigger#matching_criteria}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Required. The resource name of the trigger. Must be unique within the location on the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#name EventarcTrigger#name}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.channel"></a>

```python
channel: str
```

- *Type:* str

Optional.

The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#channel EventarcTrigger#channel}

---

##### `event_data_content_type`<sup>Optional</sup> <a name="event_data_content_type" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.eventDataContentType"></a>

```python
event_data_content_type: str
```

- *Type:* str

Optional.

EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to `application/json` if the value is not defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#event_data_content_type EventarcTrigger#event_data_content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#id EventarcTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. User labels attached to the triggers that can be used to group resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#labels EventarcTrigger#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#project EventarcTrigger#project}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Optional.

The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have `roles/eventarc.eventReceiver` IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#service_account EventarcTrigger#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.timeouts"></a>

```python
timeouts: EventarcTriggerTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#timeouts EventarcTrigger#timeouts}

---

##### `transport`<sup>Optional</sup> <a name="transport" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.transport"></a>

```python
transport: EventarcTriggerTransport
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a>

transport block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#transport EventarcTrigger#transport}

---

### EventarcTriggerDestination <a name="EventarcTriggerDestination" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTriggerDestination(
  cloud_function: str = None,
  cloud_run_service: EventarcTriggerDestinationCloudRunService = None,
  gke: EventarcTriggerDestinationGke = None,
  workflow: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.cloudFunction">cloud_function</a></code> | <code>str</code> | [WARNING] Configuring a Cloud Function in Trigger is not supported as of today. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.cloudRunService">cloud_run_service</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a></code> | cloud_run_service block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.gke">gke</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a></code> | gke block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.workflow">workflow</a></code> | <code>str</code> | The resource name of the Workflow whose Executions are triggered by the events. |

---

##### `cloud_function`<sup>Optional</sup> <a name="cloud_function" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.cloudFunction"></a>

```python
cloud_function: str
```

- *Type:* str

[WARNING] Configuring a Cloud Function in Trigger is not supported as of today.

The Cloud Function resource name. Format: projects/{project}/locations/{location}/functions/{function}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#cloud_function EventarcTrigger#cloud_function}

---

##### `cloud_run_service`<sup>Optional</sup> <a name="cloud_run_service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.cloudRunService"></a>

```python
cloud_run_service: EventarcTriggerDestinationCloudRunService
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a>

cloud_run_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#cloud_run_service EventarcTrigger#cloud_run_service}

---

##### `gke`<sup>Optional</sup> <a name="gke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.gke"></a>

```python
gke: EventarcTriggerDestinationGke
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#gke EventarcTrigger#gke}

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.workflow"></a>

```python
workflow: str
```

- *Type:* str

The resource name of the Workflow whose Executions are triggered by the events.

The Workflow resource should be deployed in the same project as the trigger. Format: `projects/{project}/locations/{location}/workflows/{workflow}`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#workflow EventarcTrigger#workflow}

---

### EventarcTriggerDestinationCloudRunService <a name="EventarcTriggerDestinationCloudRunService" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTriggerDestinationCloudRunService(
  service: str,
  path: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.service">service</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.path">path</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.region">region</a></code> | <code>str</code> | Required. The region the Cloud Run service is deployed in. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.service"></a>

```python
service: str
```

- *Type:* str

Required.

The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project of the trigger object can be addressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#service EventarcTrigger#service}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.path"></a>

```python
path: str
```

- *Type:* str

Optional.

The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#path EventarcTrigger#path}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.region"></a>

```python
region: str
```

- *Type:* str

Required. The region the Cloud Run service is deployed in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#region EventarcTrigger#region}

---

### EventarcTriggerDestinationGke <a name="EventarcTriggerDestinationGke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTriggerDestinationGke(
  cluster: str,
  location: str,
  namespace: str,
  service: str,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.cluster">cluster</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.location">location</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.namespace">namespace</a></code> | <code>str</code> | Required. The namespace the GKE service is running in. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.service">service</a></code> | <code>str</code> | Required. Name of the GKE service. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.path">path</a></code> | <code>str</code> | Optional. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

Required.

The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#cluster EventarcTrigger#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.location"></a>

```python
location: str
```

- *Type:* str

Required.

The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#location EventarcTrigger#location}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Required. The namespace the GKE service is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#namespace EventarcTrigger#namespace}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.service"></a>

```python
service: str
```

- *Type:* str

Required. Name of the GKE service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#service EventarcTrigger#service}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.path"></a>

```python
path: str
```

- *Type:* str

Optional.

The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#path EventarcTrigger#path}

---

### EventarcTriggerMatchingCriteria <a name="EventarcTriggerMatchingCriteria" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTriggerMatchingCriteria(
  attribute: str,
  value: str,
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.attribute">attribute</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.value">value</a></code> | <code>str</code> | Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.operator">operator</a></code> | <code>str</code> | Optional. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Required.

The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. All triggers MUST provide a filter for the 'type' attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#attribute EventarcTrigger#attribute}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.value"></a>

```python
value: str
```

- *Type:* str

Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#value EventarcTrigger#value}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.operator"></a>

```python
operator: str
```

- *Type:* str

Optional.

The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The only allowed value is `match-path-pattern`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#operator EventarcTrigger#operator}

---

### EventarcTriggerTimeouts <a name="EventarcTriggerTimeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTriggerTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#create EventarcTrigger#create}. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#delete EventarcTrigger#delete}. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#update EventarcTrigger#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#create EventarcTrigger#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#delete EventarcTrigger#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#update EventarcTrigger#update}.

---

### EventarcTriggerTransport <a name="EventarcTriggerTransport" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTriggerTransport(
  pubsub: EventarcTriggerTransportPubsub = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport.property.pubsub">pubsub</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a></code> | pubsub block. |

---

##### `pubsub`<sup>Optional</sup> <a name="pubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport.property.pubsub"></a>

```python
pubsub: EventarcTriggerTransportPubsub
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a>

pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#pubsub EventarcTrigger#pubsub}

---

### EventarcTriggerTransportPubsub <a name="EventarcTriggerTransportPubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTriggerTransportPubsub(
  topic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub.property.topic">topic</a></code> | <code>str</code> | Optional. |

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub.property.topic"></a>

```python
topic: str
```

- *Type:* str

Optional.

The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME}. You may set an existing topic for triggers of the type google.cloud.pubsub.topic.v1.messagePublished` only. The topic you provide here will not be deleted by Eventarc at trigger deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#topic EventarcTrigger#topic}

---

## Classes <a name="Classes" id="Classes"></a>

### EventarcTriggerDestinationCloudRunServiceOutputReference <a name="EventarcTriggerDestinationCloudRunServiceOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.internalValue"></a>

```python
internal_value: EventarcTriggerDestinationCloudRunService
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a>

---


### EventarcTriggerDestinationGkeOutputReference <a name="EventarcTriggerDestinationGkeOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTriggerDestinationGkeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.internalValue"></a>

```python
internal_value: EventarcTriggerDestinationGke
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a>

---


### EventarcTriggerDestinationOutputReference <a name="EventarcTriggerDestinationOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTriggerDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putCloudRunService">put_cloud_run_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putGke">put_gke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetCloudFunction">reset_cloud_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetCloudRunService">reset_cloud_run_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetGke">reset_gke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetWorkflow">reset_workflow</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_run_service` <a name="put_cloud_run_service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putCloudRunService"></a>

```python
def put_cloud_run_service(
  service: str,
  path: str = None,
  region: str = None
) -> None
```

###### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putCloudRunService.parameter.service"></a>

- *Type:* str

Required.

The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project of the trigger object can be addressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#service EventarcTrigger#service}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putCloudRunService.parameter.path"></a>

- *Type:* str

Optional.

The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#path EventarcTrigger#path}

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putCloudRunService.parameter.region"></a>

- *Type:* str

Required. The region the Cloud Run service is deployed in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#region EventarcTrigger#region}

---

##### `put_gke` <a name="put_gke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putGke"></a>

```python
def put_gke(
  cluster: str,
  location: str,
  namespace: str,
  service: str,
  path: str = None
) -> None
```

###### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putGke.parameter.cluster"></a>

- *Type:* str

Required.

The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#cluster EventarcTrigger#cluster}

---

###### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putGke.parameter.location"></a>

- *Type:* str

Required.

The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#location EventarcTrigger#location}

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putGke.parameter.namespace"></a>

- *Type:* str

Required. The namespace the GKE service is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#namespace EventarcTrigger#namespace}

---

###### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putGke.parameter.service"></a>

- *Type:* str

Required. Name of the GKE service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#service EventarcTrigger#service}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putGke.parameter.path"></a>

- *Type:* str

Optional.

The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#path EventarcTrigger#path}

---

##### `reset_cloud_function` <a name="reset_cloud_function" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetCloudFunction"></a>

```python
def reset_cloud_function() -> None
```

##### `reset_cloud_run_service` <a name="reset_cloud_run_service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetCloudRunService"></a>

```python
def reset_cloud_run_service() -> None
```

##### `reset_gke` <a name="reset_gke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetGke"></a>

```python
def reset_gke() -> None
```

##### `reset_workflow` <a name="reset_workflow" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetWorkflow"></a>

```python
def reset_workflow() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudRunService">cloud_run_service</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference">EventarcTriggerDestinationCloudRunServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.gke">gke</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference">EventarcTriggerDestinationGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudFunctionInput">cloud_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudRunServiceInput">cloud_run_service_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.gkeInput">gke_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.workflowInput">workflow_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudFunction">cloud_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.workflow">workflow</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_run_service`<sup>Required</sup> <a name="cloud_run_service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudRunService"></a>

```python
cloud_run_service: EventarcTriggerDestinationCloudRunServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference">EventarcTriggerDestinationCloudRunServiceOutputReference</a>

---

##### `gke`<sup>Required</sup> <a name="gke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.gke"></a>

```python
gke: EventarcTriggerDestinationGkeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference">EventarcTriggerDestinationGkeOutputReference</a>

---

##### `cloud_function_input`<sup>Optional</sup> <a name="cloud_function_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudFunctionInput"></a>

```python
cloud_function_input: str
```

- *Type:* str

---

##### `cloud_run_service_input`<sup>Optional</sup> <a name="cloud_run_service_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudRunServiceInput"></a>

```python
cloud_run_service_input: EventarcTriggerDestinationCloudRunService
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a>

---

##### `gke_input`<sup>Optional</sup> <a name="gke_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.gkeInput"></a>

```python
gke_input: EventarcTriggerDestinationGke
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a>

---

##### `workflow_input`<sup>Optional</sup> <a name="workflow_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.workflowInput"></a>

```python
workflow_input: str
```

- *Type:* str

---

##### `cloud_function`<sup>Required</sup> <a name="cloud_function" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudFunction"></a>

```python
cloud_function: str
```

- *Type:* str

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.workflow"></a>

```python
workflow: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.internalValue"></a>

```python
internal_value: EventarcTriggerDestination
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a>

---


### EventarcTriggerMatchingCriteriaList <a name="EventarcTriggerMatchingCriteriaList" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTriggerMatchingCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventarcTriggerMatchingCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EventarcTriggerMatchingCriteria]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>]]

---


### EventarcTriggerMatchingCriteriaOutputReference <a name="EventarcTriggerMatchingCriteriaOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EventarcTriggerMatchingCriteria]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>]

---


### EventarcTriggerTimeoutsOutputReference <a name="EventarcTriggerTimeoutsOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTriggerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EventarcTriggerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a>]

---


### EventarcTriggerTransportOutputReference <a name="EventarcTriggerTransportOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTriggerTransportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.putPubsub">put_pubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resetPubsub">reset_pubsub</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pubsub` <a name="put_pubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.putPubsub"></a>

```python
def put_pubsub(
  topic: str = None
) -> None
```

###### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.putPubsub.parameter.topic"></a>

- *Type:* str

Optional.

The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME}. You may set an existing topic for triggers of the type google.cloud.pubsub.topic.v1.messagePublished` only. The topic you provide here will not be deleted by Eventarc at trigger deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/eventarc_trigger#topic EventarcTrigger#topic}

---

##### `reset_pubsub` <a name="reset_pubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resetPubsub"></a>

```python
def reset_pubsub() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.pubsub">pubsub</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference">EventarcTriggerTransportPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.pubsubInput">pubsub_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pubsub`<sup>Required</sup> <a name="pubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.pubsub"></a>

```python
pubsub: EventarcTriggerTransportPubsubOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference">EventarcTriggerTransportPubsubOutputReference</a>

---

##### `pubsub_input`<sup>Optional</sup> <a name="pubsub_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.pubsubInput"></a>

```python
pubsub_input: EventarcTriggerTransportPubsub
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.internalValue"></a>

```python
internal_value: EventarcTriggerTransport
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a>

---


### EventarcTriggerTransportPubsubOutputReference <a name="EventarcTriggerTransportPubsubOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_trigger

eventarcTrigger.EventarcTriggerTransportPubsubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resetTopic">reset_topic</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_topic` <a name="reset_topic" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resetTopic"></a>

```python
def reset_topic() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.subscription">subscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.subscription"></a>

```python
subscription: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.internalValue"></a>

```python
internal_value: EventarcTriggerTransportPubsub
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a>

---



