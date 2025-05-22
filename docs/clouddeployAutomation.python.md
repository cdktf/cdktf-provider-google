# `clouddeployAutomation` Submodule <a name="`clouddeployAutomation` Submodule" id="@cdktf/provider-google.clouddeployAutomation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployAutomation <a name="ClouddeployAutomation" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation google_clouddeploy_automation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delivery_pipeline: str,
  location: str,
  name: str,
  rules: typing.Union[IResolvable, typing.List[ClouddeployAutomationRules]],
  selector: ClouddeployAutomationSelector,
  service_account: str,
  annotations: typing.Mapping[str] = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  suspended: typing.Union[bool, IResolvable] = None,
  timeouts: ClouddeployAutomationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.deliveryPipeline">delivery_pipeline</a></code> | <code>str</code> | The delivery_pipeline for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the 'Automation'. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.selector">selector</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. Description of the 'Automation'. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#project ClouddeployAutomation#project}. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. When Suspended, automation is deactivated from execution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts">ClouddeployAutomationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delivery_pipeline`<sup>Required</sup> <a name="delivery_pipeline" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.deliveryPipeline"></a>

- *Type:* str

The delivery_pipeline for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#delivery_pipeline ClouddeployAutomation#delivery_pipeline}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#location ClouddeployAutomation#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.name"></a>

- *Type:* str

Name of the 'Automation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#name ClouddeployAutomation#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#rules ClouddeployAutomation#rules}

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.selector"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#selector ClouddeployAutomation#selector}

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.serviceAccount"></a>

- *Type:* str

Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#service_account ClouddeployAutomation#service_account}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional.

User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash ('/'). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ('[a-z0-9A-Z]') with dashes ('-'), underscores ('_'), dots ('.'), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots('.'), not longer than 253 characters in total, followed by a slash ('/'). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#annotations ClouddeployAutomation#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.description"></a>

- *Type:* str

Optional. Description of the 'Automation'. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#description ClouddeployAutomation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional.

Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#labels ClouddeployAutomation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#project ClouddeployAutomation#project}.

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.suspended"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. When Suspended, automation is deactivated from execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#suspended ClouddeployAutomation#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts">ClouddeployAutomationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#timeouts ClouddeployAutomation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putSelector">put_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetSuspended">reset_suspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[ClouddeployAutomationRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>]]

---

##### `put_selector` <a name="put_selector" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putSelector"></a>

```python
def put_selector(
  targets: typing.Union[IResolvable, typing.List[ClouddeployAutomationSelectorTargets]]
) -> None
```

###### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putSelector.parameter.targets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a>]]

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#targets ClouddeployAutomation#targets}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#create ClouddeployAutomation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#delete ClouddeployAutomation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#update ClouddeployAutomation#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_suspended` <a name="reset_suspended" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetSuspended"></a>

```python
def reset_suspended() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ClouddeployAutomation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ClouddeployAutomation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ClouddeployAutomation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ClouddeployAutomation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ClouddeployAutomation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList">ClouddeployAutomationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference">ClouddeployAutomationSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference">ClouddeployAutomationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.deliveryPipelineInput">delivery_pipeline_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.selectorInput">selector_input</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.suspendedInput">suspended_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts">ClouddeployAutomationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.deliveryPipeline">delivery_pipeline</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.rules"></a>

```python
rules: ClouddeployAutomationRulesList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList">ClouddeployAutomationRulesList</a>

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.selector"></a>

```python
selector: ClouddeployAutomationSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference">ClouddeployAutomationSelectorOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.timeouts"></a>

```python
timeouts: ClouddeployAutomationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference">ClouddeployAutomationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `delivery_pipeline_input`<sup>Optional</sup> <a name="delivery_pipeline_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.deliveryPipelineInput"></a>

```python
delivery_pipeline_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[ClouddeployAutomationRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>]]

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.selectorInput"></a>

```python
selector_input: ClouddeployAutomationSelector
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a>

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `suspended_input`<sup>Optional</sup> <a name="suspended_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.suspendedInput"></a>

```python
suspended_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ClouddeployAutomationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts">ClouddeployAutomationTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `delivery_pipeline`<sup>Required</sup> <a name="delivery_pipeline" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.deliveryPipeline"></a>

```python
delivery_pipeline: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.suspended"></a>

```python
suspended: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployAutomationConfig <a name="ClouddeployAutomationConfig" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delivery_pipeline: str,
  location: str,
  name: str,
  rules: typing.Union[IResolvable, typing.List[ClouddeployAutomationRules]],
  selector: ClouddeployAutomationSelector,
  service_account: str,
  annotations: typing.Mapping[str] = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  suspended: typing.Union[bool, IResolvable] = None,
  timeouts: ClouddeployAutomationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.deliveryPipeline">delivery_pipeline</a></code> | <code>str</code> | The delivery_pipeline for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.name">name</a></code> | <code>str</code> | Name of the 'Automation'. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.description">description</a></code> | <code>str</code> | Optional. Description of the 'Automation'. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#project ClouddeployAutomation#project}. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. When Suspended, automation is deactivated from execution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts">ClouddeployAutomationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delivery_pipeline`<sup>Required</sup> <a name="delivery_pipeline" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.deliveryPipeline"></a>

```python
delivery_pipeline: str
```

- *Type:* str

The delivery_pipeline for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#delivery_pipeline ClouddeployAutomation#delivery_pipeline}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#location ClouddeployAutomation#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the 'Automation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#name ClouddeployAutomation#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[ClouddeployAutomationRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#rules ClouddeployAutomation#rules}

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.selector"></a>

```python
selector: ClouddeployAutomationSelector
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#selector ClouddeployAutomation#selector}

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#service_account ClouddeployAutomation#service_account}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash ('/'). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ('[a-z0-9A-Z]') with dashes ('-'), underscores ('_'), dots ('.'), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots('.'), not longer than 253 characters in total, followed by a slash ('/'). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#annotations ClouddeployAutomation#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. Description of the 'Automation'. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#description ClouddeployAutomation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#labels ClouddeployAutomation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#project ClouddeployAutomation#project}.

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.suspended"></a>

```python
suspended: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. When Suspended, automation is deactivated from execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#suspended ClouddeployAutomation#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.timeouts"></a>

```python
timeouts: ClouddeployAutomationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts">ClouddeployAutomationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#timeouts ClouddeployAutomation#timeouts}

---

### ClouddeployAutomationRules <a name="ClouddeployAutomationRules" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationRules(
  advance_rollout_rule: ClouddeployAutomationRulesAdvanceRolloutRule = None,
  promote_release_rule: ClouddeployAutomationRulesPromoteReleaseRule = None,
  repair_rollout_rule: ClouddeployAutomationRulesRepairRolloutRule = None,
  timed_promote_release_rule: ClouddeployAutomationRulesTimedPromoteReleaseRule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.advanceRolloutRule">advance_rollout_rule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a></code> | advance_rollout_rule block. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.promoteReleaseRule">promote_release_rule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a></code> | promote_release_rule block. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.repairRolloutRule">repair_rollout_rule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule">ClouddeployAutomationRulesRepairRolloutRule</a></code> | repair_rollout_rule block. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.timedPromoteReleaseRule">timed_promote_release_rule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule">ClouddeployAutomationRulesTimedPromoteReleaseRule</a></code> | timed_promote_release_rule block. |

---

##### `advance_rollout_rule`<sup>Optional</sup> <a name="advance_rollout_rule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.advanceRolloutRule"></a>

```python
advance_rollout_rule: ClouddeployAutomationRulesAdvanceRolloutRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a>

advance_rollout_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#advance_rollout_rule ClouddeployAutomation#advance_rollout_rule}

---

##### `promote_release_rule`<sup>Optional</sup> <a name="promote_release_rule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.promoteReleaseRule"></a>

```python
promote_release_rule: ClouddeployAutomationRulesPromoteReleaseRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a>

promote_release_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#promote_release_rule ClouddeployAutomation#promote_release_rule}

---

##### `repair_rollout_rule`<sup>Optional</sup> <a name="repair_rollout_rule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.repairRolloutRule"></a>

```python
repair_rollout_rule: ClouddeployAutomationRulesRepairRolloutRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule">ClouddeployAutomationRulesRepairRolloutRule</a>

repair_rollout_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#repair_rollout_rule ClouddeployAutomation#repair_rollout_rule}

---

##### `timed_promote_release_rule`<sup>Optional</sup> <a name="timed_promote_release_rule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.timedPromoteReleaseRule"></a>

```python
timed_promote_release_rule: ClouddeployAutomationRulesTimedPromoteReleaseRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule">ClouddeployAutomationRulesTimedPromoteReleaseRule</a>

timed_promote_release_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#timed_promote_release_rule ClouddeployAutomation#timed_promote_release_rule}

---

### ClouddeployAutomationRulesAdvanceRolloutRule <a name="ClouddeployAutomationRulesAdvanceRolloutRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule(
  id: str,
  source_phases: typing.List[str] = None,
  wait: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.property.id">id</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.property.sourcePhases">source_phases</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.property.wait">wait</a></code> | <code>str</code> | Optional. How long to wait after a rollout is finished. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.property.id"></a>

```python
id: str
```

- *Type:* str

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source_phases`<sup>Optional</sup> <a name="source_phases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.property.sourcePhases"></a>

```python
source_phases: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

Proceeds only after phase name matched any one in the list. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: '^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#source_phases ClouddeployAutomation#source_phases}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.property.wait"></a>

```python
wait: str
```

- *Type:* str

Optional. How long to wait after a rollout is finished.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#wait ClouddeployAutomation#wait}

---

### ClouddeployAutomationRulesPromoteReleaseRule <a name="ClouddeployAutomationRulesPromoteReleaseRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule(
  id: str,
  destination_phase: str = None,
  destination_target_id: str = None,
  wait: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.id">id</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.destinationPhase">destination_phase</a></code> | <code>str</code> | Optional. The starting phase of the rollout created by this operation. Default to the first phase. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.destinationTargetId">destination_target_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.wait">wait</a></code> | <code>str</code> | Optional. How long the release need to be paused until being promoted to the next target. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.id"></a>

```python
id: str
```

- *Type:* str

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `destination_phase`<sup>Optional</sup> <a name="destination_phase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.destinationPhase"></a>

```python
destination_phase: str
```

- *Type:* str

Optional. The starting phase of the rollout created by this operation. Default to the first phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#destination_phase ClouddeployAutomation#destination_phase}

---

##### `destination_target_id`<sup>Optional</sup> <a name="destination_target_id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.destinationTargetId"></a>

```python
destination_target_id: str
```

- *Type:* str

Optional.

The ID of the stage in the pipeline to which this 'Release' is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine if the target is one of the stages in the promotion sequence defined in the pipeline. * "@next", the next target in the promotion sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#destination_target_id ClouddeployAutomation#destination_target_id}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.wait"></a>

```python
wait: str
```

- *Type:* str

Optional. How long the release need to be paused until being promoted to the next target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#wait ClouddeployAutomation#wait}

---

### ClouddeployAutomationRulesRepairRolloutRule <a name="ClouddeployAutomationRulesRepairRolloutRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule(
  id: str,
  jobs: typing.List[str] = None,
  phases: typing.List[str] = None,
  repair_phases: typing.Union[IResolvable, typing.List[ClouddeployAutomationRulesRepairRolloutRuleRepairPhases]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule.property.id">id</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule.property.jobs">jobs</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule.property.phases">phases</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule.property.repairPhases">repair_phases</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases">ClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a>]]</code> | repair_phases block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule.property.id"></a>

```python
id: str
```

- *Type:* str

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobs`<sup>Optional</sup> <a name="jobs" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule.property.jobs"></a>

```python
jobs: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

Jobs to repair. Proceeds only after job name matched any one in the list, or for all jobs if unspecified or empty. The phase that includes the job must match the phase ID specified in sourcePhase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: ^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#jobs ClouddeployAutomation#jobs}

---

##### `phases`<sup>Optional</sup> <a name="phases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule.property.phases"></a>

```python
phases: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

Phases within which jobs are subject to automatic repair actions on failure. Proceeds only after phase name matched any one in the list, or for all phases if unspecified. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: ^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#phases ClouddeployAutomation#phases}

---

##### `repair_phases`<sup>Optional</sup> <a name="repair_phases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule.property.repairPhases"></a>

```python
repair_phases: typing.Union[IResolvable, typing.List[ClouddeployAutomationRulesRepairRolloutRuleRepairPhases]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases">ClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a>]]

repair_phases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#repair_phases ClouddeployAutomation#repair_phases}

---

### ClouddeployAutomationRulesRepairRolloutRuleRepairPhases <a name="ClouddeployAutomationRulesRepairRolloutRuleRepairPhases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases(
  retry: ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry = None,
  rollback: ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases.property.retry">retry</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a></code> | retry block. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases.property.rollback">rollback</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a></code> | rollback block. |

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases.property.retry"></a>

```python
retry: ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a>

retry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#retry ClouddeployAutomation#retry}

---

##### `rollback`<sup>Optional</sup> <a name="rollback" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases.property.rollback"></a>

```python
rollback: ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a>

rollback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#rollback ClouddeployAutomation#rollback}

---

### ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry <a name="ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry(
  attempts: str,
  backoff_mode: str = None,
  wait: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.attempts">attempts</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.backoffMode">backoff_mode</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.wait">wait</a></code> | <code>str</code> | Optional. |

---

##### `attempts`<sup>Required</sup> <a name="attempts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.attempts"></a>

```python
attempts: str
```

- *Type:* str

Required.

Total number of retries. Retry is skipped if set to 0; The minimum value is 1, and the maximum value is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#attempts ClouddeployAutomation#attempts}

---

##### `backoff_mode`<sup>Optional</sup> <a name="backoff_mode" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.backoffMode"></a>

```python
backoff_mode: str
```

- *Type:* str

Optional.

The pattern of how wait time will be increased. Default is linear. Backoff mode will be ignored if wait is 0. Possible values: ["BACKOFF_MODE_UNSPECIFIED", "BACKOFF_MODE_LINEAR", "BACKOFF_MODE_EXPONENTIAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#backoff_mode ClouddeployAutomation#backoff_mode}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.wait"></a>

```python
wait: str
```

- *Type:* str

Optional.

How long to wait for the first retry. Default is 0, and the maximum value is 14d. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#wait ClouddeployAutomation#wait}

---

### ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback <a name="ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback(
  destination_phase: str = None,
  disable_rollback_if_rollout_pending: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.property.destinationPhase">destination_phase</a></code> | <code>str</code> | Optional. The starting phase ID for the Rollout. If unspecified, the Rollout will start in the stable phase. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.property.disableRollbackIfRolloutPending">disable_rollback_if_rollout_pending</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. If pending rollout exists on the target, the rollback operation will be aborted. |

---

##### `destination_phase`<sup>Optional</sup> <a name="destination_phase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.property.destinationPhase"></a>

```python
destination_phase: str
```

- *Type:* str

Optional. The starting phase ID for the Rollout. If unspecified, the Rollout will start in the stable phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#destination_phase ClouddeployAutomation#destination_phase}

---

##### `disable_rollback_if_rollout_pending`<sup>Optional</sup> <a name="disable_rollback_if_rollout_pending" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.property.disableRollbackIfRolloutPending"></a>

```python
disable_rollback_if_rollout_pending: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. If pending rollout exists on the target, the rollback operation will be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#disable_rollback_if_rollout_pending ClouddeployAutomation#disable_rollback_if_rollout_pending}

---

### ClouddeployAutomationRulesTimedPromoteReleaseRule <a name="ClouddeployAutomationRulesTimedPromoteReleaseRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule(
  id: str,
  schedule: str,
  time_zone: str,
  destination_phase: str = None,
  destination_target_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.id">id</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.schedule">schedule</a></code> | <code>str</code> | Required. Schedule in crontab format. e.g. '0 9 * * 1' for every Monday at 9am. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.timeZone">time_zone</a></code> | <code>str</code> | Required. The time zone in IANA format IANA Time Zone Database (e.g. America/New_York). |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.destinationPhase">destination_phase</a></code> | <code>str</code> | Optional. The starting phase of the rollout created by this rule. Default to the first phase. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.destinationTargetId">destination_target_id</a></code> | <code>str</code> | Optional. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.id"></a>

```python
id: str
```

- *Type:* str

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

Required. Schedule in crontab format. e.g. '0 9 * * 1' for every Monday at 9am.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#schedule ClouddeployAutomation#schedule}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Required. The time zone in IANA format IANA Time Zone Database (e.g. America/New_York).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#time_zone ClouddeployAutomation#time_zone}

---

##### `destination_phase`<sup>Optional</sup> <a name="destination_phase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.destinationPhase"></a>

```python
destination_phase: str
```

- *Type:* str

Optional. The starting phase of the rollout created by this rule. Default to the first phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#destination_phase ClouddeployAutomation#destination_phase}

---

##### `destination_target_id`<sup>Optional</sup> <a name="destination_target_id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.destinationTargetId"></a>

```python
destination_target_id: str
```

- *Type:* str

Optional.

The ID of the stage in the pipeline to which this Release is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following:

* The last segment of a target name
* "@next", the next target in the promotion sequence"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#destination_target_id ClouddeployAutomation#destination_target_id}

---

### ClouddeployAutomationSelector <a name="ClouddeployAutomationSelector" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationSelector(
  targets: typing.Union[IResolvable, typing.List[ClouddeployAutomationSelectorTargets]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector.property.targets">targets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a>]]</code> | targets block. |

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector.property.targets"></a>

```python
targets: typing.Union[IResolvable, typing.List[ClouddeployAutomationSelectorTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a>]]

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#targets ClouddeployAutomation#targets}

---

### ClouddeployAutomationSelectorTargets <a name="ClouddeployAutomationSelectorTargets" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationSelectorTargets(
  id: str = None,
  labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets.property.id">id</a></code> | <code>str</code> | ID of the 'Target'. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Target labels. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets.property.id"></a>

```python
id: str
```

- *Type:* str

ID of the 'Target'.

The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine which target is being referred to * "*", all targets in a location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Target labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#labels ClouddeployAutomation#labels}

---

### ClouddeployAutomationTimeouts <a name="ClouddeployAutomationTimeouts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#create ClouddeployAutomation#create}. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#delete ClouddeployAutomation#delete}. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#update ClouddeployAutomation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#create ClouddeployAutomation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#delete ClouddeployAutomation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#update ClouddeployAutomation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference <a name="ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetSourcePhases">reset_source_phases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetWait">reset_wait</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_phases` <a name="reset_source_phases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetSourcePhases"></a>

```python
def reset_source_phases() -> None
```

##### `reset_wait` <a name="reset_wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetWait"></a>

```python
def reset_wait() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhasesInput">source_phases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.waitInput">wait_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhases">source_phases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.wait">wait</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `source_phases_input`<sup>Optional</sup> <a name="source_phases_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhasesInput"></a>

```python
source_phases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `wait_input`<sup>Optional</sup> <a name="wait_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.waitInput"></a>

```python
wait_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `source_phases`<sup>Required</sup> <a name="source_phases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhases"></a>

```python
source_phases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.wait"></a>

```python
wait: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.internalValue"></a>

```python
internal_value: ClouddeployAutomationRulesAdvanceRolloutRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a>

---


### ClouddeployAutomationRulesList <a name="ClouddeployAutomationRulesList" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ClouddeployAutomationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ClouddeployAutomationRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>]]

---


### ClouddeployAutomationRulesOutputReference <a name="ClouddeployAutomationRulesOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule">put_advance_rollout_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putPromoteReleaseRule">put_promote_release_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putRepairRolloutRule">put_repair_rollout_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putTimedPromoteReleaseRule">put_timed_promote_release_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetAdvanceRolloutRule">reset_advance_rollout_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetPromoteReleaseRule">reset_promote_release_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetRepairRolloutRule">reset_repair_rollout_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetTimedPromoteReleaseRule">reset_timed_promote_release_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_advance_rollout_rule` <a name="put_advance_rollout_rule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule"></a>

```python
def put_advance_rollout_rule(
  id: str,
  source_phases: typing.List[str] = None,
  wait: str = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule.parameter.id"></a>

- *Type:* str

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `source_phases`<sup>Optional</sup> <a name="source_phases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule.parameter.sourcePhases"></a>

- *Type:* typing.List[str]

Optional.

Proceeds only after phase name matched any one in the list. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: '^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#source_phases ClouddeployAutomation#source_phases}

---

###### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule.parameter.wait"></a>

- *Type:* str

Optional. How long to wait after a rollout is finished.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#wait ClouddeployAutomation#wait}

---

##### `put_promote_release_rule` <a name="put_promote_release_rule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putPromoteReleaseRule"></a>

```python
def put_promote_release_rule(
  id: str,
  destination_phase: str = None,
  destination_target_id: str = None,
  wait: str = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putPromoteReleaseRule.parameter.id"></a>

- *Type:* str

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `destination_phase`<sup>Optional</sup> <a name="destination_phase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putPromoteReleaseRule.parameter.destinationPhase"></a>

- *Type:* str

Optional. The starting phase of the rollout created by this operation. Default to the first phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#destination_phase ClouddeployAutomation#destination_phase}

---

###### `destination_target_id`<sup>Optional</sup> <a name="destination_target_id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putPromoteReleaseRule.parameter.destinationTargetId"></a>

- *Type:* str

Optional.

The ID of the stage in the pipeline to which this 'Release' is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine if the target is one of the stages in the promotion sequence defined in the pipeline. * "@next", the next target in the promotion sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#destination_target_id ClouddeployAutomation#destination_target_id}

---

###### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putPromoteReleaseRule.parameter.wait"></a>

- *Type:* str

Optional. How long the release need to be paused until being promoted to the next target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#wait ClouddeployAutomation#wait}

---

##### `put_repair_rollout_rule` <a name="put_repair_rollout_rule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putRepairRolloutRule"></a>

```python
def put_repair_rollout_rule(
  id: str,
  jobs: typing.List[str] = None,
  phases: typing.List[str] = None,
  repair_phases: typing.Union[IResolvable, typing.List[ClouddeployAutomationRulesRepairRolloutRuleRepairPhases]] = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putRepairRolloutRule.parameter.id"></a>

- *Type:* str

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `jobs`<sup>Optional</sup> <a name="jobs" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putRepairRolloutRule.parameter.jobs"></a>

- *Type:* typing.List[str]

Optional.

Jobs to repair. Proceeds only after job name matched any one in the list, or for all jobs if unspecified or empty. The phase that includes the job must match the phase ID specified in sourcePhase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: ^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#jobs ClouddeployAutomation#jobs}

---

###### `phases`<sup>Optional</sup> <a name="phases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putRepairRolloutRule.parameter.phases"></a>

- *Type:* typing.List[str]

Optional.

Phases within which jobs are subject to automatic repair actions on failure. Proceeds only after phase name matched any one in the list, or for all phases if unspecified. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: ^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#phases ClouddeployAutomation#phases}

---

###### `repair_phases`<sup>Optional</sup> <a name="repair_phases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putRepairRolloutRule.parameter.repairPhases"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases">ClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a>]]

repair_phases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#repair_phases ClouddeployAutomation#repair_phases}

---

##### `put_timed_promote_release_rule` <a name="put_timed_promote_release_rule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putTimedPromoteReleaseRule"></a>

```python
def put_timed_promote_release_rule(
  id: str,
  schedule: str,
  time_zone: str,
  destination_phase: str = None,
  destination_target_id: str = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putTimedPromoteReleaseRule.parameter.id"></a>

- *Type:* str

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putTimedPromoteReleaseRule.parameter.schedule"></a>

- *Type:* str

Required. Schedule in crontab format. e.g. '0 9 * * 1' for every Monday at 9am.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#schedule ClouddeployAutomation#schedule}

---

###### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putTimedPromoteReleaseRule.parameter.timeZone"></a>

- *Type:* str

Required. The time zone in IANA format IANA Time Zone Database (e.g. America/New_York).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#time_zone ClouddeployAutomation#time_zone}

---

###### `destination_phase`<sup>Optional</sup> <a name="destination_phase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putTimedPromoteReleaseRule.parameter.destinationPhase"></a>

- *Type:* str

Optional. The starting phase of the rollout created by this rule. Default to the first phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#destination_phase ClouddeployAutomation#destination_phase}

---

###### `destination_target_id`<sup>Optional</sup> <a name="destination_target_id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putTimedPromoteReleaseRule.parameter.destinationTargetId"></a>

- *Type:* str

Optional.

The ID of the stage in the pipeline to which this Release is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following:

* The last segment of a target name
* "@next", the next target in the promotion sequence"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#destination_target_id ClouddeployAutomation#destination_target_id}

---

##### `reset_advance_rollout_rule` <a name="reset_advance_rollout_rule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetAdvanceRolloutRule"></a>

```python
def reset_advance_rollout_rule() -> None
```

##### `reset_promote_release_rule` <a name="reset_promote_release_rule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetPromoteReleaseRule"></a>

```python
def reset_promote_release_rule() -> None
```

##### `reset_repair_rollout_rule` <a name="reset_repair_rollout_rule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetRepairRolloutRule"></a>

```python
def reset_repair_rollout_rule() -> None
```

##### `reset_timed_promote_release_rule` <a name="reset_timed_promote_release_rule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetTimedPromoteReleaseRule"></a>

```python
def reset_timed_promote_release_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.advanceRolloutRule">advance_rollout_rule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference">ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.promoteReleaseRule">promote_release_rule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference">ClouddeployAutomationRulesPromoteReleaseRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.repairRolloutRule">repair_rollout_rule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference">ClouddeployAutomationRulesRepairRolloutRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.timedPromoteReleaseRule">timed_promote_release_rule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference">ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.advanceRolloutRuleInput">advance_rollout_rule_input</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.promoteReleaseRuleInput">promote_release_rule_input</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.repairRolloutRuleInput">repair_rollout_rule_input</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule">ClouddeployAutomationRulesRepairRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.timedPromoteReleaseRuleInput">timed_promote_release_rule_input</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule">ClouddeployAutomationRulesTimedPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advance_rollout_rule`<sup>Required</sup> <a name="advance_rollout_rule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.advanceRolloutRule"></a>

```python
advance_rollout_rule: ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference">ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference</a>

---

##### `promote_release_rule`<sup>Required</sup> <a name="promote_release_rule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.promoteReleaseRule"></a>

```python
promote_release_rule: ClouddeployAutomationRulesPromoteReleaseRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference">ClouddeployAutomationRulesPromoteReleaseRuleOutputReference</a>

---

##### `repair_rollout_rule`<sup>Required</sup> <a name="repair_rollout_rule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.repairRolloutRule"></a>

```python
repair_rollout_rule: ClouddeployAutomationRulesRepairRolloutRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference">ClouddeployAutomationRulesRepairRolloutRuleOutputReference</a>

---

##### `timed_promote_release_rule`<sup>Required</sup> <a name="timed_promote_release_rule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.timedPromoteReleaseRule"></a>

```python
timed_promote_release_rule: ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference">ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference</a>

---

##### `advance_rollout_rule_input`<sup>Optional</sup> <a name="advance_rollout_rule_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.advanceRolloutRuleInput"></a>

```python
advance_rollout_rule_input: ClouddeployAutomationRulesAdvanceRolloutRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a>

---

##### `promote_release_rule_input`<sup>Optional</sup> <a name="promote_release_rule_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.promoteReleaseRuleInput"></a>

```python
promote_release_rule_input: ClouddeployAutomationRulesPromoteReleaseRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a>

---

##### `repair_rollout_rule_input`<sup>Optional</sup> <a name="repair_rollout_rule_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.repairRolloutRuleInput"></a>

```python
repair_rollout_rule_input: ClouddeployAutomationRulesRepairRolloutRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule">ClouddeployAutomationRulesRepairRolloutRule</a>

---

##### `timed_promote_release_rule_input`<sup>Optional</sup> <a name="timed_promote_release_rule_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.timedPromoteReleaseRuleInput"></a>

```python
timed_promote_release_rule_input: ClouddeployAutomationRulesTimedPromoteReleaseRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule">ClouddeployAutomationRulesTimedPromoteReleaseRule</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClouddeployAutomationRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules">ClouddeployAutomationRules</a>]

---


### ClouddeployAutomationRulesPromoteReleaseRuleOutputReference <a name="ClouddeployAutomationRulesPromoteReleaseRuleOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationPhase">reset_destination_phase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationTargetId">reset_destination_target_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetWait">reset_wait</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_phase` <a name="reset_destination_phase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationPhase"></a>

```python
def reset_destination_phase() -> None
```

##### `reset_destination_target_id` <a name="reset_destination_target_id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationTargetId"></a>

```python
def reset_destination_target_id() -> None
```

##### `reset_wait` <a name="reset_wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetWait"></a>

```python
def reset_wait() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhaseInput">destination_phase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetIdInput">destination_target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.waitInput">wait_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhase">destination_phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetId">destination_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.wait">wait</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_phase_input`<sup>Optional</sup> <a name="destination_phase_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhaseInput"></a>

```python
destination_phase_input: str
```

- *Type:* str

---

##### `destination_target_id_input`<sup>Optional</sup> <a name="destination_target_id_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetIdInput"></a>

```python
destination_target_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `wait_input`<sup>Optional</sup> <a name="wait_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.waitInput"></a>

```python
wait_input: str
```

- *Type:* str

---

##### `destination_phase`<sup>Required</sup> <a name="destination_phase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhase"></a>

```python
destination_phase: str
```

- *Type:* str

---

##### `destination_target_id`<sup>Required</sup> <a name="destination_target_id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetId"></a>

```python
destination_target_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.wait"></a>

```python
wait: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.internalValue"></a>

```python
internal_value: ClouddeployAutomationRulesPromoteReleaseRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a>

---


### ClouddeployAutomationRulesRepairRolloutRuleOutputReference <a name="ClouddeployAutomationRulesRepairRolloutRuleOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.putRepairPhases">put_repair_phases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetJobs">reset_jobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetPhases">reset_phases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetRepairPhases">reset_repair_phases</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_repair_phases` <a name="put_repair_phases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.putRepairPhases"></a>

```python
def put_repair_phases(
  value: typing.Union[IResolvable, typing.List[ClouddeployAutomationRulesRepairRolloutRuleRepairPhases]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.putRepairPhases.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases">ClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a>]]

---

##### `reset_jobs` <a name="reset_jobs" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetJobs"></a>

```python
def reset_jobs() -> None
```

##### `reset_phases` <a name="reset_phases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetPhases"></a>

```python
def reset_phases() -> None
```

##### `reset_repair_phases` <a name="reset_repair_phases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetRepairPhases"></a>

```python
def reset_repair_phases() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.repairPhases">repair_phases</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.jobsInput">jobs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.phasesInput">phases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.repairPhasesInput">repair_phases_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases">ClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.jobs">jobs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.phases">phases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule">ClouddeployAutomationRulesRepairRolloutRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repair_phases`<sup>Required</sup> <a name="repair_phases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.repairPhases"></a>

```python
repair_phases: ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `jobs_input`<sup>Optional</sup> <a name="jobs_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.jobsInput"></a>

```python
jobs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phases_input`<sup>Optional</sup> <a name="phases_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.phasesInput"></a>

```python
phases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repair_phases_input`<sup>Optional</sup> <a name="repair_phases_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.repairPhasesInput"></a>

```python
repair_phases_input: typing.Union[IResolvable, typing.List[ClouddeployAutomationRulesRepairRolloutRuleRepairPhases]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases">ClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `jobs`<sup>Required</sup> <a name="jobs" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.jobs"></a>

```python
jobs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phases`<sup>Required</sup> <a name="phases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.phases"></a>

```python
phases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.internalValue"></a>

```python
internal_value: ClouddeployAutomationRulesRepairRolloutRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule">ClouddeployAutomationRulesRepairRolloutRule</a>

---


### ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList <a name="ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases">ClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ClouddeployAutomationRulesRepairRolloutRuleRepairPhases]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases">ClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a>]]

---


### ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference <a name="ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRetry">put_retry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRollback">put_rollback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resetRetry">reset_retry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resetRollback">reset_rollback</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_retry` <a name="put_retry" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRetry"></a>

```python
def put_retry(
  attempts: str,
  backoff_mode: str = None,
  wait: str = None
) -> None
```

###### `attempts`<sup>Required</sup> <a name="attempts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRetry.parameter.attempts"></a>

- *Type:* str

Required.

Total number of retries. Retry is skipped if set to 0; The minimum value is 1, and the maximum value is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#attempts ClouddeployAutomation#attempts}

---

###### `backoff_mode`<sup>Optional</sup> <a name="backoff_mode" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRetry.parameter.backoffMode"></a>

- *Type:* str

Optional.

The pattern of how wait time will be increased. Default is linear. Backoff mode will be ignored if wait is 0. Possible values: ["BACKOFF_MODE_UNSPECIFIED", "BACKOFF_MODE_LINEAR", "BACKOFF_MODE_EXPONENTIAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#backoff_mode ClouddeployAutomation#backoff_mode}

---

###### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRetry.parameter.wait"></a>

- *Type:* str

Optional.

How long to wait for the first retry. Default is 0, and the maximum value is 14d. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#wait ClouddeployAutomation#wait}

---

##### `put_rollback` <a name="put_rollback" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRollback"></a>

```python
def put_rollback(
  destination_phase: str = None,
  disable_rollback_if_rollout_pending: typing.Union[bool, IResolvable] = None
) -> None
```

###### `destination_phase`<sup>Optional</sup> <a name="destination_phase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRollback.parameter.destinationPhase"></a>

- *Type:* str

Optional. The starting phase ID for the Rollout. If unspecified, the Rollout will start in the stable phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#destination_phase ClouddeployAutomation#destination_phase}

---

###### `disable_rollback_if_rollout_pending`<sup>Optional</sup> <a name="disable_rollback_if_rollout_pending" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRollback.parameter.disableRollbackIfRolloutPending"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. If pending rollout exists on the target, the rollback operation will be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/clouddeploy_automation#disable_rollback_if_rollout_pending ClouddeployAutomation#disable_rollback_if_rollout_pending}

---

##### `reset_retry` <a name="reset_retry" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resetRetry"></a>

```python
def reset_retry() -> None
```

##### `reset_rollback` <a name="reset_rollback" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resetRollback"></a>

```python
def reset_rollback() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.retry">retry</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.rollback">rollback</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.retryInput">retry_input</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.rollbackInput">rollback_input</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases">ClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.retry"></a>

```python
retry: ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference</a>

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.rollback"></a>

```python
rollback: ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference</a>

---

##### `retry_input`<sup>Optional</sup> <a name="retry_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.retryInput"></a>

```python
retry_input: ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a>

---

##### `rollback_input`<sup>Optional</sup> <a name="rollback_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.rollbackInput"></a>

```python
rollback_input: ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClouddeployAutomationRulesRepairRolloutRuleRepairPhases]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases">ClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a>]

---


### ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference <a name="ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resetBackoffMode">reset_backoff_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resetWait">reset_wait</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backoff_mode` <a name="reset_backoff_mode" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resetBackoffMode"></a>

```python
def reset_backoff_mode() -> None
```

##### `reset_wait` <a name="reset_wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resetWait"></a>

```python
def reset_wait() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.attemptsInput">attempts_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.backoffModeInput">backoff_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.waitInput">wait_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.attempts">attempts</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.backoffMode">backoff_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.wait">wait</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attempts_input`<sup>Optional</sup> <a name="attempts_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.attemptsInput"></a>

```python
attempts_input: str
```

- *Type:* str

---

##### `backoff_mode_input`<sup>Optional</sup> <a name="backoff_mode_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.backoffModeInput"></a>

```python
backoff_mode_input: str
```

- *Type:* str

---

##### `wait_input`<sup>Optional</sup> <a name="wait_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.waitInput"></a>

```python
wait_input: str
```

- *Type:* str

---

##### `attempts`<sup>Required</sup> <a name="attempts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.attempts"></a>

```python
attempts: str
```

- *Type:* str

---

##### `backoff_mode`<sup>Required</sup> <a name="backoff_mode" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.backoffMode"></a>

```python
backoff_mode: str
```

- *Type:* str

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.wait"></a>

```python
wait: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.internalValue"></a>

```python
internal_value: ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a>

---


### ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference <a name="ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resetDestinationPhase">reset_destination_phase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resetDisableRollbackIfRolloutPending">reset_disable_rollback_if_rollout_pending</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_phase` <a name="reset_destination_phase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resetDestinationPhase"></a>

```python
def reset_destination_phase() -> None
```

##### `reset_disable_rollback_if_rollout_pending` <a name="reset_disable_rollback_if_rollout_pending" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resetDisableRollbackIfRolloutPending"></a>

```python
def reset_disable_rollback_if_rollout_pending() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.destinationPhaseInput">destination_phase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.disableRollbackIfRolloutPendingInput">disable_rollback_if_rollout_pending_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.destinationPhase">destination_phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.disableRollbackIfRolloutPending">disable_rollback_if_rollout_pending</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_phase_input`<sup>Optional</sup> <a name="destination_phase_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.destinationPhaseInput"></a>

```python
destination_phase_input: str
```

- *Type:* str

---

##### `disable_rollback_if_rollout_pending_input`<sup>Optional</sup> <a name="disable_rollback_if_rollout_pending_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.disableRollbackIfRolloutPendingInput"></a>

```python
disable_rollback_if_rollout_pending_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `destination_phase`<sup>Required</sup> <a name="destination_phase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.destinationPhase"></a>

```python
destination_phase: str
```

- *Type:* str

---

##### `disable_rollback_if_rollout_pending`<sup>Required</sup> <a name="disable_rollback_if_rollout_pending" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.disableRollbackIfRolloutPending"></a>

```python
disable_rollback_if_rollout_pending: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.internalValue"></a>

```python
internal_value: ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a>

---


### ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference <a name="ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resetDestinationPhase">reset_destination_phase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resetDestinationTargetId">reset_destination_target_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_phase` <a name="reset_destination_phase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resetDestinationPhase"></a>

```python
def reset_destination_phase() -> None
```

##### `reset_destination_target_id` <a name="reset_destination_target_id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resetDestinationTargetId"></a>

```python
def reset_destination_target_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationPhaseInput">destination_phase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationTargetIdInput">destination_target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationPhase">destination_phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationTargetId">destination_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule">ClouddeployAutomationRulesTimedPromoteReleaseRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_phase_input`<sup>Optional</sup> <a name="destination_phase_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationPhaseInput"></a>

```python
destination_phase_input: str
```

- *Type:* str

---

##### `destination_target_id_input`<sup>Optional</sup> <a name="destination_target_id_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationTargetIdInput"></a>

```python
destination_target_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `destination_phase`<sup>Required</sup> <a name="destination_phase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationPhase"></a>

```python
destination_phase: str
```

- *Type:* str

---

##### `destination_target_id`<sup>Required</sup> <a name="destination_target_id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationTargetId"></a>

```python
destination_target_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.internalValue"></a>

```python
internal_value: ClouddeployAutomationRulesTimedPromoteReleaseRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule">ClouddeployAutomationRulesTimedPromoteReleaseRule</a>

---


### ClouddeployAutomationSelectorOutputReference <a name="ClouddeployAutomationSelectorOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.putTargets">put_targets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_targets` <a name="put_targets" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.putTargets"></a>

```python
def put_targets(
  value: typing.Union[IResolvable, typing.List[ClouddeployAutomationSelectorTargets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.putTargets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList">ClouddeployAutomationSelectorTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.targetsInput">targets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.targets"></a>

```python
targets: ClouddeployAutomationSelectorTargetsList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList">ClouddeployAutomationSelectorTargetsList</a>

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.targetsInput"></a>

```python
targets_input: typing.Union[IResolvable, typing.List[ClouddeployAutomationSelectorTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.internalValue"></a>

```python
internal_value: ClouddeployAutomationSelector
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a>

---


### ClouddeployAutomationSelectorTargetsList <a name="ClouddeployAutomationSelectorTargetsList" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationSelectorTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ClouddeployAutomationSelectorTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ClouddeployAutomationSelectorTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a>]]

---


### ClouddeployAutomationSelectorTargetsOutputReference <a name="ClouddeployAutomationSelectorTargetsOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resetLabels">reset_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClouddeployAutomationSelectorTargets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets">ClouddeployAutomationSelectorTargets</a>]

---


### ClouddeployAutomationTimeoutsOutputReference <a name="ClouddeployAutomationTimeoutsOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_automation

clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts">ClouddeployAutomationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClouddeployAutomationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts">ClouddeployAutomationTimeouts</a>]

---



