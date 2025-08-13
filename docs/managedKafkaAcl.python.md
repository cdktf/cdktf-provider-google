# `managedKafkaAcl` Submodule <a name="`managedKafkaAcl` Submodule" id="@cdktf/provider-google.managedKafkaAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKafkaAcl <a name="ManagedKafkaAcl" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl google_managed_kafka_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer"></a>

```python
from cdktf_cdktf_provider_google import managed_kafka_acl

managedKafkaAcl.ManagedKafkaAcl(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  acl_entries: typing.Union[IResolvable, typing.List[ManagedKafkaAclAclEntries]],
  acl_id: str,
  cluster: str,
  location: str,
  id: str = None,
  project: str = None,
  timeouts: ManagedKafkaAclTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.aclEntries">acl_entries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries">ManagedKafkaAclAclEntries</a>]]</code> | acl_entries block. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.aclId">acl_id</a></code> | <code>str</code> | The ID to use for the acl, which will become the final component of the acl's name. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | The cluster name. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.location">location</a></code> | <code>str</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#id ManagedKafkaAcl#id}. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#project ManagedKafkaAcl#project}. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts">ManagedKafkaAclTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl_entries`<sup>Required</sup> <a name="acl_entries" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.aclEntries"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries">ManagedKafkaAclAclEntries</a>]]

acl_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#acl_entries ManagedKafkaAcl#acl_entries}

---

##### `acl_id`<sup>Required</sup> <a name="acl_id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.aclId"></a>

- *Type:* str

The ID to use for the acl, which will become the final component of the acl's name.

The structure of 'aclId' defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. 'aclId' is structured like one of the following:
For acls on the cluster: 'cluster'
For acls on a single resource within the cluster: 'topic/{resource_name}' 'consumerGroup/{resource_name}' 'transactionalId/{resource_name}'
For acls on all resources that match a prefix: 'topicPrefixed/{resource_name}' 'consumerGroupPrefixed/{resource_name}' 'transactionalIdPrefixed/{resource_name}'
For acls on all resources of a given type (i.e. the wildcard literal '*''): 'allTopics' (represents 'topic/*') 'allConsumerGroups' (represents 'consumerGroup/*') 'allTransactionalIds' (represents 'transactionalId/*').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#acl_id ManagedKafkaAcl#acl_id}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.cluster"></a>

- *Type:* str

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#cluster ManagedKafkaAcl#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.location"></a>

- *Type:* str

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#location ManagedKafkaAcl#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#id ManagedKafkaAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#project ManagedKafkaAcl#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts">ManagedKafkaAclTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#timeouts ManagedKafkaAcl#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.putAclEntries">put_acl_entries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_acl_entries` <a name="put_acl_entries" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.putAclEntries"></a>

```python
def put_acl_entries(
  value: typing.Union[IResolvable, typing.List[ManagedKafkaAclAclEntries]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.putAclEntries.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries">ManagedKafkaAclAclEntries</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#create ManagedKafkaAcl#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#delete ManagedKafkaAcl#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#update ManagedKafkaAcl#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ManagedKafkaAcl resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import managed_kafka_acl

managedKafkaAcl.ManagedKafkaAcl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import managed_kafka_acl

managedKafkaAcl.ManagedKafkaAcl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import managed_kafka_acl

managedKafkaAcl.ManagedKafkaAcl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import managed_kafka_acl

managedKafkaAcl.ManagedKafkaAcl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ManagedKafkaAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagedKafkaAcl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagedKafkaAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedKafkaAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.aclEntries">acl_entries</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList">ManagedKafkaAclAclEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.patternType">pattern_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference">ManagedKafkaAclTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.aclEntriesInput">acl_entries_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries">ManagedKafkaAclAclEntries</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.aclIdInput">acl_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts">ManagedKafkaAclTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.aclId">acl_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl_entries`<sup>Required</sup> <a name="acl_entries" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.aclEntries"></a>

```python
acl_entries: ManagedKafkaAclAclEntriesList
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList">ManagedKafkaAclAclEntriesList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pattern_type`<sup>Required</sup> <a name="pattern_type" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.patternType"></a>

```python
pattern_type: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.timeouts"></a>

```python
timeouts: ManagedKafkaAclTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference">ManagedKafkaAclTimeoutsOutputReference</a>

---

##### `acl_entries_input`<sup>Optional</sup> <a name="acl_entries_input" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.aclEntriesInput"></a>

```python
acl_entries_input: typing.Union[IResolvable, typing.List[ManagedKafkaAclAclEntries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries">ManagedKafkaAclAclEntries</a>]]

---

##### `acl_id_input`<sup>Optional</sup> <a name="acl_id_input" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.aclIdInput"></a>

```python
acl_id_input: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ManagedKafkaAclTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts">ManagedKafkaAclTimeouts</a>]

---

##### `acl_id`<sup>Required</sup> <a name="acl_id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.aclId"></a>

```python
acl_id: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKafkaAclAclEntries <a name="ManagedKafkaAclAclEntries" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries.Initializer"></a>

```python
from cdktf_cdktf_provider_google import managed_kafka_acl

managedKafkaAcl.ManagedKafkaAclAclEntries(
  operation: str,
  principal: str,
  host: str = None,
  permission_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries.property.operation">operation</a></code> | <code>str</code> | The operation type. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries.property.principal">principal</a></code> | <code>str</code> | The principal. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries.property.host">host</a></code> | <code>str</code> | The host. Must be set to "*" for Managed Service for Apache Kafka. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries.property.permissionType">permission_type</a></code> | <code>str</code> | The permission type. Accepted values are (case insensitive): ALLOW, DENY. |

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries.property.operation"></a>

```python
operation: str
```

- *Type:* str

The operation type.

Allowed values are (case insensitive): ALL, READ,
WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS,
ALTER_CONFIGS, and IDEMPOTENT_WRITE. See https://kafka.apache.org/documentation/#operations_resources_and_protocols
for valid combinations of resource_type and operation for different Kafka API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#operation ManagedKafkaAcl#operation}

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries.property.principal"></a>

```python
principal: str
```

- *Type:* str

The principal.

Specified as Google Cloud account, with the Kafka StandardAuthorizer prefix User:". For example: "User:test-kafka-client@test-project.iam.gserviceaccount.com". Can be the wildcard "User:*" to refer to all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#principal ManagedKafkaAcl#principal}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries.property.host"></a>

```python
host: str
```

- *Type:* str

The host. Must be set to "*" for Managed Service for Apache Kafka.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#host ManagedKafkaAcl#host}

---

##### `permission_type`<sup>Optional</sup> <a name="permission_type" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries.property.permissionType"></a>

```python
permission_type: str
```

- *Type:* str

The permission type. Accepted values are (case insensitive): ALLOW, DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#permission_type ManagedKafkaAcl#permission_type}

---

### ManagedKafkaAclConfig <a name="ManagedKafkaAclConfig" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import managed_kafka_acl

managedKafkaAcl.ManagedKafkaAclConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  acl_entries: typing.Union[IResolvable, typing.List[ManagedKafkaAclAclEntries]],
  acl_id: str,
  cluster: str,
  location: str,
  id: str = None,
  project: str = None,
  timeouts: ManagedKafkaAclTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.aclEntries">acl_entries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries">ManagedKafkaAclAclEntries</a>]]</code> | acl_entries block. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.aclId">acl_id</a></code> | <code>str</code> | The ID to use for the acl, which will become the final component of the acl's name. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.cluster">cluster</a></code> | <code>str</code> | The cluster name. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.location">location</a></code> | <code>str</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#id ManagedKafkaAcl#id}. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#project ManagedKafkaAcl#project}. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts">ManagedKafkaAclTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl_entries`<sup>Required</sup> <a name="acl_entries" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.aclEntries"></a>

```python
acl_entries: typing.Union[IResolvable, typing.List[ManagedKafkaAclAclEntries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries">ManagedKafkaAclAclEntries</a>]]

acl_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#acl_entries ManagedKafkaAcl#acl_entries}

---

##### `acl_id`<sup>Required</sup> <a name="acl_id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.aclId"></a>

```python
acl_id: str
```

- *Type:* str

The ID to use for the acl, which will become the final component of the acl's name.

The structure of 'aclId' defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. 'aclId' is structured like one of the following:
For acls on the cluster: 'cluster'
For acls on a single resource within the cluster: 'topic/{resource_name}' 'consumerGroup/{resource_name}' 'transactionalId/{resource_name}'
For acls on all resources that match a prefix: 'topicPrefixed/{resource_name}' 'consumerGroupPrefixed/{resource_name}' 'transactionalIdPrefixed/{resource_name}'
For acls on all resources of a given type (i.e. the wildcard literal '*''): 'allTopics' (represents 'topic/*') 'allConsumerGroups' (represents 'consumerGroup/*') 'allTransactionalIds' (represents 'transactionalId/*').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#acl_id ManagedKafkaAcl#acl_id}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#cluster ManagedKafkaAcl#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.location"></a>

```python
location: str
```

- *Type:* str

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#location ManagedKafkaAcl#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#id ManagedKafkaAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#project ManagedKafkaAcl#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.timeouts"></a>

```python
timeouts: ManagedKafkaAclTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts">ManagedKafkaAclTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#timeouts ManagedKafkaAcl#timeouts}

---

### ManagedKafkaAclTimeouts <a name="ManagedKafkaAclTimeouts" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import managed_kafka_acl

managedKafkaAcl.ManagedKafkaAclTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#create ManagedKafkaAcl#create}. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#delete ManagedKafkaAcl#delete}. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#update ManagedKafkaAcl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#create ManagedKafkaAcl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#delete ManagedKafkaAcl#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/managed_kafka_acl#update ManagedKafkaAcl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKafkaAclAclEntriesList <a name="ManagedKafkaAclAclEntriesList" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import managed_kafka_acl

managedKafkaAcl.ManagedKafkaAclAclEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedKafkaAclAclEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries">ManagedKafkaAclAclEntries</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ManagedKafkaAclAclEntries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries">ManagedKafkaAclAclEntries</a>]]

---


### ManagedKafkaAclAclEntriesOutputReference <a name="ManagedKafkaAclAclEntriesOutputReference" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import managed_kafka_acl

managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.resetPermissionType">reset_permission_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_permission_type` <a name="reset_permission_type" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.resetPermissionType"></a>

```python
def reset_permission_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.permissionTypeInput">permission_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.permissionType">permission_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries">ManagedKafkaAclAclEntries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `permission_type_input`<sup>Optional</sup> <a name="permission_type_input" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.permissionTypeInput"></a>

```python
permission_type_input: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `permission_type`<sup>Required</sup> <a name="permission_type" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.permissionType"></a>

```python
permission_type: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ManagedKafkaAclAclEntries]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries">ManagedKafkaAclAclEntries</a>]

---


### ManagedKafkaAclTimeoutsOutputReference <a name="ManagedKafkaAclTimeoutsOutputReference" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import managed_kafka_acl

managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts">ManagedKafkaAclTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ManagedKafkaAclTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts">ManagedKafkaAclTimeouts</a>]

---



