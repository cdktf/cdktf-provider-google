# `netappVolumeReplication` Submodule <a name="`netappVolumeReplication` Submodule" id="@cdktf/provider-google.netappVolumeReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolumeReplication <a name="NetappVolumeReplication" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication google_netapp_volume_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_replication

netappVolumeReplication.NetappVolumeReplication(
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
  replication_schedule: str,
  volume_name: str,
  delete_destination_volume: typing.Union[bool, IResolvable] = None,
  description: str = None,
  destination_volume_parameters: NetappVolumeReplicationDestinationVolumeParameters = None,
  force_stopping: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  replication_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: NetappVolumeReplicationTimeouts = None,
  wait_for_mirror: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.location">location</a></code> | <code>str</code> | Name of region for this resource. The resource needs to be created in the region of the destination volume. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the replication. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.replicationSchedule">replication_schedule</a></code> | <code>str</code> | Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"]. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.volumeName">volume_name</a></code> | <code>str</code> | The name of the existing source volume. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.deleteDestinationVolume">delete_destination_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A destination volume is created as part of replication creation. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.description">description</a></code> | <code>str</code> | An description of this resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.destinationVolumeParameters">destination_volume_parameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a></code> | destination_volume_parameters block. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.forceStopping">force_stopping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only replications with mirror_state=MIRRORED can be stopped. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#id NetappVolumeReplication#id}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#project NetappVolumeReplication#project}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.replicationEnabled">replication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to false to stop/break the mirror. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.waitForMirror">wait_for_mirror</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Replication resource state is independent of mirror_state. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.location"></a>

- *Type:* str

Name of region for this resource. The resource needs to be created in the region of the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#location NetappVolumeReplication#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.name"></a>

- *Type:* str

The name of the replication. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#name NetappVolumeReplication#name}

---

##### `replication_schedule`<sup>Required</sup> <a name="replication_schedule" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.replicationSchedule"></a>

- *Type:* str

Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#replication_schedule NetappVolumeReplication#replication_schedule}

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.volumeName"></a>

- *Type:* str

The name of the existing source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#volume_name NetappVolumeReplication#volume_name}

---

##### `delete_destination_volume`<sup>Optional</sup> <a name="delete_destination_volume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.deleteDestinationVolume"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A destination volume is created as part of replication creation.

The destination volume will not became
under Terraform management unless you import it manually. If you delete the replication, this volume
will remain.
Setting this parameter to true will delete the *current* destination volume when destroying the
replication. If you reversed the replication direction, this will be your former source volume!
For production use, it is recommended to keep this parameter false to avoid accidental volume
deletion. Handle with care. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#delete_destination_volume NetappVolumeReplication#delete_destination_volume}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.description"></a>

- *Type:* str

An description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#description NetappVolumeReplication#description}

---

##### `destination_volume_parameters`<sup>Optional</sup> <a name="destination_volume_parameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.destinationVolumeParameters"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a>

destination_volume_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#destination_volume_parameters NetappVolumeReplication#destination_volume_parameters}

---

##### `force_stopping`<sup>Optional</sup> <a name="force_stopping" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.forceStopping"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only replications with mirror_state=MIRRORED can be stopped.

A replication in mirror_state=TRANSFERRING
currently receives an update and stopping the update might be undesirable. Set this parameter to true
to stop anyway. All data transferred to the destination will be discarded and content of destination
volume will remain at the state of the last successful update. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#force_stopping NetappVolumeReplication#force_stopping}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#id NetappVolumeReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#labels NetappVolumeReplication#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#project NetappVolumeReplication#project}.

---

##### `replication_enabled`<sup>Optional</sup> <a name="replication_enabled" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.replicationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to false to stop/break the mirror.

Stopping the mirror makes the destination volume read-write
and act independently from the source volume.
Set to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes
done to the destination volume with the content of the source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#replication_enabled NetappVolumeReplication#replication_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#timeouts NetappVolumeReplication#timeouts}

---

##### `wait_for_mirror`<sup>Optional</sup> <a name="wait_for_mirror" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.waitForMirror"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Replication resource state is independent of mirror_state.

With enough data, it can take many hours
for mirror_state to reach MIRRORED. If you want Terraform to wait for the mirror to finish on
create/stop/resume operations, set this parameter to true. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#wait_for_mirror NetappVolumeReplication#wait_for_mirror}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putDestinationVolumeParameters">put_destination_volume_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDeleteDestinationVolume">reset_delete_destination_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDestinationVolumeParameters">reset_destination_volume_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetForceStopping">reset_force_stopping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetReplicationEnabled">reset_replication_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetWaitForMirror">reset_wait_for_mirror</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination_volume_parameters` <a name="put_destination_volume_parameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putDestinationVolumeParameters"></a>

```python
def put_destination_volume_parameters(
  storage_pool: str,
  description: str = None,
  share_name: str = None,
  tiering_policy: NetappVolumeReplicationDestinationVolumeParametersTieringPolicy = None,
  volume_id: str = None
) -> None
```

###### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putDestinationVolumeParameters.parameter.storagePool"></a>

- *Type:* str

Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#storage_pool NetappVolumeReplication#storage_pool}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putDestinationVolumeParameters.parameter.description"></a>

- *Type:* str

Description for the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#description NetappVolumeReplication#description}

---

###### `share_name`<sup>Optional</sup> <a name="share_name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putDestinationVolumeParameters.parameter.shareName"></a>

- *Type:* str

Share name for destination volume. If not specified, name of source volume's share name will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#share_name NetappVolumeReplication#share_name}

---

###### `tiering_policy`<sup>Optional</sup> <a name="tiering_policy" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putDestinationVolumeParameters.parameter.tieringPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicy">NetappVolumeReplicationDestinationVolumeParametersTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#tiering_policy NetappVolumeReplication#tiering_policy}

---

###### `volume_id`<sup>Optional</sup> <a name="volume_id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putDestinationVolumeParameters.parameter.volumeId"></a>

- *Type:* str

Name for the destination volume to be created.

If not specified, the name of the source volume will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#volume_id NetappVolumeReplication#volume_id}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#create NetappVolumeReplication#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#delete NetappVolumeReplication#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#update NetappVolumeReplication#update}.

---

##### `reset_delete_destination_volume` <a name="reset_delete_destination_volume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDeleteDestinationVolume"></a>

```python
def reset_delete_destination_volume() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_destination_volume_parameters` <a name="reset_destination_volume_parameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDestinationVolumeParameters"></a>

```python
def reset_destination_volume_parameters() -> None
```

##### `reset_force_stopping` <a name="reset_force_stopping" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetForceStopping"></a>

```python
def reset_force_stopping() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_replication_enabled` <a name="reset_replication_enabled" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetReplicationEnabled"></a>

```python
def reset_replication_enabled() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wait_for_mirror` <a name="reset_wait_for_mirror" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetWaitForMirror"></a>

```python
def reset_wait_for_mirror() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetappVolumeReplication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_replication

netappVolumeReplication.NetappVolumeReplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_replication

netappVolumeReplication.NetappVolumeReplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_replication

netappVolumeReplication.NetappVolumeReplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_replication

netappVolumeReplication.NetappVolumeReplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetappVolumeReplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetappVolumeReplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetappVolumeReplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetappVolumeReplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolume">destination_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolumeParameters">destination_volume_parameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference">NetappVolumeReplicationDestinationVolumeParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.healthy">healthy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.hybridPeeringDetails">hybrid_peering_details</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList">NetappVolumeReplicationHybridPeeringDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.hybridReplicationType">hybrid_replication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.mirrorState">mirror_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.sourceVolume">source_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.stateDetails">state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference">NetappVolumeReplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.transferStats">transfer_stats</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList">NetappVolumeReplicationTransferStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.deleteDestinationVolumeInput">delete_destination_volume_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolumeParametersInput">destination_volume_parameters_input</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forceStoppingInput">force_stopping_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationEnabledInput">replication_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationScheduleInput">replication_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.volumeNameInput">volume_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.waitForMirrorInput">wait_for_mirror_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.deleteDestinationVolume">delete_destination_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forceStopping">force_stopping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationEnabled">replication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationSchedule">replication_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.volumeName">volume_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.waitForMirror">wait_for_mirror</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `destination_volume`<sup>Required</sup> <a name="destination_volume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolume"></a>

```python
destination_volume: str
```

- *Type:* str

---

##### `destination_volume_parameters`<sup>Required</sup> <a name="destination_volume_parameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolumeParameters"></a>

```python
destination_volume_parameters: NetappVolumeReplicationDestinationVolumeParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference">NetappVolumeReplicationDestinationVolumeParametersOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.healthy"></a>

```python
healthy: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `hybrid_peering_details`<sup>Required</sup> <a name="hybrid_peering_details" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.hybridPeeringDetails"></a>

```python
hybrid_peering_details: NetappVolumeReplicationHybridPeeringDetailsList
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList">NetappVolumeReplicationHybridPeeringDetailsList</a>

---

##### `hybrid_replication_type`<sup>Required</sup> <a name="hybrid_replication_type" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.hybridReplicationType"></a>

```python
hybrid_replication_type: str
```

- *Type:* str

---

##### `mirror_state`<sup>Required</sup> <a name="mirror_state" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.mirrorState"></a>

```python
mirror_state: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `source_volume`<sup>Required</sup> <a name="source_volume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.sourceVolume"></a>

```python
source_volume: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_details`<sup>Required</sup> <a name="state_details" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.stateDetails"></a>

```python
state_details: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.timeouts"></a>

```python
timeouts: NetappVolumeReplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference">NetappVolumeReplicationTimeoutsOutputReference</a>

---

##### `transfer_stats`<sup>Required</sup> <a name="transfer_stats" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.transferStats"></a>

```python
transfer_stats: NetappVolumeReplicationTransferStatsList
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList">NetappVolumeReplicationTransferStatsList</a>

---

##### `delete_destination_volume_input`<sup>Optional</sup> <a name="delete_destination_volume_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.deleteDestinationVolumeInput"></a>

```python
delete_destination_volume_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_volume_parameters_input`<sup>Optional</sup> <a name="destination_volume_parameters_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolumeParametersInput"></a>

```python
destination_volume_parameters_input: NetappVolumeReplicationDestinationVolumeParameters
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a>

---

##### `force_stopping_input`<sup>Optional</sup> <a name="force_stopping_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forceStoppingInput"></a>

```python
force_stopping_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `replication_enabled_input`<sup>Optional</sup> <a name="replication_enabled_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationEnabledInput"></a>

```python
replication_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replication_schedule_input`<sup>Optional</sup> <a name="replication_schedule_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationScheduleInput"></a>

```python
replication_schedule_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetappVolumeReplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a>]

---

##### `volume_name_input`<sup>Optional</sup> <a name="volume_name_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.volumeNameInput"></a>

```python
volume_name_input: str
```

- *Type:* str

---

##### `wait_for_mirror_input`<sup>Optional</sup> <a name="wait_for_mirror_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.waitForMirrorInput"></a>

```python
wait_for_mirror_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_destination_volume`<sup>Required</sup> <a name="delete_destination_volume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.deleteDestinationVolume"></a>

```python
delete_destination_volume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `force_stopping`<sup>Required</sup> <a name="force_stopping" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forceStopping"></a>

```python
force_stopping: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `replication_enabled`<sup>Required</sup> <a name="replication_enabled" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationEnabled"></a>

```python
replication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replication_schedule`<sup>Required</sup> <a name="replication_schedule" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationSchedule"></a>

```python
replication_schedule: str
```

- *Type:* str

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

---

##### `wait_for_mirror`<sup>Required</sup> <a name="wait_for_mirror" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.waitForMirror"></a>

```python
wait_for_mirror: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeReplicationConfig <a name="NetappVolumeReplicationConfig" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_replication

netappVolumeReplication.NetappVolumeReplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  replication_schedule: str,
  volume_name: str,
  delete_destination_volume: typing.Union[bool, IResolvable] = None,
  description: str = None,
  destination_volume_parameters: NetappVolumeReplicationDestinationVolumeParameters = None,
  force_stopping: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  replication_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: NetappVolumeReplicationTimeouts = None,
  wait_for_mirror: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.location">location</a></code> | <code>str</code> | Name of region for this resource. The resource needs to be created in the region of the destination volume. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.name">name</a></code> | <code>str</code> | The name of the replication. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.replicationSchedule">replication_schedule</a></code> | <code>str</code> | Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"]. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.volumeName">volume_name</a></code> | <code>str</code> | The name of the existing source volume. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.deleteDestinationVolume">delete_destination_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A destination volume is created as part of replication creation. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.description">description</a></code> | <code>str</code> | An description of this resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.destinationVolumeParameters">destination_volume_parameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a></code> | destination_volume_parameters block. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.forceStopping">force_stopping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only replications with mirror_state=MIRRORED can be stopped. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#id NetappVolumeReplication#id}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#project NetappVolumeReplication#project}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.replicationEnabled">replication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to false to stop/break the mirror. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.waitForMirror">wait_for_mirror</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Replication resource state is independent of mirror_state. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Name of region for this resource. The resource needs to be created in the region of the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#location NetappVolumeReplication#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the replication. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#name NetappVolumeReplication#name}

---

##### `replication_schedule`<sup>Required</sup> <a name="replication_schedule" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.replicationSchedule"></a>

```python
replication_schedule: str
```

- *Type:* str

Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#replication_schedule NetappVolumeReplication#replication_schedule}

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

The name of the existing source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#volume_name NetappVolumeReplication#volume_name}

---

##### `delete_destination_volume`<sup>Optional</sup> <a name="delete_destination_volume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.deleteDestinationVolume"></a>

```python
delete_destination_volume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A destination volume is created as part of replication creation.

The destination volume will not became
under Terraform management unless you import it manually. If you delete the replication, this volume
will remain.
Setting this parameter to true will delete the *current* destination volume when destroying the
replication. If you reversed the replication direction, this will be your former source volume!
For production use, it is recommended to keep this parameter false to avoid accidental volume
deletion. Handle with care. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#delete_destination_volume NetappVolumeReplication#delete_destination_volume}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#description NetappVolumeReplication#description}

---

##### `destination_volume_parameters`<sup>Optional</sup> <a name="destination_volume_parameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.destinationVolumeParameters"></a>

```python
destination_volume_parameters: NetappVolumeReplicationDestinationVolumeParameters
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a>

destination_volume_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#destination_volume_parameters NetappVolumeReplication#destination_volume_parameters}

---

##### `force_stopping`<sup>Optional</sup> <a name="force_stopping" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.forceStopping"></a>

```python
force_stopping: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only replications with mirror_state=MIRRORED can be stopped.

A replication in mirror_state=TRANSFERRING
currently receives an update and stopping the update might be undesirable. Set this parameter to true
to stop anyway. All data transferred to the destination will be discarded and content of destination
volume will remain at the state of the last successful update. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#force_stopping NetappVolumeReplication#force_stopping}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#id NetappVolumeReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#labels NetappVolumeReplication#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#project NetappVolumeReplication#project}.

---

##### `replication_enabled`<sup>Optional</sup> <a name="replication_enabled" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.replicationEnabled"></a>

```python
replication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to false to stop/break the mirror.

Stopping the mirror makes the destination volume read-write
and act independently from the source volume.
Set to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes
done to the destination volume with the content of the source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#replication_enabled NetappVolumeReplication#replication_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.timeouts"></a>

```python
timeouts: NetappVolumeReplicationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#timeouts NetappVolumeReplication#timeouts}

---

##### `wait_for_mirror`<sup>Optional</sup> <a name="wait_for_mirror" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.waitForMirror"></a>

```python
wait_for_mirror: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Replication resource state is independent of mirror_state.

With enough data, it can take many hours
for mirror_state to reach MIRRORED. If you want Terraform to wait for the mirror to finish on
create/stop/resume operations, set this parameter to true. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#wait_for_mirror NetappVolumeReplication#wait_for_mirror}

---

### NetappVolumeReplicationDestinationVolumeParameters <a name="NetappVolumeReplicationDestinationVolumeParameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_replication

netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters(
  storage_pool: str,
  description: str = None,
  share_name: str = None,
  tiering_policy: NetappVolumeReplicationDestinationVolumeParametersTieringPolicy = None,
  volume_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.storagePool">storage_pool</a></code> | <code>str</code> | Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.description">description</a></code> | <code>str</code> | Description for the destination volume. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.shareName">share_name</a></code> | <code>str</code> | Share name for destination volume. If not specified, name of source volume's share name will be used. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.tieringPolicy">tiering_policy</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicy">NetappVolumeReplicationDestinationVolumeParametersTieringPolicy</a></code> | tiering_policy block. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.volumeId">volume_id</a></code> | <code>str</code> | Name for the destination volume to be created. |

---

##### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.storagePool"></a>

```python
storage_pool: str
```

- *Type:* str

Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#storage_pool NetappVolumeReplication#storage_pool}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.description"></a>

```python
description: str
```

- *Type:* str

Description for the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#description NetappVolumeReplication#description}

---

##### `share_name`<sup>Optional</sup> <a name="share_name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

Share name for destination volume. If not specified, name of source volume's share name will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#share_name NetappVolumeReplication#share_name}

---

##### `tiering_policy`<sup>Optional</sup> <a name="tiering_policy" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.tieringPolicy"></a>

```python
tiering_policy: NetappVolumeReplicationDestinationVolumeParametersTieringPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicy">NetappVolumeReplicationDestinationVolumeParametersTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#tiering_policy NetappVolumeReplication#tiering_policy}

---

##### `volume_id`<sup>Optional</sup> <a name="volume_id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

Name for the destination volume to be created.

If not specified, the name of the source volume will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#volume_id NetappVolumeReplication#volume_id}

---

### NetappVolumeReplicationDestinationVolumeParametersTieringPolicy <a name="NetappVolumeReplicationDestinationVolumeParametersTieringPolicy" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_replication

netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicy(
  cooling_threshold_days: typing.Union[int, float] = None,
  tier_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicy.property.coolingThresholdDays">cooling_threshold_days</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicy.property.tierAction">tier_action</a></code> | <code>str</code> | Optional. |

---

##### `cooling_threshold_days`<sup>Optional</sup> <a name="cooling_threshold_days" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicy.property.coolingThresholdDays"></a>

```python
cooling_threshold_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 2-183.
Default is 31.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#cooling_threshold_days NetappVolumeReplication#cooling_threshold_days}

---

##### `tier_action`<sup>Optional</sup> <a name="tier_action" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicy.property.tierAction"></a>

```python
tier_action: str
```

- *Type:* str

Optional.

Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED. Default value: "PAUSED" Possible values: ["ENABLED", "PAUSED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#tier_action NetappVolumeReplication#tier_action}

---

### NetappVolumeReplicationHybridPeeringDetails <a name="NetappVolumeReplicationHybridPeeringDetails" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_replication

netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetails()
```


### NetappVolumeReplicationTimeouts <a name="NetappVolumeReplicationTimeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_replication

netappVolumeReplication.NetappVolumeReplicationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#create NetappVolumeReplication#create}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#delete NetappVolumeReplication#delete}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#update NetappVolumeReplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#create NetappVolumeReplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#delete NetappVolumeReplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#update NetappVolumeReplication#update}.

---

### NetappVolumeReplicationTransferStats <a name="NetappVolumeReplicationTransferStats" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStats.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_replication

netappVolumeReplication.NetappVolumeReplicationTransferStats()
```


## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeReplicationDestinationVolumeParametersOutputReference <a name="NetappVolumeReplicationDestinationVolumeParametersOutputReference" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_replication

netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.putTieringPolicy">put_tiering_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetShareName">reset_share_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetTieringPolicy">reset_tiering_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetVolumeId">reset_volume_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tiering_policy` <a name="put_tiering_policy" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.putTieringPolicy"></a>

```python
def put_tiering_policy(
  cooling_threshold_days: typing.Union[int, float] = None,
  tier_action: str = None
) -> None
```

###### `cooling_threshold_days`<sup>Optional</sup> <a name="cooling_threshold_days" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.putTieringPolicy.parameter.coolingThresholdDays"></a>

- *Type:* typing.Union[int, float]

Optional.

Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 2-183.
Default is 31.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#cooling_threshold_days NetappVolumeReplication#cooling_threshold_days}

---

###### `tier_action`<sup>Optional</sup> <a name="tier_action" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.putTieringPolicy.parameter.tierAction"></a>

- *Type:* str

Optional.

Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED. Default value: "PAUSED" Possible values: ["ENABLED", "PAUSED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/netapp_volume_replication#tier_action NetappVolumeReplication#tier_action}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_share_name` <a name="reset_share_name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetShareName"></a>

```python
def reset_share_name() -> None
```

##### `reset_tiering_policy` <a name="reset_tiering_policy" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetTieringPolicy"></a>

```python
def reset_tiering_policy() -> None
```

##### `reset_volume_id` <a name="reset_volume_id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetVolumeId"></a>

```python
def reset_volume_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.tieringPolicy">tiering_policy</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference">NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareNameInput">share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePoolInput">storage_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.tieringPolicyInput">tiering_policy_input</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicy">NetappVolumeReplicationDestinationVolumeParametersTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareName">share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePool">storage_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tiering_policy`<sup>Required</sup> <a name="tiering_policy" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.tieringPolicy"></a>

```python
tiering_policy: NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference">NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `share_name_input`<sup>Optional</sup> <a name="share_name_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareNameInput"></a>

```python
share_name_input: str
```

- *Type:* str

---

##### `storage_pool_input`<sup>Optional</sup> <a name="storage_pool_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePoolInput"></a>

```python
storage_pool_input: str
```

- *Type:* str

---

##### `tiering_policy_input`<sup>Optional</sup> <a name="tiering_policy_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.tieringPolicyInput"></a>

```python
tiering_policy_input: NetappVolumeReplicationDestinationVolumeParametersTieringPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicy">NetappVolumeReplicationDestinationVolumeParametersTieringPolicy</a>

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

---

##### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePool"></a>

```python
storage_pool: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeReplicationDestinationVolumeParameters
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a>

---


### NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference <a name="NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_replication

netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.resetCoolingThresholdDays">reset_cooling_threshold_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.resetTierAction">reset_tier_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cooling_threshold_days` <a name="reset_cooling_threshold_days" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.resetCoolingThresholdDays"></a>

```python
def reset_cooling_threshold_days() -> None
```

##### `reset_tier_action` <a name="reset_tier_action" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.resetTierAction"></a>

```python
def reset_tier_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.property.coolingThresholdDaysInput">cooling_threshold_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.property.tierActionInput">tier_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.property.coolingThresholdDays">cooling_threshold_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.property.tierAction">tier_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicy">NetappVolumeReplicationDestinationVolumeParametersTieringPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cooling_threshold_days_input`<sup>Optional</sup> <a name="cooling_threshold_days_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.property.coolingThresholdDaysInput"></a>

```python
cooling_threshold_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_action_input`<sup>Optional</sup> <a name="tier_action_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.property.tierActionInput"></a>

```python
tier_action_input: str
```

- *Type:* str

---

##### `cooling_threshold_days`<sup>Required</sup> <a name="cooling_threshold_days" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.property.coolingThresholdDays"></a>

```python
cooling_threshold_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_action`<sup>Required</sup> <a name="tier_action" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.property.tierAction"></a>

```python
tier_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeReplicationDestinationVolumeParametersTieringPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersTieringPolicy">NetappVolumeReplicationDestinationVolumeParametersTieringPolicy</a>

---


### NetappVolumeReplicationHybridPeeringDetailsList <a name="NetappVolumeReplicationHybridPeeringDetailsList" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_replication

netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetappVolumeReplicationHybridPeeringDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetappVolumeReplicationHybridPeeringDetailsOutputReference <a name="NetappVolumeReplicationHybridPeeringDetailsOutputReference" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_replication

netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.command">command</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.commandExpiryTime">command_expiry_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.passphrase">passphrase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.peerClusterName">peer_cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.peerSvmName">peer_svm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.peerVolumeName">peer_volume_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.subnetIp">subnet_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetails">NetappVolumeReplicationHybridPeeringDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.command"></a>

```python
command: str
```

- *Type:* str

---

##### `command_expiry_time`<sup>Required</sup> <a name="command_expiry_time" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.commandExpiryTime"></a>

```python
command_expiry_time: str
```

- *Type:* str

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.passphrase"></a>

```python
passphrase: str
```

- *Type:* str

---

##### `peer_cluster_name`<sup>Required</sup> <a name="peer_cluster_name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.peerClusterName"></a>

```python
peer_cluster_name: str
```

- *Type:* str

---

##### `peer_svm_name`<sup>Required</sup> <a name="peer_svm_name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.peerSvmName"></a>

```python
peer_svm_name: str
```

- *Type:* str

---

##### `peer_volume_name`<sup>Required</sup> <a name="peer_volume_name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.peerVolumeName"></a>

```python
peer_volume_name: str
```

- *Type:* str

---

##### `subnet_ip`<sup>Required</sup> <a name="subnet_ip" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.subnetIp"></a>

```python
subnet_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetailsOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeReplicationHybridPeeringDetails
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationHybridPeeringDetails">NetappVolumeReplicationHybridPeeringDetails</a>

---


### NetappVolumeReplicationTimeoutsOutputReference <a name="NetappVolumeReplicationTimeoutsOutputReference" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_replication

netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetappVolumeReplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a>]

---


### NetappVolumeReplicationTransferStatsList <a name="NetappVolumeReplicationTransferStatsList" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_replication

netappVolumeReplication.NetappVolumeReplicationTransferStatsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetappVolumeReplicationTransferStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetappVolumeReplicationTransferStatsOutputReference <a name="NetappVolumeReplicationTransferStatsOutputReference" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_replication

netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lagDuration">lag_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferBytes">last_transfer_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferDuration">last_transfer_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferEndTime">last_transfer_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferError">last_transfer_error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.totalTransferDuration">total_transfer_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.transferBytes">transfer_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStats">NetappVolumeReplicationTransferStats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lag_duration`<sup>Required</sup> <a name="lag_duration" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lagDuration"></a>

```python
lag_duration: str
```

- *Type:* str

---

##### `last_transfer_bytes`<sup>Required</sup> <a name="last_transfer_bytes" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferBytes"></a>

```python
last_transfer_bytes: str
```

- *Type:* str

---

##### `last_transfer_duration`<sup>Required</sup> <a name="last_transfer_duration" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferDuration"></a>

```python
last_transfer_duration: str
```

- *Type:* str

---

##### `last_transfer_end_time`<sup>Required</sup> <a name="last_transfer_end_time" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferEndTime"></a>

```python
last_transfer_end_time: str
```

- *Type:* str

---

##### `last_transfer_error`<sup>Required</sup> <a name="last_transfer_error" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferError"></a>

```python
last_transfer_error: str
```

- *Type:* str

---

##### `total_transfer_duration`<sup>Required</sup> <a name="total_transfer_duration" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.totalTransferDuration"></a>

```python
total_transfer_duration: str
```

- *Type:* str

---

##### `transfer_bytes`<sup>Required</sup> <a name="transfer_bytes" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.transferBytes"></a>

```python
transfer_bytes: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeReplicationTransferStats
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStats">NetappVolumeReplicationTransferStats</a>

---



