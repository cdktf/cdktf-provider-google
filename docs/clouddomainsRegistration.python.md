# `clouddomainsRegistration` Submodule <a name="`clouddomainsRegistration` Submodule" id="@cdktf/provider-google.clouddomainsRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddomainsRegistration <a name="ClouddomainsRegistration" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration google_clouddomains_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  contact_settings: ClouddomainsRegistrationContactSettings,
  domain_name: str,
  location: str,
  yearly_price: ClouddomainsRegistrationYearlyPrice,
  contact_notices: typing.List[str] = None,
  dns_settings: ClouddomainsRegistrationDnsSettings = None,
  domain_notices: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  management_settings: ClouddomainsRegistrationManagementSettings = None,
  project: str = None,
  timeouts: ClouddomainsRegistrationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.contactSettings">contact_settings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a></code> | contact_settings block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Required. The domain name. Unicode domain names must be expressed in Punycode format. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.yearlyPrice">yearly_price</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a></code> | yearly_price block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.contactNotices">contact_notices</a></code> | <code>typing.List[str]</code> | The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.dnsSettings">dns_settings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a></code> | dns_settings block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.domainNotices">domain_notices</a></code> | <code>typing.List[str]</code> | The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#id ClouddomainsRegistration#id}. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with the Registration. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.managementSettings">management_settings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a></code> | management_settings block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#project ClouddomainsRegistration#project}. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts">ClouddomainsRegistrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `contact_settings`<sup>Required</sup> <a name="contact_settings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.contactSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a>

contact_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#contact_settings ClouddomainsRegistration#contact_settings}

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.domainName"></a>

- *Type:* str

Required. The domain name. Unicode domain names must be expressed in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#domain_name ClouddomainsRegistration#domain_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#location ClouddomainsRegistration#location}

---

##### `yearly_price`<sup>Required</sup> <a name="yearly_price" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.yearlyPrice"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a>

yearly_price block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#yearly_price ClouddomainsRegistration#yearly_price}

---

##### `contact_notices`<sup>Optional</sup> <a name="contact_notices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.contactNotices"></a>

- *Type:* typing.List[str]

The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#contact_notices ClouddomainsRegistration#contact_notices}

---

##### `dns_settings`<sup>Optional</sup> <a name="dns_settings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.dnsSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a>

dns_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#dns_settings ClouddomainsRegistration#dns_settings}

---

##### `domain_notices`<sup>Optional</sup> <a name="domain_notices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.domainNotices"></a>

- *Type:* typing.List[str]

The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#domain_notices ClouddomainsRegistration#domain_notices}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#id ClouddomainsRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of labels associated with the Registration.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#labels ClouddomainsRegistration#labels}

---

##### `management_settings`<sup>Optional</sup> <a name="management_settings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.managementSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a>

management_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#management_settings ClouddomainsRegistration#management_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#project ClouddomainsRegistration#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts">ClouddomainsRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#timeouts ClouddomainsRegistration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putContactSettings">put_contact_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putDnsSettings">put_dns_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putManagementSettings">put_management_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putYearlyPrice">put_yearly_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetContactNotices">reset_contact_notices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetDnsSettings">reset_dns_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetDomainNotices">reset_domain_notices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetManagementSettings">reset_management_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_contact_settings` <a name="put_contact_settings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putContactSettings"></a>

```python
def put_contact_settings(
  admin_contact: ClouddomainsRegistrationContactSettingsAdminContact,
  privacy: str,
  registrant_contact: ClouddomainsRegistrationContactSettingsRegistrantContact,
  technical_contact: ClouddomainsRegistrationContactSettingsTechnicalContact
) -> None
```

###### `admin_contact`<sup>Required</sup> <a name="admin_contact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putContactSettings.parameter.adminContact"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a>

admin_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#admin_contact ClouddomainsRegistration#admin_contact}

---

###### `privacy`<sup>Required</sup> <a name="privacy" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putContactSettings.parameter.privacy"></a>

- *Type:* str

Required. Privacy setting for the contacts associated with the Registration. Values are PUBLIC_CONTACT_DATA, PRIVATE_CONTACT_DATA, and REDACTED_CONTACT_DATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#privacy ClouddomainsRegistration#privacy}

---

###### `registrant_contact`<sup>Required</sup> <a name="registrant_contact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putContactSettings.parameter.registrantContact"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a>

registrant_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#registrant_contact ClouddomainsRegistration#registrant_contact}

---

###### `technical_contact`<sup>Required</sup> <a name="technical_contact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putContactSettings.parameter.technicalContact"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a>

technical_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#technical_contact ClouddomainsRegistration#technical_contact}

---

##### `put_dns_settings` <a name="put_dns_settings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putDnsSettings"></a>

```python
def put_dns_settings(
  custom_dns: ClouddomainsRegistrationDnsSettingsCustomDns = None,
  glue_records: typing.Union[IResolvable, typing.List[ClouddomainsRegistrationDnsSettingsGlueRecords]] = None
) -> None
```

###### `custom_dns`<sup>Optional</sup> <a name="custom_dns" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putDnsSettings.parameter.customDns"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a>

custom_dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#custom_dns ClouddomainsRegistration#custom_dns}

---

###### `glue_records`<sup>Optional</sup> <a name="glue_records" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putDnsSettings.parameter.glueRecords"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a>]]

glue_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#glue_records ClouddomainsRegistration#glue_records}

---

##### `put_management_settings` <a name="put_management_settings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putManagementSettings"></a>

```python
def put_management_settings(
  preferred_renewal_method: str = None,
  transfer_lock_state: str = None
) -> None
```

###### `preferred_renewal_method`<sup>Optional</sup> <a name="preferred_renewal_method" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putManagementSettings.parameter.preferredRenewalMethod"></a>

- *Type:* str

The desired renewal method for this Registration.

The actual renewalMethod is automatically updated to reflect this choice.
If unset or equal to RENEWAL_METHOD_UNSPECIFIED, the actual renewalMethod is treated as if it were set to AUTOMATIC_RENEWAL.
You cannot use RENEWAL_DISABLED during resource creation, and you can update the renewal status only when the Registration
resource has state ACTIVE or SUSPENDED.

When preferredRenewalMethod is set to AUTOMATIC_RENEWAL, the actual renewalMethod can be set to RENEWAL_DISABLED in case of
problems with the billing account or reported domain abuse. In such cases, check the issues field on the Registration. After
the problem is resolved, the renewalMethod is automatically updated to preferredRenewalMethod in a few hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#preferred_renewal_method ClouddomainsRegistration#preferred_renewal_method}

---

###### `transfer_lock_state`<sup>Optional</sup> <a name="transfer_lock_state" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putManagementSettings.parameter.transferLockState"></a>

- *Type:* str

Controls whether the domain can be transferred to another registrar. Values are UNLOCKED or LOCKED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#transfer_lock_state ClouddomainsRegistration#transfer_lock_state}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#create ClouddomainsRegistration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#delete ClouddomainsRegistration#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#update ClouddomainsRegistration#update}.

---

##### `put_yearly_price` <a name="put_yearly_price" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putYearlyPrice"></a>

```python
def put_yearly_price(
  currency_code: str = None,
  units: str = None
) -> None
```

###### `currency_code`<sup>Optional</sup> <a name="currency_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putYearlyPrice.parameter.currencyCode"></a>

- *Type:* str

The three-letter currency code defined in ISO 4217.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#currency_code ClouddomainsRegistration#currency_code}

---

###### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putYearlyPrice.parameter.units"></a>

- *Type:* str

The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#units ClouddomainsRegistration#units}

---

##### `reset_contact_notices` <a name="reset_contact_notices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetContactNotices"></a>

```python
def reset_contact_notices() -> None
```

##### `reset_dns_settings` <a name="reset_dns_settings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetDnsSettings"></a>

```python
def reset_dns_settings() -> None
```

##### `reset_domain_notices` <a name="reset_domain_notices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetDomainNotices"></a>

```python
def reset_domain_notices() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_management_settings` <a name="reset_management_settings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetManagementSettings"></a>

```python
def reset_management_settings() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ClouddomainsRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ClouddomainsRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ClouddomainsRegistration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ClouddomainsRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ClouddomainsRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactSettings">contact_settings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference">ClouddomainsRegistrationContactSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.dnsSettings">dns_settings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference">ClouddomainsRegistrationDnsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.issues">issues</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.managementSettings">management_settings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference">ClouddomainsRegistrationManagementSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.registerFailureReason">register_failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.supportedPrivacy">supported_privacy</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference">ClouddomainsRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.yearlyPrice">yearly_price</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference">ClouddomainsRegistrationYearlyPriceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactNoticesInput">contact_notices_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactSettingsInput">contact_settings_input</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.dnsSettingsInput">dns_settings_input</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainNoticesInput">domain_notices_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.managementSettingsInput">management_settings_input</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts">ClouddomainsRegistrationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.yearlyPriceInput">yearly_price_input</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactNotices">contact_notices</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainNotices">domain_notices</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `contact_settings`<sup>Required</sup> <a name="contact_settings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactSettings"></a>

```python
contact_settings: ClouddomainsRegistrationContactSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference">ClouddomainsRegistrationContactSettingsOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `dns_settings`<sup>Required</sup> <a name="dns_settings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.dnsSettings"></a>

```python
dns_settings: ClouddomainsRegistrationDnsSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference">ClouddomainsRegistrationDnsSettingsOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `issues`<sup>Required</sup> <a name="issues" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.issues"></a>

```python
issues: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `management_settings`<sup>Required</sup> <a name="management_settings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.managementSettings"></a>

```python
management_settings: ClouddomainsRegistrationManagementSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference">ClouddomainsRegistrationManagementSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `register_failure_reason`<sup>Required</sup> <a name="register_failure_reason" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.registerFailureReason"></a>

```python
register_failure_reason: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `supported_privacy`<sup>Required</sup> <a name="supported_privacy" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.supportedPrivacy"></a>

```python
supported_privacy: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.timeouts"></a>

```python
timeouts: ClouddomainsRegistrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference">ClouddomainsRegistrationTimeoutsOutputReference</a>

---

##### `yearly_price`<sup>Required</sup> <a name="yearly_price" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.yearlyPrice"></a>

```python
yearly_price: ClouddomainsRegistrationYearlyPriceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference">ClouddomainsRegistrationYearlyPriceOutputReference</a>

---

##### `contact_notices_input`<sup>Optional</sup> <a name="contact_notices_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactNoticesInput"></a>

```python
contact_notices_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `contact_settings_input`<sup>Optional</sup> <a name="contact_settings_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactSettingsInput"></a>

```python
contact_settings_input: ClouddomainsRegistrationContactSettings
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a>

---

##### `dns_settings_input`<sup>Optional</sup> <a name="dns_settings_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.dnsSettingsInput"></a>

```python
dns_settings_input: ClouddomainsRegistrationDnsSettings
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `domain_notices_input`<sup>Optional</sup> <a name="domain_notices_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainNoticesInput"></a>

```python
domain_notices_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `management_settings_input`<sup>Optional</sup> <a name="management_settings_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.managementSettingsInput"></a>

```python
management_settings_input: ClouddomainsRegistrationManagementSettings
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ClouddomainsRegistrationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts">ClouddomainsRegistrationTimeouts</a>]

---

##### `yearly_price_input`<sup>Optional</sup> <a name="yearly_price_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.yearlyPriceInput"></a>

```python
yearly_price_input: ClouddomainsRegistrationYearlyPrice
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a>

---

##### `contact_notices`<sup>Required</sup> <a name="contact_notices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactNotices"></a>

```python
contact_notices: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `domain_notices`<sup>Required</sup> <a name="domain_notices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainNotices"></a>

```python
domain_notices: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddomainsRegistrationConfig <a name="ClouddomainsRegistrationConfig" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  contact_settings: ClouddomainsRegistrationContactSettings,
  domain_name: str,
  location: str,
  yearly_price: ClouddomainsRegistrationYearlyPrice,
  contact_notices: typing.List[str] = None,
  dns_settings: ClouddomainsRegistrationDnsSettings = None,
  domain_notices: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  management_settings: ClouddomainsRegistrationManagementSettings = None,
  project: str = None,
  timeouts: ClouddomainsRegistrationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.contactSettings">contact_settings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a></code> | contact_settings block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.domainName">domain_name</a></code> | <code>str</code> | Required. The domain name. Unicode domain names must be expressed in Punycode format. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.yearlyPrice">yearly_price</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a></code> | yearly_price block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.contactNotices">contact_notices</a></code> | <code>typing.List[str]</code> | The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.dnsSettings">dns_settings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a></code> | dns_settings block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.domainNotices">domain_notices</a></code> | <code>typing.List[str]</code> | The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#id ClouddomainsRegistration#id}. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with the Registration. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.managementSettings">management_settings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a></code> | management_settings block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#project ClouddomainsRegistration#project}. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts">ClouddomainsRegistrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `contact_settings`<sup>Required</sup> <a name="contact_settings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.contactSettings"></a>

```python
contact_settings: ClouddomainsRegistrationContactSettings
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a>

contact_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#contact_settings ClouddomainsRegistration#contact_settings}

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Required. The domain name. Unicode domain names must be expressed in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#domain_name ClouddomainsRegistration#domain_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#location ClouddomainsRegistration#location}

---

##### `yearly_price`<sup>Required</sup> <a name="yearly_price" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.yearlyPrice"></a>

```python
yearly_price: ClouddomainsRegistrationYearlyPrice
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a>

yearly_price block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#yearly_price ClouddomainsRegistration#yearly_price}

---

##### `contact_notices`<sup>Optional</sup> <a name="contact_notices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.contactNotices"></a>

```python
contact_notices: typing.List[str]
```

- *Type:* typing.List[str]

The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#contact_notices ClouddomainsRegistration#contact_notices}

---

##### `dns_settings`<sup>Optional</sup> <a name="dns_settings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.dnsSettings"></a>

```python
dns_settings: ClouddomainsRegistrationDnsSettings
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a>

dns_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#dns_settings ClouddomainsRegistration#dns_settings}

---

##### `domain_notices`<sup>Optional</sup> <a name="domain_notices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.domainNotices"></a>

```python
domain_notices: typing.List[str]
```

- *Type:* typing.List[str]

The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#domain_notices ClouddomainsRegistration#domain_notices}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#id ClouddomainsRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of labels associated with the Registration.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#labels ClouddomainsRegistration#labels}

---

##### `management_settings`<sup>Optional</sup> <a name="management_settings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.managementSettings"></a>

```python
management_settings: ClouddomainsRegistrationManagementSettings
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a>

management_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#management_settings ClouddomainsRegistration#management_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#project ClouddomainsRegistration#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.timeouts"></a>

```python
timeouts: ClouddomainsRegistrationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts">ClouddomainsRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#timeouts ClouddomainsRegistration#timeouts}

---

### ClouddomainsRegistrationContactSettings <a name="ClouddomainsRegistrationContactSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationContactSettings(
  admin_contact: ClouddomainsRegistrationContactSettingsAdminContact,
  privacy: str,
  registrant_contact: ClouddomainsRegistrationContactSettingsRegistrantContact,
  technical_contact: ClouddomainsRegistrationContactSettingsTechnicalContact
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.adminContact">admin_contact</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a></code> | admin_contact block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.privacy">privacy</a></code> | <code>str</code> | Required. Privacy setting for the contacts associated with the Registration. Values are PUBLIC_CONTACT_DATA, PRIVATE_CONTACT_DATA, and REDACTED_CONTACT_DATA. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.registrantContact">registrant_contact</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a></code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.technicalContact">technical_contact</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a></code> | technical_contact block. |

---

##### `admin_contact`<sup>Required</sup> <a name="admin_contact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.adminContact"></a>

```python
admin_contact: ClouddomainsRegistrationContactSettingsAdminContact
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a>

admin_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#admin_contact ClouddomainsRegistration#admin_contact}

---

##### `privacy`<sup>Required</sup> <a name="privacy" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.privacy"></a>

```python
privacy: str
```

- *Type:* str

Required. Privacy setting for the contacts associated with the Registration. Values are PUBLIC_CONTACT_DATA, PRIVATE_CONTACT_DATA, and REDACTED_CONTACT_DATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#privacy ClouddomainsRegistration#privacy}

---

##### `registrant_contact`<sup>Required</sup> <a name="registrant_contact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.registrantContact"></a>

```python
registrant_contact: ClouddomainsRegistrationContactSettingsRegistrantContact
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a>

registrant_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#registrant_contact ClouddomainsRegistration#registrant_contact}

---

##### `technical_contact`<sup>Required</sup> <a name="technical_contact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.technicalContact"></a>

```python
technical_contact: ClouddomainsRegistrationContactSettingsTechnicalContact
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a>

technical_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#technical_contact ClouddomainsRegistration#technical_contact}

---

### ClouddomainsRegistrationContactSettingsAdminContact <a name="ClouddomainsRegistrationContactSettingsAdminContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact(
  email: str,
  phone_number: str,
  postal_address: ClouddomainsRegistrationContactSettingsAdminContactPostalAddress,
  fax_number: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.email">email</a></code> | <code>str</code> | Required. Email address of the contact. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.phoneNumber">phone_number</a></code> | <code>str</code> | Required. Phone number of the contact in international format. For example, "+1-800-555-0123". |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.postalAddress">postal_address</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a></code> | postal_address block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.faxNumber">fax_number</a></code> | <code>str</code> | Fax number of the contact in international format. For example, "+1-800-555-0123". |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.email"></a>

```python
email: str
```

- *Type:* str

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#email ClouddomainsRegistration#email}

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#phone_number ClouddomainsRegistration#phone_number}

---

##### `postal_address`<sup>Required</sup> <a name="postal_address" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.postalAddress"></a>

```python
postal_address: ClouddomainsRegistrationContactSettingsAdminContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#postal_address ClouddomainsRegistration#postal_address}

---

##### `fax_number`<sup>Optional</sup> <a name="fax_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.faxNumber"></a>

```python
fax_number: str
```

- *Type:* str

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#fax_number ClouddomainsRegistration#fax_number}

---

### ClouddomainsRegistrationContactSettingsAdminContactPostalAddress <a name="ClouddomainsRegistrationContactSettingsAdminContactPostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress(
  region_code: str,
  address_lines: typing.List[str] = None,
  administrative_area: str = None,
  locality: str = None,
  organization: str = None,
  postal_code: str = None,
  recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.regionCode">region_code</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.addressLines">address_lines</a></code> | <code>typing.List[str]</code> | Unstructured address lines describing the lower levels of an address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.administrativeArea">administrative_area</a></code> | <code>str</code> | Highest administrative subdivision which is used for postal addresses of a country or region. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.locality">locality</a></code> | <code>str</code> | Generally refers to the city/town portion of the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.organization">organization</a></code> | <code>str</code> | The name of the organization at the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.postalCode">postal_code</a></code> | <code>str</code> | Postal code of the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.recipients">recipients</a></code> | <code>typing.List[str]</code> | The recipient at the address. |

---

##### `region_code`<sup>Required</sup> <a name="region_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.regionCode"></a>

```python
region_code: str
```

- *Type:* str

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#region_code ClouddomainsRegistration#region_code}

---

##### `address_lines`<sup>Optional</sup> <a name="address_lines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.addressLines"></a>

```python
address_lines: typing.List[str]
```

- *Type:* typing.List[str]

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#address_lines ClouddomainsRegistration#address_lines}

---

##### `administrative_area`<sup>Optional</sup> <a name="administrative_area" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.administrativeArea"></a>

```python
administrative_area: str
```

- *Type:* str

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#administrative_area ClouddomainsRegistration#administrative_area}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.locality"></a>

```python
locality: str
```

- *Type:* str

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#locality ClouddomainsRegistration#locality}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.organization"></a>

```python
organization: str
```

- *Type:* str

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#organization ClouddomainsRegistration#organization}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#postal_code ClouddomainsRegistration#postal_code}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.recipients"></a>

```python
recipients: typing.List[str]
```

- *Type:* typing.List[str]

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#recipients ClouddomainsRegistration#recipients}

---

### ClouddomainsRegistrationContactSettingsRegistrantContact <a name="ClouddomainsRegistrationContactSettingsRegistrantContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact(
  email: str,
  phone_number: str,
  postal_address: ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress,
  fax_number: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.email">email</a></code> | <code>str</code> | Required. Email address of the contact. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.phoneNumber">phone_number</a></code> | <code>str</code> | Required. Phone number of the contact in international format. For example, "+1-800-555-0123". |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.postalAddress">postal_address</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a></code> | postal_address block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.faxNumber">fax_number</a></code> | <code>str</code> | Fax number of the contact in international format. For example, "+1-800-555-0123". |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.email"></a>

```python
email: str
```

- *Type:* str

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#email ClouddomainsRegistration#email}

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#phone_number ClouddomainsRegistration#phone_number}

---

##### `postal_address`<sup>Required</sup> <a name="postal_address" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.postalAddress"></a>

```python
postal_address: ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#postal_address ClouddomainsRegistration#postal_address}

---

##### `fax_number`<sup>Optional</sup> <a name="fax_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.faxNumber"></a>

```python
fax_number: str
```

- *Type:* str

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#fax_number ClouddomainsRegistration#fax_number}

---

### ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress <a name="ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress(
  region_code: str,
  address_lines: typing.List[str] = None,
  administrative_area: str = None,
  locality: str = None,
  organization: str = None,
  postal_code: str = None,
  recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.regionCode">region_code</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.addressLines">address_lines</a></code> | <code>typing.List[str]</code> | Unstructured address lines describing the lower levels of an address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.administrativeArea">administrative_area</a></code> | <code>str</code> | Highest administrative subdivision which is used for postal addresses of a country or region. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.locality">locality</a></code> | <code>str</code> | Generally refers to the city/town portion of the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.organization">organization</a></code> | <code>str</code> | The name of the organization at the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.postalCode">postal_code</a></code> | <code>str</code> | Postal code of the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.recipients">recipients</a></code> | <code>typing.List[str]</code> | The recipient at the address. |

---

##### `region_code`<sup>Required</sup> <a name="region_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.regionCode"></a>

```python
region_code: str
```

- *Type:* str

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#region_code ClouddomainsRegistration#region_code}

---

##### `address_lines`<sup>Optional</sup> <a name="address_lines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.addressLines"></a>

```python
address_lines: typing.List[str]
```

- *Type:* typing.List[str]

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#address_lines ClouddomainsRegistration#address_lines}

---

##### `administrative_area`<sup>Optional</sup> <a name="administrative_area" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.administrativeArea"></a>

```python
administrative_area: str
```

- *Type:* str

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#administrative_area ClouddomainsRegistration#administrative_area}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.locality"></a>

```python
locality: str
```

- *Type:* str

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#locality ClouddomainsRegistration#locality}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.organization"></a>

```python
organization: str
```

- *Type:* str

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#organization ClouddomainsRegistration#organization}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#postal_code ClouddomainsRegistration#postal_code}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.recipients"></a>

```python
recipients: typing.List[str]
```

- *Type:* typing.List[str]

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#recipients ClouddomainsRegistration#recipients}

---

### ClouddomainsRegistrationContactSettingsTechnicalContact <a name="ClouddomainsRegistrationContactSettingsTechnicalContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact(
  email: str,
  phone_number: str,
  postal_address: ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress,
  fax_number: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.email">email</a></code> | <code>str</code> | Required. Email address of the contact. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.phoneNumber">phone_number</a></code> | <code>str</code> | Required. Phone number of the contact in international format. For example, "+1-800-555-0123". |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.postalAddress">postal_address</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a></code> | postal_address block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.faxNumber">fax_number</a></code> | <code>str</code> | Fax number of the contact in international format. For example, "+1-800-555-0123". |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.email"></a>

```python
email: str
```

- *Type:* str

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#email ClouddomainsRegistration#email}

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#phone_number ClouddomainsRegistration#phone_number}

---

##### `postal_address`<sup>Required</sup> <a name="postal_address" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.postalAddress"></a>

```python
postal_address: ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#postal_address ClouddomainsRegistration#postal_address}

---

##### `fax_number`<sup>Optional</sup> <a name="fax_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.faxNumber"></a>

```python
fax_number: str
```

- *Type:* str

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#fax_number ClouddomainsRegistration#fax_number}

---

### ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress <a name="ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress(
  region_code: str,
  address_lines: typing.List[str] = None,
  administrative_area: str = None,
  locality: str = None,
  organization: str = None,
  postal_code: str = None,
  recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.regionCode">region_code</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.addressLines">address_lines</a></code> | <code>typing.List[str]</code> | Unstructured address lines describing the lower levels of an address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.administrativeArea">administrative_area</a></code> | <code>str</code> | Highest administrative subdivision which is used for postal addresses of a country or region. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.locality">locality</a></code> | <code>str</code> | Generally refers to the city/town portion of the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.organization">organization</a></code> | <code>str</code> | The name of the organization at the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.postalCode">postal_code</a></code> | <code>str</code> | Postal code of the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.recipients">recipients</a></code> | <code>typing.List[str]</code> | The recipient at the address. |

---

##### `region_code`<sup>Required</sup> <a name="region_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.regionCode"></a>

```python
region_code: str
```

- *Type:* str

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#region_code ClouddomainsRegistration#region_code}

---

##### `address_lines`<sup>Optional</sup> <a name="address_lines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.addressLines"></a>

```python
address_lines: typing.List[str]
```

- *Type:* typing.List[str]

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#address_lines ClouddomainsRegistration#address_lines}

---

##### `administrative_area`<sup>Optional</sup> <a name="administrative_area" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.administrativeArea"></a>

```python
administrative_area: str
```

- *Type:* str

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#administrative_area ClouddomainsRegistration#administrative_area}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.locality"></a>

```python
locality: str
```

- *Type:* str

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#locality ClouddomainsRegistration#locality}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.organization"></a>

```python
organization: str
```

- *Type:* str

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#organization ClouddomainsRegistration#organization}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#postal_code ClouddomainsRegistration#postal_code}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.recipients"></a>

```python
recipients: typing.List[str]
```

- *Type:* typing.List[str]

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#recipients ClouddomainsRegistration#recipients}

---

### ClouddomainsRegistrationDnsSettings <a name="ClouddomainsRegistrationDnsSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationDnsSettings(
  custom_dns: ClouddomainsRegistrationDnsSettingsCustomDns = None,
  glue_records: typing.Union[IResolvable, typing.List[ClouddomainsRegistrationDnsSettingsGlueRecords]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings.property.customDns">custom_dns</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a></code> | custom_dns block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings.property.glueRecords">glue_records</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a>]]</code> | glue_records block. |

---

##### `custom_dns`<sup>Optional</sup> <a name="custom_dns" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings.property.customDns"></a>

```python
custom_dns: ClouddomainsRegistrationDnsSettingsCustomDns
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a>

custom_dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#custom_dns ClouddomainsRegistration#custom_dns}

---

##### `glue_records`<sup>Optional</sup> <a name="glue_records" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings.property.glueRecords"></a>

```python
glue_records: typing.Union[IResolvable, typing.List[ClouddomainsRegistrationDnsSettingsGlueRecords]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a>]]

glue_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#glue_records ClouddomainsRegistration#glue_records}

---

### ClouddomainsRegistrationDnsSettingsCustomDns <a name="ClouddomainsRegistrationDnsSettingsCustomDns" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns(
  name_servers: typing.List[str],
  ds_records: typing.Union[IResolvable, typing.List[ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns.property.nameServers">name_servers</a></code> | <code>typing.List[str]</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns.property.dsRecords">ds_records</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>]]</code> | ds_records block. |

---

##### `name_servers`<sup>Required</sup> <a name="name_servers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns.property.nameServers"></a>

```python
name_servers: typing.List[str]
```

- *Type:* typing.List[str]

Required.

A list of name servers that store the DNS zone for this domain. Each name server is a domain
name, with Unicode domain names expressed in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#name_servers ClouddomainsRegistration#name_servers}

---

##### `ds_records`<sup>Optional</sup> <a name="ds_records" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns.property.dsRecords"></a>

```python
ds_records: typing.Union[IResolvable, typing.List[ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>]]

ds_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#ds_records ClouddomainsRegistration#ds_records}

---

### ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords <a name="ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords(
  algorithm: str = None,
  digest: str = None,
  digest_type: str = None,
  key_tag: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.algorithm">algorithm</a></code> | <code>str</code> | The algorithm used to generate the referenced DNSKEY. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digest">digest</a></code> | <code>str</code> | The digest generated from the referenced DNSKEY. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digestType">digest_type</a></code> | <code>str</code> | The hash function used to generate the digest of the referenced DNSKEY. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.keyTag">key_tag</a></code> | <code>typing.Union[int, float]</code> | The key tag of the record. Must be set in range 0 -- 65535. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

The algorithm used to generate the referenced DNSKEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#algorithm ClouddomainsRegistration#algorithm}

---

##### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digest"></a>

```python
digest: str
```

- *Type:* str

The digest generated from the referenced DNSKEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#digest ClouddomainsRegistration#digest}

---

##### `digest_type`<sup>Optional</sup> <a name="digest_type" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digestType"></a>

```python
digest_type: str
```

- *Type:* str

The hash function used to generate the digest of the referenced DNSKEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#digest_type ClouddomainsRegistration#digest_type}

---

##### `key_tag`<sup>Optional</sup> <a name="key_tag" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.keyTag"></a>

```python
key_tag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The key tag of the record. Must be set in range 0 -- 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#key_tag ClouddomainsRegistration#key_tag}

---

### ClouddomainsRegistrationDnsSettingsGlueRecords <a name="ClouddomainsRegistrationDnsSettingsGlueRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords(
  host_name: str,
  ipv4_addresses: typing.List[str] = None,
  ipv6_addresses: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.property.hostName">host_name</a></code> | <code>str</code> | Required. Domain name of the host in Punycode format. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv6Addresses">ipv6_addresses</a></code> | <code>typing.List[str]</code> | List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set. |

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Required. Domain name of the host in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#host_name ClouddomainsRegistration#host_name}

---

##### `ipv4_addresses`<sup>Optional</sup> <a name="ipv4_addresses" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#ipv4_addresses ClouddomainsRegistration#ipv4_addresses}

---

##### `ipv6_addresses`<sup>Optional</sup> <a name="ipv6_addresses" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv6Addresses"></a>

```python
ipv6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#ipv6_addresses ClouddomainsRegistration#ipv6_addresses}

---

### ClouddomainsRegistrationManagementSettings <a name="ClouddomainsRegistrationManagementSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationManagementSettings(
  preferred_renewal_method: str = None,
  transfer_lock_state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings.property.preferredRenewalMethod">preferred_renewal_method</a></code> | <code>str</code> | The desired renewal method for this Registration. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings.property.transferLockState">transfer_lock_state</a></code> | <code>str</code> | Controls whether the domain can be transferred to another registrar. Values are UNLOCKED or LOCKED. |

---

##### `preferred_renewal_method`<sup>Optional</sup> <a name="preferred_renewal_method" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings.property.preferredRenewalMethod"></a>

```python
preferred_renewal_method: str
```

- *Type:* str

The desired renewal method for this Registration.

The actual renewalMethod is automatically updated to reflect this choice.
If unset or equal to RENEWAL_METHOD_UNSPECIFIED, the actual renewalMethod is treated as if it were set to AUTOMATIC_RENEWAL.
You cannot use RENEWAL_DISABLED during resource creation, and you can update the renewal status only when the Registration
resource has state ACTIVE or SUSPENDED.

When preferredRenewalMethod is set to AUTOMATIC_RENEWAL, the actual renewalMethod can be set to RENEWAL_DISABLED in case of
problems with the billing account or reported domain abuse. In such cases, check the issues field on the Registration. After
the problem is resolved, the renewalMethod is automatically updated to preferredRenewalMethod in a few hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#preferred_renewal_method ClouddomainsRegistration#preferred_renewal_method}

---

##### `transfer_lock_state`<sup>Optional</sup> <a name="transfer_lock_state" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings.property.transferLockState"></a>

```python
transfer_lock_state: str
```

- *Type:* str

Controls whether the domain can be transferred to another registrar. Values are UNLOCKED or LOCKED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#transfer_lock_state ClouddomainsRegistration#transfer_lock_state}

---

### ClouddomainsRegistrationTimeouts <a name="ClouddomainsRegistrationTimeouts" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#create ClouddomainsRegistration#create}. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#delete ClouddomainsRegistration#delete}. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#update ClouddomainsRegistration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#create ClouddomainsRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#delete ClouddomainsRegistration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#update ClouddomainsRegistration#update}.

---

### ClouddomainsRegistrationYearlyPrice <a name="ClouddomainsRegistrationYearlyPrice" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice(
  currency_code: str = None,
  units: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice.property.currencyCode">currency_code</a></code> | <code>str</code> | The three-letter currency code defined in ISO 4217. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice.property.units">units</a></code> | <code>str</code> | The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar. |

---

##### `currency_code`<sup>Optional</sup> <a name="currency_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

The three-letter currency code defined in ISO 4217.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#currency_code ClouddomainsRegistration#currency_code}

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice.property.units"></a>

```python
units: str
```

- *Type:* str

The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#units ClouddomainsRegistration#units}

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddomainsRegistrationContactSettingsAdminContactOutputReference <a name="ClouddomainsRegistrationContactSettingsAdminContactOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress">put_postal_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.resetFaxNumber">reset_fax_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_postal_address` <a name="put_postal_address" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress"></a>

```python
def put_postal_address(
  region_code: str,
  address_lines: typing.List[str] = None,
  administrative_area: str = None,
  locality: str = None,
  organization: str = None,
  postal_code: str = None,
  recipients: typing.List[str] = None
) -> None
```

###### `region_code`<sup>Required</sup> <a name="region_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress.parameter.regionCode"></a>

- *Type:* str

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#region_code ClouddomainsRegistration#region_code}

---

###### `address_lines`<sup>Optional</sup> <a name="address_lines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress.parameter.addressLines"></a>

- *Type:* typing.List[str]

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#address_lines ClouddomainsRegistration#address_lines}

---

###### `administrative_area`<sup>Optional</sup> <a name="administrative_area" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress.parameter.administrativeArea"></a>

- *Type:* str

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#administrative_area ClouddomainsRegistration#administrative_area}

---

###### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress.parameter.locality"></a>

- *Type:* str

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#locality ClouddomainsRegistration#locality}

---

###### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress.parameter.organization"></a>

- *Type:* str

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#organization ClouddomainsRegistration#organization}

---

###### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress.parameter.postalCode"></a>

- *Type:* str

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#postal_code ClouddomainsRegistration#postal_code}

---

###### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress.parameter.recipients"></a>

- *Type:* typing.List[str]

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#recipients ClouddomainsRegistration#recipients}

---

##### `reset_fax_number` <a name="reset_fax_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.resetFaxNumber"></a>

```python
def reset_fax_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddress">postal_address</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference">ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumberInput">fax_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddressInput">postal_address_input</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumber">fax_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `postal_address`<sup>Required</sup> <a name="postal_address" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddress"></a>

```python
postal_address: ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference">ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference</a>

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `fax_number_input`<sup>Optional</sup> <a name="fax_number_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumberInput"></a>

```python
fax_number_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `postal_address_input`<sup>Optional</sup> <a name="postal_address_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddressInput"></a>

```python
postal_address_input: ClouddomainsRegistrationContactSettingsAdminContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `fax_number`<sup>Required</sup> <a name="fax_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumber"></a>

```python
fax_number: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.internalValue"></a>

```python
internal_value: ClouddomainsRegistrationContactSettingsAdminContact
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a>

---


### ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference <a name="ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAddressLines">reset_address_lines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAdministrativeArea">reset_administrative_area</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetRecipients">reset_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address_lines` <a name="reset_address_lines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAddressLines"></a>

```python
def reset_address_lines() -> None
```

##### `reset_administrative_area` <a name="reset_administrative_area" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAdministrativeArea"></a>

```python
def reset_administrative_area() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_recipients` <a name="reset_recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetRecipients"></a>

```python
def reset_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLinesInput">address_lines_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeAreaInput">administrative_area_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipientsInput">recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCodeInput">region_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLines">address_lines</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeArea">administrative_area</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipients">recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCode">region_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_lines_input`<sup>Optional</sup> <a name="address_lines_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLinesInput"></a>

```python
address_lines_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `administrative_area_input`<sup>Optional</sup> <a name="administrative_area_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeAreaInput"></a>

```python
administrative_area_input: str
```

- *Type:* str

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `recipients_input`<sup>Optional</sup> <a name="recipients_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipientsInput"></a>

```python
recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_code_input`<sup>Optional</sup> <a name="region_code_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCodeInput"></a>

```python
region_code_input: str
```

- *Type:* str

---

##### `address_lines`<sup>Required</sup> <a name="address_lines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLines"></a>

```python
address_lines: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `administrative_area`<sup>Required</sup> <a name="administrative_area" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeArea"></a>

```python
administrative_area: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipients"></a>

```python
recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_code`<sup>Required</sup> <a name="region_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCode"></a>

```python
region_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.internalValue"></a>

```python
internal_value: ClouddomainsRegistrationContactSettingsAdminContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

---


### ClouddomainsRegistrationContactSettingsOutputReference <a name="ClouddomainsRegistrationContactSettingsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putAdminContact">put_admin_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact">put_registrant_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact">put_technical_contact</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_admin_contact` <a name="put_admin_contact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putAdminContact"></a>

```python
def put_admin_contact(
  email: str,
  phone_number: str,
  postal_address: ClouddomainsRegistrationContactSettingsAdminContactPostalAddress,
  fax_number: str = None
) -> None
```

###### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putAdminContact.parameter.email"></a>

- *Type:* str

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#email ClouddomainsRegistration#email}

---

###### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putAdminContact.parameter.phoneNumber"></a>

- *Type:* str

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#phone_number ClouddomainsRegistration#phone_number}

---

###### `postal_address`<sup>Required</sup> <a name="postal_address" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putAdminContact.parameter.postalAddress"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#postal_address ClouddomainsRegistration#postal_address}

---

###### `fax_number`<sup>Optional</sup> <a name="fax_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putAdminContact.parameter.faxNumber"></a>

- *Type:* str

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#fax_number ClouddomainsRegistration#fax_number}

---

##### `put_registrant_contact` <a name="put_registrant_contact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact"></a>

```python
def put_registrant_contact(
  email: str,
  phone_number: str,
  postal_address: ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress,
  fax_number: str = None
) -> None
```

###### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact.parameter.email"></a>

- *Type:* str

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#email ClouddomainsRegistration#email}

---

###### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact.parameter.phoneNumber"></a>

- *Type:* str

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#phone_number ClouddomainsRegistration#phone_number}

---

###### `postal_address`<sup>Required</sup> <a name="postal_address" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact.parameter.postalAddress"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#postal_address ClouddomainsRegistration#postal_address}

---

###### `fax_number`<sup>Optional</sup> <a name="fax_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact.parameter.faxNumber"></a>

- *Type:* str

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#fax_number ClouddomainsRegistration#fax_number}

---

##### `put_technical_contact` <a name="put_technical_contact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact"></a>

```python
def put_technical_contact(
  email: str,
  phone_number: str,
  postal_address: ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress,
  fax_number: str = None
) -> None
```

###### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact.parameter.email"></a>

- *Type:* str

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#email ClouddomainsRegistration#email}

---

###### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact.parameter.phoneNumber"></a>

- *Type:* str

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#phone_number ClouddomainsRegistration#phone_number}

---

###### `postal_address`<sup>Required</sup> <a name="postal_address" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact.parameter.postalAddress"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#postal_address ClouddomainsRegistration#postal_address}

---

###### `fax_number`<sup>Optional</sup> <a name="fax_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact.parameter.faxNumber"></a>

- *Type:* str

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#fax_number ClouddomainsRegistration#fax_number}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.adminContact">admin_contact</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference">ClouddomainsRegistrationContactSettingsAdminContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.registrantContact">registrant_contact</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference">ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.technicalContact">technical_contact</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference">ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.adminContactInput">admin_contact_input</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.privacyInput">privacy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.registrantContactInput">registrant_contact_input</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.technicalContactInput">technical_contact_input</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.privacy">privacy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_contact`<sup>Required</sup> <a name="admin_contact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.adminContact"></a>

```python
admin_contact: ClouddomainsRegistrationContactSettingsAdminContactOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference">ClouddomainsRegistrationContactSettingsAdminContactOutputReference</a>

---

##### `registrant_contact`<sup>Required</sup> <a name="registrant_contact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.registrantContact"></a>

```python
registrant_contact: ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference">ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference</a>

---

##### `technical_contact`<sup>Required</sup> <a name="technical_contact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.technicalContact"></a>

```python
technical_contact: ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference">ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference</a>

---

##### `admin_contact_input`<sup>Optional</sup> <a name="admin_contact_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.adminContactInput"></a>

```python
admin_contact_input: ClouddomainsRegistrationContactSettingsAdminContact
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a>

---

##### `privacy_input`<sup>Optional</sup> <a name="privacy_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.privacyInput"></a>

```python
privacy_input: str
```

- *Type:* str

---

##### `registrant_contact_input`<sup>Optional</sup> <a name="registrant_contact_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.registrantContactInput"></a>

```python
registrant_contact_input: ClouddomainsRegistrationContactSettingsRegistrantContact
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a>

---

##### `technical_contact_input`<sup>Optional</sup> <a name="technical_contact_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.technicalContactInput"></a>

```python
technical_contact_input: ClouddomainsRegistrationContactSettingsTechnicalContact
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a>

---

##### `privacy`<sup>Required</sup> <a name="privacy" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.privacy"></a>

```python
privacy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ClouddomainsRegistrationContactSettings
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a>

---


### ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference <a name="ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress">put_postal_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resetFaxNumber">reset_fax_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_postal_address` <a name="put_postal_address" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress"></a>

```python
def put_postal_address(
  region_code: str,
  address_lines: typing.List[str] = None,
  administrative_area: str = None,
  locality: str = None,
  organization: str = None,
  postal_code: str = None,
  recipients: typing.List[str] = None
) -> None
```

###### `region_code`<sup>Required</sup> <a name="region_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress.parameter.regionCode"></a>

- *Type:* str

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#region_code ClouddomainsRegistration#region_code}

---

###### `address_lines`<sup>Optional</sup> <a name="address_lines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress.parameter.addressLines"></a>

- *Type:* typing.List[str]

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#address_lines ClouddomainsRegistration#address_lines}

---

###### `administrative_area`<sup>Optional</sup> <a name="administrative_area" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress.parameter.administrativeArea"></a>

- *Type:* str

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#administrative_area ClouddomainsRegistration#administrative_area}

---

###### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress.parameter.locality"></a>

- *Type:* str

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#locality ClouddomainsRegistration#locality}

---

###### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress.parameter.organization"></a>

- *Type:* str

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#organization ClouddomainsRegistration#organization}

---

###### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress.parameter.postalCode"></a>

- *Type:* str

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#postal_code ClouddomainsRegistration#postal_code}

---

###### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress.parameter.recipients"></a>

- *Type:* typing.List[str]

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#recipients ClouddomainsRegistration#recipients}

---

##### `reset_fax_number` <a name="reset_fax_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resetFaxNumber"></a>

```python
def reset_fax_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddress">postal_address</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumberInput">fax_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddressInput">postal_address_input</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumber">fax_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `postal_address`<sup>Required</sup> <a name="postal_address" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddress"></a>

```python
postal_address: ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference</a>

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `fax_number_input`<sup>Optional</sup> <a name="fax_number_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumberInput"></a>

```python
fax_number_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `postal_address_input`<sup>Optional</sup> <a name="postal_address_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddressInput"></a>

```python
postal_address_input: ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `fax_number`<sup>Required</sup> <a name="fax_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumber"></a>

```python
fax_number: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.internalValue"></a>

```python
internal_value: ClouddomainsRegistrationContactSettingsRegistrantContact
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a>

---


### ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference <a name="ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAddressLines">reset_address_lines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAdministrativeArea">reset_administrative_area</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetRecipients">reset_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address_lines` <a name="reset_address_lines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAddressLines"></a>

```python
def reset_address_lines() -> None
```

##### `reset_administrative_area` <a name="reset_administrative_area" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAdministrativeArea"></a>

```python
def reset_administrative_area() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_recipients` <a name="reset_recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetRecipients"></a>

```python
def reset_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLinesInput">address_lines_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeAreaInput">administrative_area_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipientsInput">recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCodeInput">region_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLines">address_lines</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeArea">administrative_area</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipients">recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCode">region_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_lines_input`<sup>Optional</sup> <a name="address_lines_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLinesInput"></a>

```python
address_lines_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `administrative_area_input`<sup>Optional</sup> <a name="administrative_area_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeAreaInput"></a>

```python
administrative_area_input: str
```

- *Type:* str

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `recipients_input`<sup>Optional</sup> <a name="recipients_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipientsInput"></a>

```python
recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_code_input`<sup>Optional</sup> <a name="region_code_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCodeInput"></a>

```python
region_code_input: str
```

- *Type:* str

---

##### `address_lines`<sup>Required</sup> <a name="address_lines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLines"></a>

```python
address_lines: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `administrative_area`<sup>Required</sup> <a name="administrative_area" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeArea"></a>

```python
administrative_area: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipients"></a>

```python
recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_code`<sup>Required</sup> <a name="region_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCode"></a>

```python
region_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.internalValue"></a>

```python
internal_value: ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

---


### ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference <a name="ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress">put_postal_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resetFaxNumber">reset_fax_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_postal_address` <a name="put_postal_address" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress"></a>

```python
def put_postal_address(
  region_code: str,
  address_lines: typing.List[str] = None,
  administrative_area: str = None,
  locality: str = None,
  organization: str = None,
  postal_code: str = None,
  recipients: typing.List[str] = None
) -> None
```

###### `region_code`<sup>Required</sup> <a name="region_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress.parameter.regionCode"></a>

- *Type:* str

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#region_code ClouddomainsRegistration#region_code}

---

###### `address_lines`<sup>Optional</sup> <a name="address_lines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress.parameter.addressLines"></a>

- *Type:* typing.List[str]

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#address_lines ClouddomainsRegistration#address_lines}

---

###### `administrative_area`<sup>Optional</sup> <a name="administrative_area" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress.parameter.administrativeArea"></a>

- *Type:* str

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#administrative_area ClouddomainsRegistration#administrative_area}

---

###### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress.parameter.locality"></a>

- *Type:* str

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#locality ClouddomainsRegistration#locality}

---

###### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress.parameter.organization"></a>

- *Type:* str

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#organization ClouddomainsRegistration#organization}

---

###### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress.parameter.postalCode"></a>

- *Type:* str

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#postal_code ClouddomainsRegistration#postal_code}

---

###### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress.parameter.recipients"></a>

- *Type:* typing.List[str]

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#recipients ClouddomainsRegistration#recipients}

---

##### `reset_fax_number` <a name="reset_fax_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resetFaxNumber"></a>

```python
def reset_fax_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddress">postal_address</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumberInput">fax_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddressInput">postal_address_input</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumber">fax_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `postal_address`<sup>Required</sup> <a name="postal_address" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddress"></a>

```python
postal_address: ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference</a>

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `fax_number_input`<sup>Optional</sup> <a name="fax_number_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumberInput"></a>

```python
fax_number_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `postal_address_input`<sup>Optional</sup> <a name="postal_address_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddressInput"></a>

```python
postal_address_input: ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `fax_number`<sup>Required</sup> <a name="fax_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumber"></a>

```python
fax_number: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.internalValue"></a>

```python
internal_value: ClouddomainsRegistrationContactSettingsTechnicalContact
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a>

---


### ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference <a name="ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAddressLines">reset_address_lines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAdministrativeArea">reset_administrative_area</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetRecipients">reset_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address_lines` <a name="reset_address_lines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAddressLines"></a>

```python
def reset_address_lines() -> None
```

##### `reset_administrative_area` <a name="reset_administrative_area" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAdministrativeArea"></a>

```python
def reset_administrative_area() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_recipients` <a name="reset_recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetRecipients"></a>

```python
def reset_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLinesInput">address_lines_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeAreaInput">administrative_area_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipientsInput">recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCodeInput">region_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLines">address_lines</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeArea">administrative_area</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipients">recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCode">region_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_lines_input`<sup>Optional</sup> <a name="address_lines_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLinesInput"></a>

```python
address_lines_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `administrative_area_input`<sup>Optional</sup> <a name="administrative_area_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeAreaInput"></a>

```python
administrative_area_input: str
```

- *Type:* str

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `recipients_input`<sup>Optional</sup> <a name="recipients_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipientsInput"></a>

```python
recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_code_input`<sup>Optional</sup> <a name="region_code_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCodeInput"></a>

```python
region_code_input: str
```

- *Type:* str

---

##### `address_lines`<sup>Required</sup> <a name="address_lines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLines"></a>

```python
address_lines: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `administrative_area`<sup>Required</sup> <a name="administrative_area" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeArea"></a>

```python
administrative_area: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipients"></a>

```python
recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_code`<sup>Required</sup> <a name="region_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCode"></a>

```python
region_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.internalValue"></a>

```python
internal_value: ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

---


### ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList <a name="ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>]]

---


### ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference <a name="ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigest">reset_digest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigestType">reset_digest_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetKeyTag">reset_key_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_digest` <a name="reset_digest" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigest"></a>

```python
def reset_digest() -> None
```

##### `reset_digest_type` <a name="reset_digest_type" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigestType"></a>

```python
def reset_digest_type() -> None
```

##### `reset_key_tag` <a name="reset_key_tag" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetKeyTag"></a>

```python
def reset_key_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestInput">digest_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestTypeInput">digest_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTagInput">key_tag_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digest">digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestType">digest_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTag">key_tag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `digest_input`<sup>Optional</sup> <a name="digest_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestInput"></a>

```python
digest_input: str
```

- *Type:* str

---

##### `digest_type_input`<sup>Optional</sup> <a name="digest_type_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestTypeInput"></a>

```python
digest_type_input: str
```

- *Type:* str

---

##### `key_tag_input`<sup>Optional</sup> <a name="key_tag_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTagInput"></a>

```python
key_tag_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digest"></a>

```python
digest: str
```

- *Type:* str

---

##### `digest_type`<sup>Required</sup> <a name="digest_type" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestType"></a>

```python
digest_type: str
```

- *Type:* str

---

##### `key_tag`<sup>Required</sup> <a name="key_tag" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTag"></a>

```python
key_tag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>]

---


### ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference <a name="ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.putDsRecords">put_ds_records</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resetDsRecords">reset_ds_records</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ds_records` <a name="put_ds_records" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.putDsRecords"></a>

```python
def put_ds_records(
  value: typing.Union[IResolvable, typing.List[ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.putDsRecords.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>]]

---

##### `reset_ds_records` <a name="reset_ds_records" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resetDsRecords"></a>

```python
def reset_ds_records() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecords">ds_records</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecordsInput">ds_records_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServersInput">name_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServers">name_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ds_records`<sup>Required</sup> <a name="ds_records" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecords"></a>

```python
ds_records: ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList</a>

---

##### `ds_records_input`<sup>Optional</sup> <a name="ds_records_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecordsInput"></a>

```python
ds_records_input: typing.Union[IResolvable, typing.List[ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>]]

---

##### `name_servers_input`<sup>Optional</sup> <a name="name_servers_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServersInput"></a>

```python
name_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_servers`<sup>Required</sup> <a name="name_servers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServers"></a>

```python
name_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.internalValue"></a>

```python
internal_value: ClouddomainsRegistrationDnsSettingsCustomDns
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a>

---


### ClouddomainsRegistrationDnsSettingsGlueRecordsList <a name="ClouddomainsRegistrationDnsSettingsGlueRecordsList" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ClouddomainsRegistrationDnsSettingsGlueRecords]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a>]]

---


### ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference <a name="ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv4Addresses">reset_ipv4_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv6Addresses">reset_ipv6_addresses</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ipv4_addresses` <a name="reset_ipv4_addresses" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv4Addresses"></a>

```python
def reset_ipv4_addresses() -> None
```

##### `reset_ipv6_addresses` <a name="reset_ipv6_addresses" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv6Addresses"></a>

```python
def reset_ipv6_addresses() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4AddressesInput">ipv4_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6AddressesInput">ipv6_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6Addresses">ipv6_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `ipv4_addresses_input`<sup>Optional</sup> <a name="ipv4_addresses_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4AddressesInput"></a>

```python
ipv4_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_addresses_input`<sup>Optional</sup> <a name="ipv6_addresses_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6AddressesInput"></a>

```python
ipv6_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `ipv4_addresses`<sup>Required</sup> <a name="ipv4_addresses" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_addresses`<sup>Required</sup> <a name="ipv6_addresses" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6Addresses"></a>

```python
ipv6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClouddomainsRegistrationDnsSettingsGlueRecords]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a>]

---


### ClouddomainsRegistrationDnsSettingsOutputReference <a name="ClouddomainsRegistrationDnsSettingsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns">put_custom_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putGlueRecords">put_glue_records</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resetCustomDns">reset_custom_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resetGlueRecords">reset_glue_records</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_dns` <a name="put_custom_dns" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns"></a>

```python
def put_custom_dns(
  name_servers: typing.List[str],
  ds_records: typing.Union[IResolvable, typing.List[ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords]] = None
) -> None
```

###### `name_servers`<sup>Required</sup> <a name="name_servers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns.parameter.nameServers"></a>

- *Type:* typing.List[str]

Required.

A list of name servers that store the DNS zone for this domain. Each name server is a domain
name, with Unicode domain names expressed in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#name_servers ClouddomainsRegistration#name_servers}

---

###### `ds_records`<sup>Optional</sup> <a name="ds_records" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns.parameter.dsRecords"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>]]

ds_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/clouddomains_registration#ds_records ClouddomainsRegistration#ds_records}

---

##### `put_glue_records` <a name="put_glue_records" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putGlueRecords"></a>

```python
def put_glue_records(
  value: typing.Union[IResolvable, typing.List[ClouddomainsRegistrationDnsSettingsGlueRecords]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putGlueRecords.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a>]]

---

##### `reset_custom_dns` <a name="reset_custom_dns" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resetCustomDns"></a>

```python
def reset_custom_dns() -> None
```

##### `reset_glue_records` <a name="reset_glue_records" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resetGlueRecords"></a>

```python
def reset_glue_records() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.customDns">custom_dns</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference">ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecords">glue_records</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList">ClouddomainsRegistrationDnsSettingsGlueRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.customDnsInput">custom_dns_input</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecordsInput">glue_records_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_dns`<sup>Required</sup> <a name="custom_dns" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.customDns"></a>

```python
custom_dns: ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference">ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference</a>

---

##### `glue_records`<sup>Required</sup> <a name="glue_records" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecords"></a>

```python
glue_records: ClouddomainsRegistrationDnsSettingsGlueRecordsList
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList">ClouddomainsRegistrationDnsSettingsGlueRecordsList</a>

---

##### `custom_dns_input`<sup>Optional</sup> <a name="custom_dns_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.customDnsInput"></a>

```python
custom_dns_input: ClouddomainsRegistrationDnsSettingsCustomDns
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a>

---

##### `glue_records_input`<sup>Optional</sup> <a name="glue_records_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecordsInput"></a>

```python
glue_records_input: typing.Union[IResolvable, typing.List[ClouddomainsRegistrationDnsSettingsGlueRecords]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ClouddomainsRegistrationDnsSettings
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a>

---


### ClouddomainsRegistrationManagementSettingsOutputReference <a name="ClouddomainsRegistrationManagementSettingsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resetPreferredRenewalMethod">reset_preferred_renewal_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resetTransferLockState">reset_transfer_lock_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_preferred_renewal_method` <a name="reset_preferred_renewal_method" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resetPreferredRenewalMethod"></a>

```python
def reset_preferred_renewal_method() -> None
```

##### `reset_transfer_lock_state` <a name="reset_transfer_lock_state" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resetTransferLockState"></a>

```python
def reset_transfer_lock_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.renewalMethod">renewal_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethodInput">preferred_renewal_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockStateInput">transfer_lock_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethod">preferred_renewal_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockState">transfer_lock_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `renewal_method`<sup>Required</sup> <a name="renewal_method" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.renewalMethod"></a>

```python
renewal_method: str
```

- *Type:* str

---

##### `preferred_renewal_method_input`<sup>Optional</sup> <a name="preferred_renewal_method_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethodInput"></a>

```python
preferred_renewal_method_input: str
```

- *Type:* str

---

##### `transfer_lock_state_input`<sup>Optional</sup> <a name="transfer_lock_state_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockStateInput"></a>

```python
transfer_lock_state_input: str
```

- *Type:* str

---

##### `preferred_renewal_method`<sup>Required</sup> <a name="preferred_renewal_method" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethod"></a>

```python
preferred_renewal_method: str
```

- *Type:* str

---

##### `transfer_lock_state`<sup>Required</sup> <a name="transfer_lock_state" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockState"></a>

```python
transfer_lock_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ClouddomainsRegistrationManagementSettings
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a>

---


### ClouddomainsRegistrationTimeoutsOutputReference <a name="ClouddomainsRegistrationTimeoutsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts">ClouddomainsRegistrationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClouddomainsRegistrationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts">ClouddomainsRegistrationTimeouts</a>]

---


### ClouddomainsRegistrationYearlyPriceOutputReference <a name="ClouddomainsRegistrationYearlyPriceOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddomains_registration

clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resetCurrencyCode">reset_currency_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resetUnits">reset_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_currency_code` <a name="reset_currency_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resetCurrencyCode"></a>

```python
def reset_currency_code() -> None
```

##### `reset_units` <a name="reset_units" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resetUnits"></a>

```python
def reset_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCodeInput">currency_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.unitsInput">units_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.units">units</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `currency_code_input`<sup>Optional</sup> <a name="currency_code_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCodeInput"></a>

```python
currency_code_input: str
```

- *Type:* str

---

##### `units_input`<sup>Optional</sup> <a name="units_input" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.unitsInput"></a>

```python
units_input: str
```

- *Type:* str

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.units"></a>

```python
units: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.internalValue"></a>

```python
internal_value: ClouddomainsRegistrationYearlyPrice
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a>

---



