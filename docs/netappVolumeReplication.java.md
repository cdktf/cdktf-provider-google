# `netappVolumeReplication` Submodule <a name="`netappVolumeReplication` Submodule" id="@cdktf/provider-google.netappVolumeReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolumeReplication <a name="NetappVolumeReplication" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication google_netapp_volume_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume_replication.NetappVolumeReplication;

NetappVolumeReplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .replicationSchedule(java.lang.String)
    .volumeName(java.lang.String)
//  .deleteDestinationVolume(java.lang.Boolean)
//  .deleteDestinationVolume(IResolvable)
//  .description(java.lang.String)
//  .destinationVolumeParameters(NetappVolumeReplicationDestinationVolumeParameters)
//  .forceStopping(java.lang.Boolean)
//  .forceStopping(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .replicationEnabled(java.lang.Boolean)
//  .replicationEnabled(IResolvable)
//  .timeouts(NetappVolumeReplicationTimeouts)
//  .waitForMirror(java.lang.Boolean)
//  .waitForMirror(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Name of region for this resource. The resource needs to be created in the region of the destination volume. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the replication. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.replicationSchedule">replicationSchedule</a></code> | <code>java.lang.String</code> | Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"]. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.volumeName">volumeName</a></code> | <code>java.lang.String</code> | The name of the existing source volume. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.deleteDestinationVolume">deleteDestinationVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A destination volume is created as part of replication creation. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An description of this resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.destinationVolumeParameters">destinationVolumeParameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a></code> | destination_volume_parameters block. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.forceStopping">forceStopping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Only replications with mirror_state=MIRRORED can be stopped. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#id NetappVolumeReplication#id}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#project NetappVolumeReplication#project}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.replicationEnabled">replicationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to false to stop/break the mirror. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.waitForMirror">waitForMirror</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Replication resource state is independent of mirror_state. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Name of region for this resource. The resource needs to be created in the region of the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#location NetappVolumeReplication#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the replication. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#name NetappVolumeReplication#name}

---

##### `replicationSchedule`<sup>Required</sup> <a name="replicationSchedule" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.replicationSchedule"></a>

- *Type:* java.lang.String

Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#replication_schedule NetappVolumeReplication#replication_schedule}

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.volumeName"></a>

- *Type:* java.lang.String

The name of the existing source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#volume_name NetappVolumeReplication#volume_name}

---

##### `deleteDestinationVolume`<sup>Optional</sup> <a name="deleteDestinationVolume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.deleteDestinationVolume"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A destination volume is created as part of replication creation.

The destination volume will not became
under Terraform management unless you import it manually. If you delete the replication, this volume
will remain.
Setting this parameter to true will delete the *current* destination volume when destroying the
replication. If you reversed the replication direction, this will be your former source volume!
For production use, it is recommended to keep this parameter false to avoid accidental volume
deletion. Handle with care. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#delete_destination_volume NetappVolumeReplication#delete_destination_volume}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#description NetappVolumeReplication#description}

---

##### `destinationVolumeParameters`<sup>Optional</sup> <a name="destinationVolumeParameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.destinationVolumeParameters"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a>

destination_volume_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#destination_volume_parameters NetappVolumeReplication#destination_volume_parameters}

---

##### `forceStopping`<sup>Optional</sup> <a name="forceStopping" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.forceStopping"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Only replications with mirror_state=MIRRORED can be stopped.

A replication in mirror_state=TRANSFERRING
currently receives an update and stopping the update might be undesirable. Set this parameter to true
to stop anyway. All data transferred to the destination will be discarded and content of destination
volume will remain at the state of the last successful update. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#force_stopping NetappVolumeReplication#force_stopping}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#id NetappVolumeReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#labels NetappVolumeReplication#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#project NetappVolumeReplication#project}.

---

##### `replicationEnabled`<sup>Optional</sup> <a name="replicationEnabled" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.replicationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to false to stop/break the mirror.

Stopping the mirror makes the destination volume read-write
and act independently from the source volume.
Set to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes
done to the destination volume with the content of the source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#replication_enabled NetappVolumeReplication#replication_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#timeouts NetappVolumeReplication#timeouts}

---

##### `waitForMirror`<sup>Optional</sup> <a name="waitForMirror" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.waitForMirror"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Replication resource state is independent of mirror_state.

With enough data, it can take many hours
for mirror_state to reach MIRRORED. If you want Terraform to wait for the mirror to finish on
create/stop/resume operations, set this parameter to true. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#wait_for_mirror NetappVolumeReplication#wait_for_mirror}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putDestinationVolumeParameters">putDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDeleteDestinationVolume">resetDeleteDestinationVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDestinationVolumeParameters">resetDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetForceStopping">resetForceStopping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetReplicationEnabled">resetReplicationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetWaitForMirror">resetWaitForMirror</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationVolumeParameters` <a name="putDestinationVolumeParameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putDestinationVolumeParameters"></a>

```java
public void putDestinationVolumeParameters(NetappVolumeReplicationDestinationVolumeParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putDestinationVolumeParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putTimeouts"></a>

```java
public void putTimeouts(NetappVolumeReplicationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a>

---

##### `resetDeleteDestinationVolume` <a name="resetDeleteDestinationVolume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDeleteDestinationVolume"></a>

```java
public void resetDeleteDestinationVolume()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDestinationVolumeParameters` <a name="resetDestinationVolumeParameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDestinationVolumeParameters"></a>

```java
public void resetDestinationVolumeParameters()
```

##### `resetForceStopping` <a name="resetForceStopping" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetForceStopping"></a>

```java
public void resetForceStopping()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetProject"></a>

```java
public void resetProject()
```

##### `resetReplicationEnabled` <a name="resetReplicationEnabled" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetReplicationEnabled"></a>

```java
public void resetReplicationEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWaitForMirror` <a name="resetWaitForMirror" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetWaitForMirror"></a>

```java
public void resetWaitForMirror()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetappVolumeReplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume_replication.NetappVolumeReplication;

NetappVolumeReplication.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume_replication.NetappVolumeReplication;

NetappVolumeReplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume_replication.NetappVolumeReplication;

NetappVolumeReplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume_replication.NetappVolumeReplication;

NetappVolumeReplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetappVolumeReplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetappVolumeReplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetappVolumeReplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetappVolumeReplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetappVolumeReplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolume">destinationVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolumeParameters">destinationVolumeParameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference">NetappVolumeReplicationDestinationVolumeParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.healthy">healthy</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.mirrorState">mirrorState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.sourceVolume">sourceVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.stateDetails">stateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference">NetappVolumeReplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.transferStats">transferStats</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList">NetappVolumeReplicationTransferStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.deleteDestinationVolumeInput">deleteDestinationVolumeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolumeParametersInput">destinationVolumeParametersInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forceStoppingInput">forceStoppingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationEnabledInput">replicationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationScheduleInput">replicationScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.volumeNameInput">volumeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.waitForMirrorInput">waitForMirrorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.deleteDestinationVolume">deleteDestinationVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forceStopping">forceStopping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationEnabled">replicationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationSchedule">replicationSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.waitForMirror">waitForMirror</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `destinationVolume`<sup>Required</sup> <a name="destinationVolume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolume"></a>

```java
public java.lang.String getDestinationVolume();
```

- *Type:* java.lang.String

---

##### `destinationVolumeParameters`<sup>Required</sup> <a name="destinationVolumeParameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolumeParameters"></a>

```java
public NetappVolumeReplicationDestinationVolumeParametersOutputReference getDestinationVolumeParameters();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference">NetappVolumeReplicationDestinationVolumeParametersOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.healthy"></a>

```java
public IResolvable getHealthy();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `mirrorState`<sup>Required</sup> <a name="mirrorState" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.mirrorState"></a>

```java
public java.lang.String getMirrorState();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `sourceVolume`<sup>Required</sup> <a name="sourceVolume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.sourceVolume"></a>

```java
public java.lang.String getSourceVolume();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.stateDetails"></a>

```java
public java.lang.String getStateDetails();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.timeouts"></a>

```java
public NetappVolumeReplicationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference">NetappVolumeReplicationTimeoutsOutputReference</a>

---

##### `transferStats`<sup>Required</sup> <a name="transferStats" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.transferStats"></a>

```java
public NetappVolumeReplicationTransferStatsList getTransferStats();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList">NetappVolumeReplicationTransferStatsList</a>

---

##### `deleteDestinationVolumeInput`<sup>Optional</sup> <a name="deleteDestinationVolumeInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.deleteDestinationVolumeInput"></a>

```java
public java.lang.Object getDeleteDestinationVolumeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationVolumeParametersInput`<sup>Optional</sup> <a name="destinationVolumeParametersInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolumeParametersInput"></a>

```java
public NetappVolumeReplicationDestinationVolumeParameters getDestinationVolumeParametersInput();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a>

---

##### `forceStoppingInput`<sup>Optional</sup> <a name="forceStoppingInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forceStoppingInput"></a>

```java
public java.lang.Object getForceStoppingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `replicationEnabledInput`<sup>Optional</sup> <a name="replicationEnabledInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationEnabledInput"></a>

```java
public java.lang.Object getReplicationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replicationScheduleInput`<sup>Optional</sup> <a name="replicationScheduleInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationScheduleInput"></a>

```java
public java.lang.String getReplicationScheduleInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a>

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.volumeNameInput"></a>

```java
public java.lang.String getVolumeNameInput();
```

- *Type:* java.lang.String

---

##### `waitForMirrorInput`<sup>Optional</sup> <a name="waitForMirrorInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.waitForMirrorInput"></a>

```java
public java.lang.Object getWaitForMirrorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deleteDestinationVolume`<sup>Required</sup> <a name="deleteDestinationVolume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.deleteDestinationVolume"></a>

```java
public java.lang.Object getDeleteDestinationVolume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `forceStopping`<sup>Required</sup> <a name="forceStopping" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forceStopping"></a>

```java
public java.lang.Object getForceStopping();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `replicationEnabled`<sup>Required</sup> <a name="replicationEnabled" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationEnabled"></a>

```java
public java.lang.Object getReplicationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replicationSchedule`<sup>Required</sup> <a name="replicationSchedule" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationSchedule"></a>

```java
public java.lang.String getReplicationSchedule();
```

- *Type:* java.lang.String

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

---

##### `waitForMirror`<sup>Required</sup> <a name="waitForMirror" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.waitForMirror"></a>

```java
public java.lang.Object getWaitForMirror();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeReplicationConfig <a name="NetappVolumeReplicationConfig" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume_replication.NetappVolumeReplicationConfig;

NetappVolumeReplicationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .replicationSchedule(java.lang.String)
    .volumeName(java.lang.String)
//  .deleteDestinationVolume(java.lang.Boolean)
//  .deleteDestinationVolume(IResolvable)
//  .description(java.lang.String)
//  .destinationVolumeParameters(NetappVolumeReplicationDestinationVolumeParameters)
//  .forceStopping(java.lang.Boolean)
//  .forceStopping(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .replicationEnabled(java.lang.Boolean)
//  .replicationEnabled(IResolvable)
//  .timeouts(NetappVolumeReplicationTimeouts)
//  .waitForMirror(java.lang.Boolean)
//  .waitForMirror(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.location">location</a></code> | <code>java.lang.String</code> | Name of region for this resource. The resource needs to be created in the region of the destination volume. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the replication. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.replicationSchedule">replicationSchedule</a></code> | <code>java.lang.String</code> | Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"]. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | The name of the existing source volume. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.deleteDestinationVolume">deleteDestinationVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A destination volume is created as part of replication creation. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.description">description</a></code> | <code>java.lang.String</code> | An description of this resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.destinationVolumeParameters">destinationVolumeParameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a></code> | destination_volume_parameters block. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.forceStopping">forceStopping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Only replications with mirror_state=MIRRORED can be stopped. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#id NetappVolumeReplication#id}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#project NetappVolumeReplication#project}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.replicationEnabled">replicationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to false to stop/break the mirror. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.waitForMirror">waitForMirror</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Replication resource state is independent of mirror_state. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Name of region for this resource. The resource needs to be created in the region of the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#location NetappVolumeReplication#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the replication. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#name NetappVolumeReplication#name}

---

##### `replicationSchedule`<sup>Required</sup> <a name="replicationSchedule" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.replicationSchedule"></a>

```java
public java.lang.String getReplicationSchedule();
```

- *Type:* java.lang.String

Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#replication_schedule NetappVolumeReplication#replication_schedule}

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

The name of the existing source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#volume_name NetappVolumeReplication#volume_name}

---

##### `deleteDestinationVolume`<sup>Optional</sup> <a name="deleteDestinationVolume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.deleteDestinationVolume"></a>

```java
public java.lang.Object getDeleteDestinationVolume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A destination volume is created as part of replication creation.

The destination volume will not became
under Terraform management unless you import it manually. If you delete the replication, this volume
will remain.
Setting this parameter to true will delete the *current* destination volume when destroying the
replication. If you reversed the replication direction, this will be your former source volume!
For production use, it is recommended to keep this parameter false to avoid accidental volume
deletion. Handle with care. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#delete_destination_volume NetappVolumeReplication#delete_destination_volume}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#description NetappVolumeReplication#description}

---

##### `destinationVolumeParameters`<sup>Optional</sup> <a name="destinationVolumeParameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.destinationVolumeParameters"></a>

```java
public NetappVolumeReplicationDestinationVolumeParameters getDestinationVolumeParameters();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a>

destination_volume_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#destination_volume_parameters NetappVolumeReplication#destination_volume_parameters}

---

##### `forceStopping`<sup>Optional</sup> <a name="forceStopping" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.forceStopping"></a>

```java
public java.lang.Object getForceStopping();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Only replications with mirror_state=MIRRORED can be stopped.

A replication in mirror_state=TRANSFERRING
currently receives an update and stopping the update might be undesirable. Set this parameter to true
to stop anyway. All data transferred to the destination will be discarded and content of destination
volume will remain at the state of the last successful update. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#force_stopping NetappVolumeReplication#force_stopping}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#id NetappVolumeReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#labels NetappVolumeReplication#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#project NetappVolumeReplication#project}.

---

##### `replicationEnabled`<sup>Optional</sup> <a name="replicationEnabled" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.replicationEnabled"></a>

```java
public java.lang.Object getReplicationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to false to stop/break the mirror.

Stopping the mirror makes the destination volume read-write
and act independently from the source volume.
Set to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes
done to the destination volume with the content of the source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#replication_enabled NetappVolumeReplication#replication_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.timeouts"></a>

```java
public NetappVolumeReplicationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#timeouts NetappVolumeReplication#timeouts}

---

##### `waitForMirror`<sup>Optional</sup> <a name="waitForMirror" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.waitForMirror"></a>

```java
public java.lang.Object getWaitForMirror();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Replication resource state is independent of mirror_state.

With enough data, it can take many hours
for mirror_state to reach MIRRORED. If you want Terraform to wait for the mirror to finish on
create/stop/resume operations, set this parameter to true. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#wait_for_mirror NetappVolumeReplication#wait_for_mirror}

---

### NetappVolumeReplicationDestinationVolumeParameters <a name="NetappVolumeReplicationDestinationVolumeParameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume_replication.NetappVolumeReplicationDestinationVolumeParameters;

NetappVolumeReplicationDestinationVolumeParameters.builder()
    .storagePool(java.lang.String)
//  .description(java.lang.String)
//  .shareName(java.lang.String)
//  .volumeId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.storagePool">storagePool</a></code> | <code>java.lang.String</code> | Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.description">description</a></code> | <code>java.lang.String</code> | Description for the destination volume. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.shareName">shareName</a></code> | <code>java.lang.String</code> | Share name for destination volume. If not specified, name of source volume's share name will be used. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | Name for the destination volume to be created. |

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.storagePool"></a>

```java
public java.lang.String getStoragePool();
```

- *Type:* java.lang.String

Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#storage_pool NetappVolumeReplication#storage_pool}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description for the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#description NetappVolumeReplication#description}

---

##### `shareName`<sup>Optional</sup> <a name="shareName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

Share name for destination volume. If not specified, name of source volume's share name will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#share_name NetappVolumeReplication#share_name}

---

##### `volumeId`<sup>Optional</sup> <a name="volumeId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

Name for the destination volume to be created.

If not specified, the name of the source volume will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#volume_id NetappVolumeReplication#volume_id}

---

### NetappVolumeReplicationTimeouts <a name="NetappVolumeReplicationTimeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume_replication.NetappVolumeReplicationTimeouts;

NetappVolumeReplicationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#create NetappVolumeReplication#create}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#delete NetappVolumeReplication#delete}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#update NetappVolumeReplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#create NetappVolumeReplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#delete NetappVolumeReplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/netapp_volume_replication#update NetappVolumeReplication#update}.

---

### NetappVolumeReplicationTransferStats <a name="NetappVolumeReplicationTransferStats" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStats.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume_replication.NetappVolumeReplicationTransferStats;

NetappVolumeReplicationTransferStats.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeReplicationDestinationVolumeParametersOutputReference <a name="NetappVolumeReplicationDestinationVolumeParametersOutputReference" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume_replication.NetappVolumeReplicationDestinationVolumeParametersOutputReference;

new NetappVolumeReplicationDestinationVolumeParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetShareName">resetShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetVolumeId">resetVolumeId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetShareName` <a name="resetShareName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetShareName"></a>

```java
public void resetShareName()
```

##### `resetVolumeId` <a name="resetVolumeId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetVolumeId"></a>

```java
public void resetVolumeId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePoolInput">storagePoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeIdInput">volumeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareName">shareName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePool">storagePool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareNameInput"></a>

```java
public java.lang.String getShareNameInput();
```

- *Type:* java.lang.String

---

##### `storagePoolInput`<sup>Optional</sup> <a name="storagePoolInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePoolInput"></a>

```java
public java.lang.String getStoragePoolInput();
```

- *Type:* java.lang.String

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeIdInput"></a>

```java
public java.lang.String getVolumeIdInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePool"></a>

```java
public java.lang.String getStoragePool();
```

- *Type:* java.lang.String

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.internalValue"></a>

```java
public NetappVolumeReplicationDestinationVolumeParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a>

---


### NetappVolumeReplicationTimeoutsOutputReference <a name="NetappVolumeReplicationTimeoutsOutputReference" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume_replication.NetappVolumeReplicationTimeoutsOutputReference;

new NetappVolumeReplicationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a>

---


### NetappVolumeReplicationTransferStatsList <a name="NetappVolumeReplicationTransferStatsList" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume_replication.NetappVolumeReplicationTransferStatsList;

new NetappVolumeReplicationTransferStatsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.get"></a>

```java
public NetappVolumeReplicationTransferStatsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetappVolumeReplicationTransferStatsOutputReference <a name="NetappVolumeReplicationTransferStatsOutputReference" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume_replication.NetappVolumeReplicationTransferStatsOutputReference;

new NetappVolumeReplicationTransferStatsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lagDuration">lagDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferBytes">lastTransferBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferDuration">lastTransferDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferEndTime">lastTransferEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferError">lastTransferError</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.totalTransferDuration">totalTransferDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.transferBytes">transferBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStats">NetappVolumeReplicationTransferStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lagDuration`<sup>Required</sup> <a name="lagDuration" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lagDuration"></a>

```java
public java.lang.String getLagDuration();
```

- *Type:* java.lang.String

---

##### `lastTransferBytes`<sup>Required</sup> <a name="lastTransferBytes" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferBytes"></a>

```java
public java.lang.String getLastTransferBytes();
```

- *Type:* java.lang.String

---

##### `lastTransferDuration`<sup>Required</sup> <a name="lastTransferDuration" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferDuration"></a>

```java
public java.lang.String getLastTransferDuration();
```

- *Type:* java.lang.String

---

##### `lastTransferEndTime`<sup>Required</sup> <a name="lastTransferEndTime" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferEndTime"></a>

```java
public java.lang.String getLastTransferEndTime();
```

- *Type:* java.lang.String

---

##### `lastTransferError`<sup>Required</sup> <a name="lastTransferError" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferError"></a>

```java
public java.lang.String getLastTransferError();
```

- *Type:* java.lang.String

---

##### `totalTransferDuration`<sup>Required</sup> <a name="totalTransferDuration" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.totalTransferDuration"></a>

```java
public java.lang.String getTotalTransferDuration();
```

- *Type:* java.lang.String

---

##### `transferBytes`<sup>Required</sup> <a name="transferBytes" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.transferBytes"></a>

```java
public java.lang.String getTransferBytes();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.internalValue"></a>

```java
public NetappVolumeReplicationTransferStats getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStats">NetappVolumeReplicationTransferStats</a>

---



