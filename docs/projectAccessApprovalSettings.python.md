# `projectAccessApprovalSettings` Submodule <a name="`projectAccessApprovalSettings` Submodule" id="@cdktf/provider-google.projectAccessApprovalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectAccessApprovalSettings <a name="ProjectAccessApprovalSettings" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings google_project_access_approval_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import project_access_approval_settings

projectAccessApprovalSettings.ProjectAccessApprovalSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enrolled_services: typing.Union[IResolvable, typing.List[ProjectAccessApprovalSettingsEnrolledServices]],
  project_id: str,
  active_key_version: str = None,
  id: str = None,
  notification_emails: typing.List[str] = None,
  project: str = None,
  timeouts: ProjectAccessApprovalSettingsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.enrolledServices">enrolled_services</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices">ProjectAccessApprovalSettingsEnrolledServices</a>]]</code> | enrolled_services block. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | ID of the project of the access approval settings. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.activeKeyVersion">active_key_version</a></code> | <code>str</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#id ProjectAccessApprovalSettings#id}. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.notificationEmails">notification_emails</a></code> | <code>typing.List[str]</code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.project">project</a></code> | <code>str</code> | Project id. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts">ProjectAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enrolled_services`<sup>Required</sup> <a name="enrolled_services" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.enrolledServices"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices">ProjectAccessApprovalSettingsEnrolledServices</a>]]

enrolled_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#enrolled_services ProjectAccessApprovalSettings#enrolled_services}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.projectId"></a>

- *Type:* str

ID of the project of the access approval settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#project_id ProjectAccessApprovalSettings#project_id}

---

##### `active_key_version`<sup>Optional</sup> <a name="active_key_version" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.activeKeyVersion"></a>

- *Type:* str

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.
This property will be ignored if set by an ancestor of the resource, and new non-empty values may not be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#active_key_version ProjectAccessApprovalSettings#active_key_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#id ProjectAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_emails`<sup>Optional</sup> <a name="notification_emails" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.notificationEmails"></a>

- *Type:* typing.List[str]

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#notification_emails ProjectAccessApprovalSettings#notification_emails}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.project"></a>

- *Type:* str

Project id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#project ProjectAccessApprovalSettings#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts">ProjectAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#timeouts ProjectAccessApprovalSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.putEnrolledServices">put_enrolled_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetActiveKeyVersion">reset_active_key_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetNotificationEmails">reset_notification_emails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_enrolled_services` <a name="put_enrolled_services" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.putEnrolledServices"></a>

```python
def put_enrolled_services(
  value: typing.Union[IResolvable, typing.List[ProjectAccessApprovalSettingsEnrolledServices]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.putEnrolledServices.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices">ProjectAccessApprovalSettingsEnrolledServices</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#create ProjectAccessApprovalSettings#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#delete ProjectAccessApprovalSettings#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#update ProjectAccessApprovalSettings#update}.

---

##### `reset_active_key_version` <a name="reset_active_key_version" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetActiveKeyVersion"></a>

```python
def reset_active_key_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notification_emails` <a name="reset_notification_emails" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetNotificationEmails"></a>

```python
def reset_notification_emails() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectAccessApprovalSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import project_access_approval_settings

projectAccessApprovalSettings.ProjectAccessApprovalSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import project_access_approval_settings

projectAccessApprovalSettings.ProjectAccessApprovalSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import project_access_approval_settings

projectAccessApprovalSettings.ProjectAccessApprovalSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import project_access_approval_settings

projectAccessApprovalSettings.ProjectAccessApprovalSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectAccessApprovalSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectAccessApprovalSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectAccessApprovalSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectAccessApprovalSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.ancestorHasActiveKeyVersion">ancestor_has_active_key_version</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.enrolledAncestor">enrolled_ancestor</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.enrolledServices">enrolled_services</a></code> | <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList">ProjectAccessApprovalSettingsEnrolledServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.invalidKeyVersion">invalid_key_version</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference">ProjectAccessApprovalSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.activeKeyVersionInput">active_key_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.enrolledServicesInput">enrolled_services_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices">ProjectAccessApprovalSettingsEnrolledServices</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.notificationEmailsInput">notification_emails_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts">ProjectAccessApprovalSettingsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.activeKeyVersion">active_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.notificationEmails">notification_emails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ancestor_has_active_key_version`<sup>Required</sup> <a name="ancestor_has_active_key_version" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.ancestorHasActiveKeyVersion"></a>

```python
ancestor_has_active_key_version: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enrolled_ancestor`<sup>Required</sup> <a name="enrolled_ancestor" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.enrolledAncestor"></a>

```python
enrolled_ancestor: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enrolled_services`<sup>Required</sup> <a name="enrolled_services" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.enrolledServices"></a>

```python
enrolled_services: ProjectAccessApprovalSettingsEnrolledServicesList
```

- *Type:* <a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList">ProjectAccessApprovalSettingsEnrolledServicesList</a>

---

##### `invalid_key_version`<sup>Required</sup> <a name="invalid_key_version" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.invalidKeyVersion"></a>

```python
invalid_key_version: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.timeouts"></a>

```python
timeouts: ProjectAccessApprovalSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference">ProjectAccessApprovalSettingsTimeoutsOutputReference</a>

---

##### `active_key_version_input`<sup>Optional</sup> <a name="active_key_version_input" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.activeKeyVersionInput"></a>

```python
active_key_version_input: str
```

- *Type:* str

---

##### `enrolled_services_input`<sup>Optional</sup> <a name="enrolled_services_input" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.enrolledServicesInput"></a>

```python
enrolled_services_input: typing.Union[IResolvable, typing.List[ProjectAccessApprovalSettingsEnrolledServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices">ProjectAccessApprovalSettingsEnrolledServices</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `notification_emails_input`<sup>Optional</sup> <a name="notification_emails_input" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.notificationEmailsInput"></a>

```python
notification_emails_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ProjectAccessApprovalSettingsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts">ProjectAccessApprovalSettingsTimeouts</a>]

---

##### `active_key_version`<sup>Required</sup> <a name="active_key_version" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.activeKeyVersion"></a>

```python
active_key_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notification_emails`<sup>Required</sup> <a name="notification_emails" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.notificationEmails"></a>

```python
notification_emails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectAccessApprovalSettingsConfig <a name="ProjectAccessApprovalSettingsConfig" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import project_access_approval_settings

projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enrolled_services: typing.Union[IResolvable, typing.List[ProjectAccessApprovalSettingsEnrolledServices]],
  project_id: str,
  active_key_version: str = None,
  id: str = None,
  notification_emails: typing.List[str] = None,
  project: str = None,
  timeouts: ProjectAccessApprovalSettingsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.enrolledServices">enrolled_services</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices">ProjectAccessApprovalSettingsEnrolledServices</a>]]</code> | enrolled_services block. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.projectId">project_id</a></code> | <code>str</code> | ID of the project of the access approval settings. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.activeKeyVersion">active_key_version</a></code> | <code>str</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#id ProjectAccessApprovalSettings#id}. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.notificationEmails">notification_emails</a></code> | <code>typing.List[str]</code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.project">project</a></code> | <code>str</code> | Project id. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts">ProjectAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enrolled_services`<sup>Required</sup> <a name="enrolled_services" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.enrolledServices"></a>

```python
enrolled_services: typing.Union[IResolvable, typing.List[ProjectAccessApprovalSettingsEnrolledServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices">ProjectAccessApprovalSettingsEnrolledServices</a>]]

enrolled_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#enrolled_services ProjectAccessApprovalSettings#enrolled_services}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

ID of the project of the access approval settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#project_id ProjectAccessApprovalSettings#project_id}

---

##### `active_key_version`<sup>Optional</sup> <a name="active_key_version" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.activeKeyVersion"></a>

```python
active_key_version: str
```

- *Type:* str

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.
This property will be ignored if set by an ancestor of the resource, and new non-empty values may not be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#active_key_version ProjectAccessApprovalSettings#active_key_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#id ProjectAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_emails`<sup>Optional</sup> <a name="notification_emails" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.notificationEmails"></a>

```python
notification_emails: typing.List[str]
```

- *Type:* typing.List[str]

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#notification_emails ProjectAccessApprovalSettings#notification_emails}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Project id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#project ProjectAccessApprovalSettings#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsConfig.property.timeouts"></a>

```python
timeouts: ProjectAccessApprovalSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts">ProjectAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#timeouts ProjectAccessApprovalSettings#timeouts}

---

### ProjectAccessApprovalSettingsEnrolledServices <a name="ProjectAccessApprovalSettingsEnrolledServices" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices.Initializer"></a>

```python
from cdktf_cdktf_provider_google import project_access_approval_settings

projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices(
  cloud_product: str,
  enrollment_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices.property.cloudProduct">cloud_product</a></code> | <code>str</code> | The product for which Access Approval will be enrolled. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices.property.enrollmentLevel">enrollment_level</a></code> | <code>str</code> | The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"]. |

---

##### `cloud_product`<sup>Required</sup> <a name="cloud_product" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices.property.cloudProduct"></a>

```python
cloud_product: str
```

- *Type:* str

The product for which Access Approval will be enrolled.

Allowed values are listed (case-sensitive):
all
appengine.googleapis.com
bigquery.googleapis.com
bigtable.googleapis.com
cloudkms.googleapis.com
compute.googleapis.com
dataflow.googleapis.com
iam.googleapis.com
pubsub.googleapis.com
storage.googleapis.com

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#cloud_product ProjectAccessApprovalSettings#cloud_product}

---

##### `enrollment_level`<sup>Optional</sup> <a name="enrollment_level" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices.property.enrollmentLevel"></a>

```python
enrollment_level: str
```

- *Type:* str

The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#enrollment_level ProjectAccessApprovalSettings#enrollment_level}

---

### ProjectAccessApprovalSettingsTimeouts <a name="ProjectAccessApprovalSettingsTimeouts" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import project_access_approval_settings

projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#create ProjectAccessApprovalSettings#create}. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#delete ProjectAccessApprovalSettings#delete}. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#update ProjectAccessApprovalSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#create ProjectAccessApprovalSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#delete ProjectAccessApprovalSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/project_access_approval_settings#update ProjectAccessApprovalSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectAccessApprovalSettingsEnrolledServicesList <a name="ProjectAccessApprovalSettingsEnrolledServicesList" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import project_access_approval_settings

projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProjectAccessApprovalSettingsEnrolledServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices">ProjectAccessApprovalSettingsEnrolledServices</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProjectAccessApprovalSettingsEnrolledServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices">ProjectAccessApprovalSettingsEnrolledServices</a>]]

---


### ProjectAccessApprovalSettingsEnrolledServicesOutputReference <a name="ProjectAccessApprovalSettingsEnrolledServicesOutputReference" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import project_access_approval_settings

projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel">reset_enrollment_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enrollment_level` <a name="reset_enrollment_level" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel"></a>

```python
def reset_enrollment_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput">cloud_product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput">enrollment_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct">cloud_product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel">enrollment_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices">ProjectAccessApprovalSettingsEnrolledServices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_product_input`<sup>Optional</sup> <a name="cloud_product_input" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput"></a>

```python
cloud_product_input: str
```

- *Type:* str

---

##### `enrollment_level_input`<sup>Optional</sup> <a name="enrollment_level_input" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput"></a>

```python
enrollment_level_input: str
```

- *Type:* str

---

##### `cloud_product`<sup>Required</sup> <a name="cloud_product" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct"></a>

```python
cloud_product: str
```

- *Type:* str

---

##### `enrollment_level`<sup>Required</sup> <a name="enrollment_level" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel"></a>

```python
enrollment_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProjectAccessApprovalSettingsEnrolledServices]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsEnrolledServices">ProjectAccessApprovalSettingsEnrolledServices</a>]

---


### ProjectAccessApprovalSettingsTimeoutsOutputReference <a name="ProjectAccessApprovalSettingsTimeoutsOutputReference" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import project_access_approval_settings

projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts">ProjectAccessApprovalSettingsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProjectAccessApprovalSettingsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.projectAccessApprovalSettings.ProjectAccessApprovalSettingsTimeouts">ProjectAccessApprovalSettingsTimeouts</a>]

---



