# `apigeeInstance` Submodule <a name="`apigeeInstance` Submodule" id="@cdktf/provider-google.apigeeInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeInstance <a name="ApigeeInstance" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance google_apigee_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_instance

apigeeInstance.ApigeeInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  org_id: str,
  consumer_accept_list: typing.List[str] = None,
  description: str = None,
  disk_encryption_key_name: str = None,
  display_name: str = None,
  id: str = None,
  ip_range: str = None,
  peering_cidr_range: str = None,
  timeouts: ApigeeInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.location">location</a></code> | <code>str</code> | Required. Compute Engine location where the instance resides. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | Resource ID of the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.consumerAcceptList">consumer_accept_list</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.diskEncryptionKeyName">disk_encryption_key_name</a></code> | <code>str</code> | Customer Managed Encryption Key (CMEK) used for disk and volume encryption. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#id ApigeeInstance#id}. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.ipRange">ip_range</a></code> | <code>str</code> | IP range represents the customer-provided CIDR block of length 22 that will be used for the Apigee instance creation. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.peeringCidrRange">peering_cidr_range</a></code> | <code>str</code> | The size of the CIDR block range that will be reserved by the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.location"></a>

- *Type:* str

Required. Compute Engine location where the instance resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#location ApigeeInstance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.name"></a>

- *Type:* str

Resource ID of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#name ApigeeInstance#name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.orgId"></a>

- *Type:* str

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#org_id ApigeeInstance#org_id}

---

##### `consumer_accept_list`<sup>Optional</sup> <a name="consumer_accept_list" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.consumerAcceptList"></a>

- *Type:* typing.List[str]

Optional.

Customer accept list represents the list of projects (id/number) on customer
side that can privately connect to the service attachment. It is an optional field
which the customers can provide during the instance creation. By default, the customer
project associated with the Apigee organization will be included to the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#consumer_accept_list ApigeeInstance#consumer_accept_list}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.description"></a>

- *Type:* str

Description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#description ApigeeInstance#description}

---

##### `disk_encryption_key_name`<sup>Optional</sup> <a name="disk_encryption_key_name" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.diskEncryptionKeyName"></a>

- *Type:* str

Customer Managed Encryption Key (CMEK) used for disk and volume encryption.

Required for Apigee paid subscriptions only.
Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#disk_encryption_key_name ApigeeInstance#disk_encryption_key_name}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#display_name ApigeeInstance#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#id ApigeeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_range`<sup>Optional</sup> <a name="ip_range" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.ipRange"></a>

- *Type:* str

IP range represents the customer-provided CIDR block of length 22 that will be used for the Apigee instance creation.

This optional range, if provided, should be freely
available as part of larger named range the customer has allocated to the Service
Networking peering. If this is not provided, Apigee will automatically request for any
available /22 CIDR block from Service Networking. The customer should use this CIDR block
for configuring their firewall needs to allow traffic from Apigee.
Input format: "a.b.c.d/22"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#ip_range ApigeeInstance#ip_range}

---

##### `peering_cidr_range`<sup>Optional</sup> <a name="peering_cidr_range" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.peeringCidrRange"></a>

- *Type:* str

The size of the CIDR block range that will be reserved by the instance.

For valid values,
see [CidrRange](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances#CidrRange) on the documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#peering_cidr_range ApigeeInstance#peering_cidr_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#timeouts ApigeeInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetConsumerAcceptList">reset_consumer_accept_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetDiskEncryptionKeyName">reset_disk_encryption_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetIpRange">reset_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetPeeringCidrRange">reset_peering_cidr_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#create ApigeeInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#delete ApigeeInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#update ApigeeInstance#update}.

---

##### `reset_consumer_accept_list` <a name="reset_consumer_accept_list" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetConsumerAcceptList"></a>

```python
def reset_consumer_accept_list() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disk_encryption_key_name` <a name="reset_disk_encryption_key_name" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetDiskEncryptionKeyName"></a>

```python
def reset_disk_encryption_key_name() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_range` <a name="reset_ip_range" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetIpRange"></a>

```python
def reset_ip_range() -> None
```

##### `reset_peering_cidr_range` <a name="reset_peering_cidr_range" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetPeeringCidrRange"></a>

```python
def reset_peering_cidr_range() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigeeInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apigee_instance

apigeeInstance.ApigeeInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apigee_instance

apigeeInstance.ApigeeInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apigee_instance

apigeeInstance.ApigeeInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import apigee_instance

apigeeInstance.ApigeeInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigeeInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.serviceAttachment">service_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference">ApigeeInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.consumerAcceptListInput">consumer_accept_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.diskEncryptionKeyNameInput">disk_encryption_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.ipRangeInput">ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.peeringCidrRangeInput">peering_cidr_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.consumerAcceptList">consumer_accept_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.diskEncryptionKeyName">disk_encryption_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.ipRange">ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.peeringCidrRange">peering_cidr_range</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.serviceAttachment"></a>

```python
service_attachment: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.timeouts"></a>

```python
timeouts: ApigeeInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference">ApigeeInstanceTimeoutsOutputReference</a>

---

##### `consumer_accept_list_input`<sup>Optional</sup> <a name="consumer_accept_list_input" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.consumerAcceptListInput"></a>

```python
consumer_accept_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disk_encryption_key_name_input`<sup>Optional</sup> <a name="disk_encryption_key_name_input" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.diskEncryptionKeyNameInput"></a>

```python
disk_encryption_key_name_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_range_input`<sup>Optional</sup> <a name="ip_range_input" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.ipRangeInput"></a>

```python
ip_range_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `peering_cidr_range_input`<sup>Optional</sup> <a name="peering_cidr_range_input" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.peeringCidrRangeInput"></a>

```python
peering_cidr_range_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApigeeInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a>]

---

##### `consumer_accept_list`<sup>Required</sup> <a name="consumer_accept_list" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.consumerAcceptList"></a>

```python
consumer_accept_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disk_encryption_key_name`<sup>Required</sup> <a name="disk_encryption_key_name" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.diskEncryptionKeyName"></a>

```python
disk_encryption_key_name: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_range`<sup>Required</sup> <a name="ip_range" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `peering_cidr_range`<sup>Required</sup> <a name="peering_cidr_range" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.peeringCidrRange"></a>

```python
peering_cidr_range: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeInstanceConfig <a name="ApigeeInstanceConfig" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_instance

apigeeInstance.ApigeeInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  org_id: str,
  consumer_accept_list: typing.List[str] = None,
  description: str = None,
  disk_encryption_key_name: str = None,
  display_name: str = None,
  id: str = None,
  ip_range: str = None,
  peering_cidr_range: str = None,
  timeouts: ApigeeInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.location">location</a></code> | <code>str</code> | Required. Compute Engine location where the instance resides. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.name">name</a></code> | <code>str</code> | Resource ID of the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.consumerAcceptList">consumer_accept_list</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.description">description</a></code> | <code>str</code> | Description of the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.diskEncryptionKeyName">disk_encryption_key_name</a></code> | <code>str</code> | Customer Managed Encryption Key (CMEK) used for disk and volume encryption. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#id ApigeeInstance#id}. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.ipRange">ip_range</a></code> | <code>str</code> | IP range represents the customer-provided CIDR block of length 22 that will be used for the Apigee instance creation. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.peeringCidrRange">peering_cidr_range</a></code> | <code>str</code> | The size of the CIDR block range that will be reserved by the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Required. Compute Engine location where the instance resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#location ApigeeInstance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Resource ID of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#name ApigeeInstance#name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#org_id ApigeeInstance#org_id}

---

##### `consumer_accept_list`<sup>Optional</sup> <a name="consumer_accept_list" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.consumerAcceptList"></a>

```python
consumer_accept_list: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

Customer accept list represents the list of projects (id/number) on customer
side that can privately connect to the service attachment. It is an optional field
which the customers can provide during the instance creation. By default, the customer
project associated with the Apigee organization will be included to the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#consumer_accept_list ApigeeInstance#consumer_accept_list}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#description ApigeeInstance#description}

---

##### `disk_encryption_key_name`<sup>Optional</sup> <a name="disk_encryption_key_name" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.diskEncryptionKeyName"></a>

```python
disk_encryption_key_name: str
```

- *Type:* str

Customer Managed Encryption Key (CMEK) used for disk and volume encryption.

Required for Apigee paid subscriptions only.
Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#disk_encryption_key_name ApigeeInstance#disk_encryption_key_name}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#display_name ApigeeInstance#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#id ApigeeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_range`<sup>Optional</sup> <a name="ip_range" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

IP range represents the customer-provided CIDR block of length 22 that will be used for the Apigee instance creation.

This optional range, if provided, should be freely
available as part of larger named range the customer has allocated to the Service
Networking peering. If this is not provided, Apigee will automatically request for any
available /22 CIDR block from Service Networking. The customer should use this CIDR block
for configuring their firewall needs to allow traffic from Apigee.
Input format: "a.b.c.d/22"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#ip_range ApigeeInstance#ip_range}

---

##### `peering_cidr_range`<sup>Optional</sup> <a name="peering_cidr_range" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.peeringCidrRange"></a>

```python
peering_cidr_range: str
```

- *Type:* str

The size of the CIDR block range that will be reserved by the instance.

For valid values,
see [CidrRange](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances#CidrRange) on the documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#peering_cidr_range ApigeeInstance#peering_cidr_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.timeouts"></a>

```python
timeouts: ApigeeInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#timeouts ApigeeInstance#timeouts}

---

### ApigeeInstanceTimeouts <a name="ApigeeInstanceTimeouts" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_instance

apigeeInstance.ApigeeInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#create ApigeeInstance#create}. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#delete ApigeeInstance#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#update ApigeeInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#create ApigeeInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#delete ApigeeInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apigee_instance#update ApigeeInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeInstanceTimeoutsOutputReference <a name="ApigeeInstanceTimeoutsOutputReference" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_instance

apigeeInstance.ApigeeInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a>]

---



