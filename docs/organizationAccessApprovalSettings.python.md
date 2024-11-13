# `organizationAccessApprovalSettings` Submodule <a name="`organizationAccessApprovalSettings` Submodule" id="@cdktf/provider-google.organizationAccessApprovalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationAccessApprovalSettings <a name="OrganizationAccessApprovalSettings" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings google_organization_access_approval_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_access_approval_settings

organizationAccessApprovalSettings.OrganizationAccessApprovalSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enrolled_services: typing.Union[IResolvable, typing.List[OrganizationAccessApprovalSettingsEnrolledServices]],
  organization_id: str,
  active_key_version: str = None,
  id: str = None,
  notification_emails: typing.List[str] = None,
  timeouts: OrganizationAccessApprovalSettingsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.enrolledServices">enrolled_services</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices">OrganizationAccessApprovalSettingsEnrolledServices</a>]]</code> | enrolled_services block. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.organizationId">organization_id</a></code> | <code>str</code> | ID of the organization of the access approval settings. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.activeKeyVersion">active_key_version</a></code> | <code>str</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#id OrganizationAccessApprovalSettings#id}. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.notificationEmails">notification_emails</a></code> | <code>typing.List[str]</code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts">OrganizationAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enrolled_services`<sup>Required</sup> <a name="enrolled_services" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.enrolledServices"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices">OrganizationAccessApprovalSettingsEnrolledServices</a>]]

enrolled_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#enrolled_services OrganizationAccessApprovalSettings#enrolled_services}

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.organizationId"></a>

- *Type:* str

ID of the organization of the access approval settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#organization_id OrganizationAccessApprovalSettings#organization_id}

---

##### `active_key_version`<sup>Optional</sup> <a name="active_key_version" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.activeKeyVersion"></a>

- *Type:* str

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#active_key_version OrganizationAccessApprovalSettings#active_key_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#id OrganizationAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_emails`<sup>Optional</sup> <a name="notification_emails" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.notificationEmails"></a>

- *Type:* typing.List[str]

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#notification_emails OrganizationAccessApprovalSettings#notification_emails}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts">OrganizationAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#timeouts OrganizationAccessApprovalSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.putEnrolledServices">put_enrolled_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetActiveKeyVersion">reset_active_key_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetNotificationEmails">reset_notification_emails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_enrolled_services` <a name="put_enrolled_services" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.putEnrolledServices"></a>

```python
def put_enrolled_services(
  value: typing.Union[IResolvable, typing.List[OrganizationAccessApprovalSettingsEnrolledServices]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.putEnrolledServices.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices">OrganizationAccessApprovalSettingsEnrolledServices</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#create OrganizationAccessApprovalSettings#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#delete OrganizationAccessApprovalSettings#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#update OrganizationAccessApprovalSettings#update}.

---

##### `reset_active_key_version` <a name="reset_active_key_version" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetActiveKeyVersion"></a>

```python
def reset_active_key_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notification_emails` <a name="reset_notification_emails" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetNotificationEmails"></a>

```python
def reset_notification_emails() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OrganizationAccessApprovalSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import organization_access_approval_settings

organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import organization_access_approval_settings

organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import organization_access_approval_settings

organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import organization_access_approval_settings

organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OrganizationAccessApprovalSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OrganizationAccessApprovalSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OrganizationAccessApprovalSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationAccessApprovalSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.ancestorHasActiveKeyVersion">ancestor_has_active_key_version</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.enrolledAncestor">enrolled_ancestor</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.enrolledServices">enrolled_services</a></code> | <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList">OrganizationAccessApprovalSettingsEnrolledServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.invalidKeyVersion">invalid_key_version</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference">OrganizationAccessApprovalSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.activeKeyVersionInput">active_key_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.enrolledServicesInput">enrolled_services_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices">OrganizationAccessApprovalSettingsEnrolledServices</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.notificationEmailsInput">notification_emails_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.organizationIdInput">organization_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts">OrganizationAccessApprovalSettingsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.activeKeyVersion">active_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.notificationEmails">notification_emails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ancestor_has_active_key_version`<sup>Required</sup> <a name="ancestor_has_active_key_version" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.ancestorHasActiveKeyVersion"></a>

```python
ancestor_has_active_key_version: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enrolled_ancestor`<sup>Required</sup> <a name="enrolled_ancestor" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.enrolledAncestor"></a>

```python
enrolled_ancestor: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enrolled_services`<sup>Required</sup> <a name="enrolled_services" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.enrolledServices"></a>

```python
enrolled_services: OrganizationAccessApprovalSettingsEnrolledServicesList
```

- *Type:* <a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList">OrganizationAccessApprovalSettingsEnrolledServicesList</a>

---

##### `invalid_key_version`<sup>Required</sup> <a name="invalid_key_version" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.invalidKeyVersion"></a>

```python
invalid_key_version: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.timeouts"></a>

```python
timeouts: OrganizationAccessApprovalSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference">OrganizationAccessApprovalSettingsTimeoutsOutputReference</a>

---

##### `active_key_version_input`<sup>Optional</sup> <a name="active_key_version_input" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.activeKeyVersionInput"></a>

```python
active_key_version_input: str
```

- *Type:* str

---

##### `enrolled_services_input`<sup>Optional</sup> <a name="enrolled_services_input" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.enrolledServicesInput"></a>

```python
enrolled_services_input: typing.Union[IResolvable, typing.List[OrganizationAccessApprovalSettingsEnrolledServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices">OrganizationAccessApprovalSettingsEnrolledServices</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `notification_emails_input`<sup>Optional</sup> <a name="notification_emails_input" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.notificationEmailsInput"></a>

```python
notification_emails_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_id_input`<sup>Optional</sup> <a name="organization_id_input" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.organizationIdInput"></a>

```python
organization_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OrganizationAccessApprovalSettingsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts">OrganizationAccessApprovalSettingsTimeouts</a>]

---

##### `active_key_version`<sup>Required</sup> <a name="active_key_version" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.activeKeyVersion"></a>

```python
active_key_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notification_emails`<sup>Required</sup> <a name="notification_emails" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.notificationEmails"></a>

```python
notification_emails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationAccessApprovalSettingsConfig <a name="OrganizationAccessApprovalSettingsConfig" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_access_approval_settings

organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enrolled_services: typing.Union[IResolvable, typing.List[OrganizationAccessApprovalSettingsEnrolledServices]],
  organization_id: str,
  active_key_version: str = None,
  id: str = None,
  notification_emails: typing.List[str] = None,
  timeouts: OrganizationAccessApprovalSettingsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.enrolledServices">enrolled_services</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices">OrganizationAccessApprovalSettingsEnrolledServices</a>]]</code> | enrolled_services block. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.organizationId">organization_id</a></code> | <code>str</code> | ID of the organization of the access approval settings. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.activeKeyVersion">active_key_version</a></code> | <code>str</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#id OrganizationAccessApprovalSettings#id}. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.notificationEmails">notification_emails</a></code> | <code>typing.List[str]</code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts">OrganizationAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enrolled_services`<sup>Required</sup> <a name="enrolled_services" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.enrolledServices"></a>

```python
enrolled_services: typing.Union[IResolvable, typing.List[OrganizationAccessApprovalSettingsEnrolledServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices">OrganizationAccessApprovalSettingsEnrolledServices</a>]]

enrolled_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#enrolled_services OrganizationAccessApprovalSettings#enrolled_services}

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

ID of the organization of the access approval settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#organization_id OrganizationAccessApprovalSettings#organization_id}

---

##### `active_key_version`<sup>Optional</sup> <a name="active_key_version" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.activeKeyVersion"></a>

```python
active_key_version: str
```

- *Type:* str

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#active_key_version OrganizationAccessApprovalSettings#active_key_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#id OrganizationAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_emails`<sup>Optional</sup> <a name="notification_emails" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.notificationEmails"></a>

```python
notification_emails: typing.List[str]
```

- *Type:* typing.List[str]

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#notification_emails OrganizationAccessApprovalSettings#notification_emails}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.timeouts"></a>

```python
timeouts: OrganizationAccessApprovalSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts">OrganizationAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#timeouts OrganizationAccessApprovalSettings#timeouts}

---

### OrganizationAccessApprovalSettingsEnrolledServices <a name="OrganizationAccessApprovalSettingsEnrolledServices" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_access_approval_settings

organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices(
  cloud_product: str,
  enrollment_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices.property.cloudProduct">cloud_product</a></code> | <code>str</code> | The product for which Access Approval will be enrolled. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices.property.enrollmentLevel">enrollment_level</a></code> | <code>str</code> | The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"]. |

---

##### `cloud_product`<sup>Required</sup> <a name="cloud_product" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices.property.cloudProduct"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#cloud_product OrganizationAccessApprovalSettings#cloud_product}

---

##### `enrollment_level`<sup>Optional</sup> <a name="enrollment_level" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices.property.enrollmentLevel"></a>

```python
enrollment_level: str
```

- *Type:* str

The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#enrollment_level OrganizationAccessApprovalSettings#enrollment_level}

---

### OrganizationAccessApprovalSettingsTimeouts <a name="OrganizationAccessApprovalSettingsTimeouts" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_access_approval_settings

organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#create OrganizationAccessApprovalSettings#create}. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#delete OrganizationAccessApprovalSettings#delete}. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#update OrganizationAccessApprovalSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#create OrganizationAccessApprovalSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#delete OrganizationAccessApprovalSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/organization_access_approval_settings#update OrganizationAccessApprovalSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationAccessApprovalSettingsEnrolledServicesList <a name="OrganizationAccessApprovalSettingsEnrolledServicesList" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_access_approval_settings

organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrganizationAccessApprovalSettingsEnrolledServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices">OrganizationAccessApprovalSettingsEnrolledServices</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OrganizationAccessApprovalSettingsEnrolledServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices">OrganizationAccessApprovalSettingsEnrolledServices</a>]]

---


### OrganizationAccessApprovalSettingsEnrolledServicesOutputReference <a name="OrganizationAccessApprovalSettingsEnrolledServicesOutputReference" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_access_approval_settings

organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel">reset_enrollment_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enrollment_level` <a name="reset_enrollment_level" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel"></a>

```python
def reset_enrollment_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput">cloud_product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput">enrollment_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct">cloud_product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel">enrollment_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices">OrganizationAccessApprovalSettingsEnrolledServices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_product_input`<sup>Optional</sup> <a name="cloud_product_input" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput"></a>

```python
cloud_product_input: str
```

- *Type:* str

---

##### `enrollment_level_input`<sup>Optional</sup> <a name="enrollment_level_input" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput"></a>

```python
enrollment_level_input: str
```

- *Type:* str

---

##### `cloud_product`<sup>Required</sup> <a name="cloud_product" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct"></a>

```python
cloud_product: str
```

- *Type:* str

---

##### `enrollment_level`<sup>Required</sup> <a name="enrollment_level" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel"></a>

```python
enrollment_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OrganizationAccessApprovalSettingsEnrolledServices]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices">OrganizationAccessApprovalSettingsEnrolledServices</a>]

---


### OrganizationAccessApprovalSettingsTimeoutsOutputReference <a name="OrganizationAccessApprovalSettingsTimeoutsOutputReference" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_access_approval_settings

organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts">OrganizationAccessApprovalSettingsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OrganizationAccessApprovalSettingsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts">OrganizationAccessApprovalSettingsTimeouts</a>]

---



