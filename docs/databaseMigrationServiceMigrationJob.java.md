# `databaseMigrationServiceMigrationJob` Submodule <a name="`databaseMigrationServiceMigrationJob` Submodule" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMigrationServiceMigrationJob <a name="DatabaseMigrationServiceMigrationJob" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job google_database_migration_service_migration_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJob;

DatabaseMigrationServiceMigrationJob.Builder.create(Construct scope, java.lang.String id)
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
    .destination(java.lang.String)
    .migrationJobId(java.lang.String)
    .source(java.lang.String)
    .type(java.lang.String)
//  .displayName(java.lang.String)
//  .dumpFlags(DatabaseMigrationServiceMigrationJobDumpFlags)
//  .dumpPath(java.lang.String)
//  .dumpType(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .performanceConfig(DatabaseMigrationServiceMigrationJobPerformanceConfig)
//  .project(java.lang.String)
//  .reverseSshConnectivity(DatabaseMigrationServiceMigrationJobReverseSshConnectivity)
//  .staticIpConnectivity(DatabaseMigrationServiceMigrationJobStaticIpConnectivity)
//  .timeouts(DatabaseMigrationServiceMigrationJobTimeouts)
//  .vpcPeeringConnectivity(DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.destination">destination</a></code> | <code>java.lang.String</code> | The name of the destination connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{destinationConnectionProfile}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.migrationJobId">migrationJobId</a></code> | <code>java.lang.String</code> | The ID of the migration job. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | The name of the source connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{sourceConnectionProfile}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the migration job. Possible values: ["ONE_TIME", "CONTINUOUS"]. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The migration job display name. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.dumpFlags">dumpFlags</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a></code> | dump_flags block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.dumpPath">dumpPath</a></code> | <code>java.lang.String</code> | The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.dumpType">dumpType</a></code> | <code>java.lang.String</code> | The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only. Possible values: ["LOGICAL", "PHYSICAL"]. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#id DatabaseMigrationServiceMigrationJob#id}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location where the migration job should reside. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.performanceConfig">performanceConfig</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | performance_config block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#project DatabaseMigrationServiceMigrationJob#project}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.reverseSshConnectivity">reverseSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | reverse_ssh_connectivity block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.staticIpConnectivity">staticIpConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | static_ip_connectivity block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.vpcPeeringConnectivity">vpcPeeringConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | vpc_peering_connectivity block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.destination"></a>

- *Type:* java.lang.String

The name of the destination connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{destinationConnectionProfile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#destination DatabaseMigrationServiceMigrationJob#destination}

---

##### `migrationJobId`<sup>Required</sup> <a name="migrationJobId" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.migrationJobId"></a>

- *Type:* java.lang.String

The ID of the migration job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#migration_job_id DatabaseMigrationServiceMigrationJob#migration_job_id}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.source"></a>

- *Type:* java.lang.String

The name of the source connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{sourceConnectionProfile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#source DatabaseMigrationServiceMigrationJob#source}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the migration job. Possible values: ["ONE_TIME", "CONTINUOUS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#type DatabaseMigrationServiceMigrationJob#type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The migration job display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#display_name DatabaseMigrationServiceMigrationJob#display_name}

---

##### `dumpFlags`<sup>Optional</sup> <a name="dumpFlags" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.dumpFlags"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a>

dump_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#dump_flags DatabaseMigrationServiceMigrationJob#dump_flags}

---

##### `dumpPath`<sup>Optional</sup> <a name="dumpPath" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.dumpPath"></a>

- *Type:* java.lang.String

The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]).

This field and the "dump_flags" field are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#dump_path DatabaseMigrationServiceMigrationJob#dump_path}

---

##### `dumpType`<sup>Optional</sup> <a name="dumpType" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.dumpType"></a>

- *Type:* java.lang.String

The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only. Possible values: ["LOGICAL", "PHYSICAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#dump_type DatabaseMigrationServiceMigrationJob#dump_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#id DatabaseMigrationServiceMigrationJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#labels DatabaseMigrationServiceMigrationJob#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location where the migration job should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#location DatabaseMigrationServiceMigrationJob#location}

---

##### `performanceConfig`<sup>Optional</sup> <a name="performanceConfig" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.performanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a>

performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#performance_config DatabaseMigrationServiceMigrationJob#performance_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#project DatabaseMigrationServiceMigrationJob#project}.

---

##### `reverseSshConnectivity`<sup>Optional</sup> <a name="reverseSshConnectivity" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.reverseSshConnectivity"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

reverse_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#reverse_ssh_connectivity DatabaseMigrationServiceMigrationJob#reverse_ssh_connectivity}

---

##### `staticIpConnectivity`<sup>Optional</sup> <a name="staticIpConnectivity" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.staticIpConnectivity"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

static_ip_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#static_ip_connectivity DatabaseMigrationServiceMigrationJob#static_ip_connectivity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#timeouts DatabaseMigrationServiceMigrationJob#timeouts}

---

##### `vpcPeeringConnectivity`<sup>Optional</sup> <a name="vpcPeeringConnectivity" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.vpcPeeringConnectivity"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

vpc_peering_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#vpc_peering_connectivity DatabaseMigrationServiceMigrationJob#vpc_peering_connectivity}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putDumpFlags">putDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putPerformanceConfig">putPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putReverseSshConnectivity">putReverseSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putStaticIpConnectivity">putStaticIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putVpcPeeringConnectivity">putVpcPeeringConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDumpFlags">resetDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDumpPath">resetDumpPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDumpType">resetDumpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetPerformanceConfig">resetPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetReverseSshConnectivity">resetReverseSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetStaticIpConnectivity">resetStaticIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetVpcPeeringConnectivity">resetVpcPeeringConnectivity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDumpFlags` <a name="putDumpFlags" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putDumpFlags"></a>

```java
public void putDumpFlags(DatabaseMigrationServiceMigrationJobDumpFlags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putDumpFlags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a>

---

##### `putPerformanceConfig` <a name="putPerformanceConfig" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putPerformanceConfig"></a>

```java
public void putPerformanceConfig(DatabaseMigrationServiceMigrationJobPerformanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a>

---

##### `putReverseSshConnectivity` <a name="putReverseSshConnectivity" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putReverseSshConnectivity"></a>

```java
public void putReverseSshConnectivity(DatabaseMigrationServiceMigrationJobReverseSshConnectivity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putReverseSshConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

---

##### `putStaticIpConnectivity` <a name="putStaticIpConnectivity" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putStaticIpConnectivity"></a>

```java
public void putStaticIpConnectivity(DatabaseMigrationServiceMigrationJobStaticIpConnectivity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putStaticIpConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putTimeouts"></a>

```java
public void putTimeouts(DatabaseMigrationServiceMigrationJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a>

---

##### `putVpcPeeringConnectivity` <a name="putVpcPeeringConnectivity" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putVpcPeeringConnectivity"></a>

```java
public void putVpcPeeringConnectivity(DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putVpcPeeringConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDumpFlags` <a name="resetDumpFlags" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDumpFlags"></a>

```java
public void resetDumpFlags()
```

##### `resetDumpPath` <a name="resetDumpPath" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDumpPath"></a>

```java
public void resetDumpPath()
```

##### `resetDumpType` <a name="resetDumpType" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDumpType"></a>

```java
public void resetDumpType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetPerformanceConfig` <a name="resetPerformanceConfig" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetPerformanceConfig"></a>

```java
public void resetPerformanceConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetProject"></a>

```java
public void resetProject()
```

##### `resetReverseSshConnectivity` <a name="resetReverseSshConnectivity" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetReverseSshConnectivity"></a>

```java
public void resetReverseSshConnectivity()
```

##### `resetStaticIpConnectivity` <a name="resetStaticIpConnectivity" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetStaticIpConnectivity"></a>

```java
public void resetStaticIpConnectivity()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcPeeringConnectivity` <a name="resetVpcPeeringConnectivity" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetVpcPeeringConnectivity"></a>

```java
public void resetVpcPeeringConnectivity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMigrationServiceMigrationJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJob;

DatabaseMigrationServiceMigrationJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJob;

DatabaseMigrationServiceMigrationJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJob;

DatabaseMigrationServiceMigrationJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJob;

DatabaseMigrationServiceMigrationJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseMigrationServiceMigrationJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseMigrationServiceMigrationJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseMigrationServiceMigrationJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseMigrationServiceMigrationJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMigrationServiceMigrationJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpFlags">dumpFlags</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference">DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.error">error</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList">DatabaseMigrationServiceMigrationJobErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.performanceConfig">performanceConfig</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference">DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.phase">phase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.reverseSshConnectivity">reverseSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference">DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.staticIpConnectivity">staticIpConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference">DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference">DatabaseMigrationServiceMigrationJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivity">vpcPeeringConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpFlagsInput">dumpFlagsInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpPathInput">dumpPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpTypeInput">dumpTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.migrationJobIdInput">migrationJobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.performanceConfigInput">performanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.reverseSshConnectivityInput">reverseSshConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.staticIpConnectivityInput">staticIpConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivityInput">vpcPeeringConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpPath">dumpPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpType">dumpType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.migrationJobId">migrationJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dumpFlags`<sup>Required</sup> <a name="dumpFlags" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpFlags"></a>

```java
public DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference getDumpFlags();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference">DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.error"></a>

```java
public DatabaseMigrationServiceMigrationJobErrorList getError();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList">DatabaseMigrationServiceMigrationJobErrorList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `performanceConfig`<sup>Required</sup> <a name="performanceConfig" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.performanceConfig"></a>

```java
public DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference getPerformanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference">DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference</a>

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.phase"></a>

```java
public java.lang.String getPhase();
```

- *Type:* java.lang.String

---

##### `reverseSshConnectivity`<sup>Required</sup> <a name="reverseSshConnectivity" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.reverseSshConnectivity"></a>

```java
public DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference getReverseSshConnectivity();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference">DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `staticIpConnectivity`<sup>Required</sup> <a name="staticIpConnectivity" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.staticIpConnectivity"></a>

```java
public DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference getStaticIpConnectivity();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference">DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.timeouts"></a>

```java
public DatabaseMigrationServiceMigrationJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference">DatabaseMigrationServiceMigrationJobTimeoutsOutputReference</a>

---

##### `vpcPeeringConnectivity`<sup>Required</sup> <a name="vpcPeeringConnectivity" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivity"></a>

```java
public DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference getVpcPeeringConnectivity();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `dumpFlagsInput`<sup>Optional</sup> <a name="dumpFlagsInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpFlagsInput"></a>

```java
public DatabaseMigrationServiceMigrationJobDumpFlags getDumpFlagsInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a>

---

##### `dumpPathInput`<sup>Optional</sup> <a name="dumpPathInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpPathInput"></a>

```java
public java.lang.String getDumpPathInput();
```

- *Type:* java.lang.String

---

##### `dumpTypeInput`<sup>Optional</sup> <a name="dumpTypeInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpTypeInput"></a>

```java
public java.lang.String getDumpTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `migrationJobIdInput`<sup>Optional</sup> <a name="migrationJobIdInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.migrationJobIdInput"></a>

```java
public java.lang.String getMigrationJobIdInput();
```

- *Type:* java.lang.String

---

##### `performanceConfigInput`<sup>Optional</sup> <a name="performanceConfigInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.performanceConfigInput"></a>

```java
public DatabaseMigrationServiceMigrationJobPerformanceConfig getPerformanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `reverseSshConnectivityInput`<sup>Optional</sup> <a name="reverseSshConnectivityInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.reverseSshConnectivityInput"></a>

```java
public DatabaseMigrationServiceMigrationJobReverseSshConnectivity getReverseSshConnectivityInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `staticIpConnectivityInput`<sup>Optional</sup> <a name="staticIpConnectivityInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.staticIpConnectivityInput"></a>

```java
public DatabaseMigrationServiceMigrationJobStaticIpConnectivity getStaticIpConnectivityInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcPeeringConnectivityInput`<sup>Optional</sup> <a name="vpcPeeringConnectivityInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivityInput"></a>

```java
public DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity getVpcPeeringConnectivityInput();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `dumpPath`<sup>Required</sup> <a name="dumpPath" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpPath"></a>

```java
public java.lang.String getDumpPath();
```

- *Type:* java.lang.String

---

##### `dumpType`<sup>Required</sup> <a name="dumpType" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpType"></a>

```java
public java.lang.String getDumpType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `migrationJobId`<sup>Required</sup> <a name="migrationJobId" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.migrationJobId"></a>

```java
public java.lang.String getMigrationJobId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMigrationServiceMigrationJobConfig <a name="DatabaseMigrationServiceMigrationJobConfig" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobConfig;

DatabaseMigrationServiceMigrationJobConfig.builder()
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
    .destination(java.lang.String)
    .migrationJobId(java.lang.String)
    .source(java.lang.String)
    .type(java.lang.String)
//  .displayName(java.lang.String)
//  .dumpFlags(DatabaseMigrationServiceMigrationJobDumpFlags)
//  .dumpPath(java.lang.String)
//  .dumpType(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .performanceConfig(DatabaseMigrationServiceMigrationJobPerformanceConfig)
//  .project(java.lang.String)
//  .reverseSshConnectivity(DatabaseMigrationServiceMigrationJobReverseSshConnectivity)
//  .staticIpConnectivity(DatabaseMigrationServiceMigrationJobStaticIpConnectivity)
//  .timeouts(DatabaseMigrationServiceMigrationJobTimeouts)
//  .vpcPeeringConnectivity(DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.destination">destination</a></code> | <code>java.lang.String</code> | The name of the destination connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{destinationConnectionProfile}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.migrationJobId">migrationJobId</a></code> | <code>java.lang.String</code> | The ID of the migration job. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.source">source</a></code> | <code>java.lang.String</code> | The name of the source connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{sourceConnectionProfile}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the migration job. Possible values: ["ONE_TIME", "CONTINUOUS"]. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The migration job display name. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dumpFlags">dumpFlags</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a></code> | dump_flags block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dumpPath">dumpPath</a></code> | <code>java.lang.String</code> | The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dumpType">dumpType</a></code> | <code>java.lang.String</code> | The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only. Possible values: ["LOGICAL", "PHYSICAL"]. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#id DatabaseMigrationServiceMigrationJob#id}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location where the migration job should reside. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.performanceConfig">performanceConfig</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | performance_config block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#project DatabaseMigrationServiceMigrationJob#project}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.reverseSshConnectivity">reverseSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | reverse_ssh_connectivity block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.staticIpConnectivity">staticIpConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | static_ip_connectivity block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.vpcPeeringConnectivity">vpcPeeringConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | vpc_peering_connectivity block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

The name of the destination connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{destinationConnectionProfile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#destination DatabaseMigrationServiceMigrationJob#destination}

---

##### `migrationJobId`<sup>Required</sup> <a name="migrationJobId" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.migrationJobId"></a>

```java
public java.lang.String getMigrationJobId();
```

- *Type:* java.lang.String

The ID of the migration job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#migration_job_id DatabaseMigrationServiceMigrationJob#migration_job_id}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The name of the source connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{sourceConnectionProfile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#source DatabaseMigrationServiceMigrationJob#source}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the migration job. Possible values: ["ONE_TIME", "CONTINUOUS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#type DatabaseMigrationServiceMigrationJob#type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The migration job display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#display_name DatabaseMigrationServiceMigrationJob#display_name}

---

##### `dumpFlags`<sup>Optional</sup> <a name="dumpFlags" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dumpFlags"></a>

```java
public DatabaseMigrationServiceMigrationJobDumpFlags getDumpFlags();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a>

dump_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#dump_flags DatabaseMigrationServiceMigrationJob#dump_flags}

---

##### `dumpPath`<sup>Optional</sup> <a name="dumpPath" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dumpPath"></a>

```java
public java.lang.String getDumpPath();
```

- *Type:* java.lang.String

The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]).

This field and the "dump_flags" field are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#dump_path DatabaseMigrationServiceMigrationJob#dump_path}

---

##### `dumpType`<sup>Optional</sup> <a name="dumpType" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dumpType"></a>

```java
public java.lang.String getDumpType();
```

- *Type:* java.lang.String

The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only. Possible values: ["LOGICAL", "PHYSICAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#dump_type DatabaseMigrationServiceMigrationJob#dump_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#id DatabaseMigrationServiceMigrationJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#labels DatabaseMigrationServiceMigrationJob#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location where the migration job should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#location DatabaseMigrationServiceMigrationJob#location}

---

##### `performanceConfig`<sup>Optional</sup> <a name="performanceConfig" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.performanceConfig"></a>

```java
public DatabaseMigrationServiceMigrationJobPerformanceConfig getPerformanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a>

performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#performance_config DatabaseMigrationServiceMigrationJob#performance_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#project DatabaseMigrationServiceMigrationJob#project}.

---

##### `reverseSshConnectivity`<sup>Optional</sup> <a name="reverseSshConnectivity" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.reverseSshConnectivity"></a>

```java
public DatabaseMigrationServiceMigrationJobReverseSshConnectivity getReverseSshConnectivity();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

reverse_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#reverse_ssh_connectivity DatabaseMigrationServiceMigrationJob#reverse_ssh_connectivity}

---

##### `staticIpConnectivity`<sup>Optional</sup> <a name="staticIpConnectivity" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.staticIpConnectivity"></a>

```java
public DatabaseMigrationServiceMigrationJobStaticIpConnectivity getStaticIpConnectivity();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

static_ip_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#static_ip_connectivity DatabaseMigrationServiceMigrationJob#static_ip_connectivity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.timeouts"></a>

```java
public DatabaseMigrationServiceMigrationJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#timeouts DatabaseMigrationServiceMigrationJob#timeouts}

---

##### `vpcPeeringConnectivity`<sup>Optional</sup> <a name="vpcPeeringConnectivity" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.vpcPeeringConnectivity"></a>

```java
public DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity getVpcPeeringConnectivity();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

vpc_peering_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#vpc_peering_connectivity DatabaseMigrationServiceMigrationJob#vpc_peering_connectivity}

---

### DatabaseMigrationServiceMigrationJobDumpFlags <a name="DatabaseMigrationServiceMigrationJobDumpFlags" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobDumpFlags;

DatabaseMigrationServiceMigrationJobDumpFlags.builder()
//  .dumpFlags(IResolvable)
//  .dumpFlags(java.util.List<DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags.property.dumpFlags">dumpFlags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>></code> | dump_flags block. |

---

##### `dumpFlags`<sup>Optional</sup> <a name="dumpFlags" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags.property.dumpFlags"></a>

```java
public java.lang.Object getDumpFlags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>>

dump_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#dump_flags DatabaseMigrationServiceMigrationJob#dump_flags}

---

### DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags <a name="DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags;

DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.name">name</a></code> | <code>java.lang.String</code> | The name of the flag. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.value">value</a></code> | <code>java.lang.String</code> | The vale of the flag. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#name DatabaseMigrationServiceMigrationJob#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The vale of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#value DatabaseMigrationServiceMigrationJob#value}

---

### DatabaseMigrationServiceMigrationJobError <a name="DatabaseMigrationServiceMigrationJobError" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobError.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobError;

DatabaseMigrationServiceMigrationJobError.builder()
    .build();
```


### DatabaseMigrationServiceMigrationJobPerformanceConfig <a name="DatabaseMigrationServiceMigrationJobPerformanceConfig" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobPerformanceConfig;

DatabaseMigrationServiceMigrationJobPerformanceConfig.builder()
//  .dumpParallelLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig.property.dumpParallelLevel">dumpParallelLevel</a></code> | <code>java.lang.String</code> | Initial dump parallelism level. Possible values: ["MIN", "OPTIMAL", "MAX"]. |

---

##### `dumpParallelLevel`<sup>Optional</sup> <a name="dumpParallelLevel" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig.property.dumpParallelLevel"></a>

```java
public java.lang.String getDumpParallelLevel();
```

- *Type:* java.lang.String

Initial dump parallelism level. Possible values: ["MIN", "OPTIMAL", "MAX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#dump_parallel_level DatabaseMigrationServiceMigrationJob#dump_parallel_level}

---

### DatabaseMigrationServiceMigrationJobReverseSshConnectivity <a name="DatabaseMigrationServiceMigrationJobReverseSshConnectivity" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobReverseSshConnectivity;

DatabaseMigrationServiceMigrationJobReverseSshConnectivity.builder()
//  .vm(java.lang.String)
//  .vmIp(java.lang.String)
//  .vmPort(java.lang.Number)
//  .vpc(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vm">vm</a></code> | <code>java.lang.String</code> | The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmIp">vmIp</a></code> | <code>java.lang.String</code> | The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmPort">vmPort</a></code> | <code>java.lang.Number</code> | The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vpc">vpc</a></code> | <code>java.lang.String</code> | The name of the VPC to peer with the Cloud SQL private network. |

---

##### `vm`<sup>Optional</sup> <a name="vm" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vm"></a>

```java
public java.lang.String getVm();
```

- *Type:* java.lang.String

The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#vm DatabaseMigrationServiceMigrationJob#vm}

---

##### `vmIp`<sup>Optional</sup> <a name="vmIp" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmIp"></a>

```java
public java.lang.String getVmIp();
```

- *Type:* java.lang.String

The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#vm_ip DatabaseMigrationServiceMigrationJob#vm_ip}

---

##### `vmPort`<sup>Optional</sup> <a name="vmPort" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmPort"></a>

```java
public java.lang.Number getVmPort();
```

- *Type:* java.lang.Number

The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#vm_port DatabaseMigrationServiceMigrationJob#vm_port}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vpc"></a>

```java
public java.lang.String getVpc();
```

- *Type:* java.lang.String

The name of the VPC to peer with the Cloud SQL private network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#vpc DatabaseMigrationServiceMigrationJob#vpc}

---

### DatabaseMigrationServiceMigrationJobStaticIpConnectivity <a name="DatabaseMigrationServiceMigrationJobStaticIpConnectivity" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobStaticIpConnectivity;

DatabaseMigrationServiceMigrationJobStaticIpConnectivity.builder()
    .build();
```


### DatabaseMigrationServiceMigrationJobTimeouts <a name="DatabaseMigrationServiceMigrationJobTimeouts" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobTimeouts;

DatabaseMigrationServiceMigrationJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#create DatabaseMigrationServiceMigrationJob#create}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#delete DatabaseMigrationServiceMigrationJob#delete}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#update DatabaseMigrationServiceMigrationJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#create DatabaseMigrationServiceMigrationJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#delete DatabaseMigrationServiceMigrationJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#update DatabaseMigrationServiceMigrationJob#update}.

---

### DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity <a name="DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity;

DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.builder()
//  .vpc(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.property.vpc">vpc</a></code> | <code>java.lang.String</code> | The name of the VPC network to peer with the Cloud SQL private network. |

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.property.vpc"></a>

```java
public java.lang.String getVpc();
```

- *Type:* java.lang.String

The name of the VPC network to peer with the Cloud SQL private network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/database_migration_service_migration_job#vpc DatabaseMigrationServiceMigrationJob#vpc}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList <a name="DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList;

new DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.get"></a>

```java
public DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>>

---


### DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference <a name="DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference;

new DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>

---


### DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference <a name="DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference;

new DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.putDumpFlags">putDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resetDumpFlags">resetDumpFlags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDumpFlags` <a name="putDumpFlags" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.putDumpFlags"></a>

```java
public void putDumpFlags(IResolvable OR java.util.List<DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.putDumpFlags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>>

---

##### `resetDumpFlags` <a name="resetDumpFlags" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resetDumpFlags"></a>

```java
public void resetDumpFlags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlags">dumpFlags</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlagsInput">dumpFlagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dumpFlags`<sup>Required</sup> <a name="dumpFlags" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlags"></a>

```java
public DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList getDumpFlags();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList</a>

---

##### `dumpFlagsInput`<sup>Optional</sup> <a name="dumpFlagsInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlagsInput"></a>

```java
public java.lang.Object getDumpFlagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceMigrationJobDumpFlags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a>

---


### DatabaseMigrationServiceMigrationJobErrorList <a name="DatabaseMigrationServiceMigrationJobErrorList" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobErrorList;

new DatabaseMigrationServiceMigrationJobErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.get"></a>

```java
public DatabaseMigrationServiceMigrationJobErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseMigrationServiceMigrationJobErrorOutputReference <a name="DatabaseMigrationServiceMigrationJobErrorOutputReference" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobErrorOutputReference;

new DatabaseMigrationServiceMigrationJobErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.details">details</a></code> | <code>com.hashicorp.cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobError">DatabaseMigrationServiceMigrationJobError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.details"></a>

```java
public StringMapList getDetails();
```

- *Type:* com.hashicorp.cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceMigrationJobError getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobError">DatabaseMigrationServiceMigrationJobError</a>

---


### DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference <a name="DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference;

new DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resetDumpParallelLevel">resetDumpParallelLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDumpParallelLevel` <a name="resetDumpParallelLevel" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resetDumpParallelLevel"></a>

```java
public void resetDumpParallelLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevelInput">dumpParallelLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevel">dumpParallelLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dumpParallelLevelInput`<sup>Optional</sup> <a name="dumpParallelLevelInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevelInput"></a>

```java
public java.lang.String getDumpParallelLevelInput();
```

- *Type:* java.lang.String

---

##### `dumpParallelLevel`<sup>Required</sup> <a name="dumpParallelLevel" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevel"></a>

```java
public java.lang.String getDumpParallelLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceMigrationJobPerformanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a>

---


### DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference <a name="DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference;

new DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVm">resetVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmIp">resetVmIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmPort">resetVmPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVm` <a name="resetVm" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVm"></a>

```java
public void resetVm()
```

##### `resetVmIp` <a name="resetVmIp" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmIp"></a>

```java
public void resetVmIp()
```

##### `resetVmPort` <a name="resetVmPort" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmPort"></a>

```java
public void resetVmPort()
```

##### `resetVpc` <a name="resetVpc" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVpc"></a>

```java
public void resetVpc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmInput">vmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIpInput">vmIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPortInput">vmPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpcInput">vpcInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vm">vm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIp">vmIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPort">vmPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpc">vpc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vmInput`<sup>Optional</sup> <a name="vmInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmInput"></a>

```java
public java.lang.String getVmInput();
```

- *Type:* java.lang.String

---

##### `vmIpInput`<sup>Optional</sup> <a name="vmIpInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIpInput"></a>

```java
public java.lang.String getVmIpInput();
```

- *Type:* java.lang.String

---

##### `vmPortInput`<sup>Optional</sup> <a name="vmPortInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPortInput"></a>

```java
public java.lang.Number getVmPortInput();
```

- *Type:* java.lang.Number

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpcInput"></a>

```java
public java.lang.String getVpcInput();
```

- *Type:* java.lang.String

---

##### `vm`<sup>Required</sup> <a name="vm" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vm"></a>

```java
public java.lang.String getVm();
```

- *Type:* java.lang.String

---

##### `vmIp`<sup>Required</sup> <a name="vmIp" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIp"></a>

```java
public java.lang.String getVmIp();
```

- *Type:* java.lang.String

---

##### `vmPort`<sup>Required</sup> <a name="vmPort" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPort"></a>

```java
public java.lang.Number getVmPort();
```

- *Type:* java.lang.Number

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpc"></a>

```java
public java.lang.String getVpc();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceMigrationJobReverseSshConnectivity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

---


### DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference <a name="DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference;

new DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceMigrationJobStaticIpConnectivity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

---


### DatabaseMigrationServiceMigrationJobTimeoutsOutputReference <a name="DatabaseMigrationServiceMigrationJobTimeoutsOutputReference" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference;

new DatabaseMigrationServiceMigrationJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a>

---


### DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference <a name="DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.database_migration_service_migration_job.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference;

new DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpc` <a name="resetVpc" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resetVpc"></a>

```java
public void resetVpc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpcInput">vpcInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpc">vpc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpcInput"></a>

```java
public java.lang.String getVpcInput();
```

- *Type:* java.lang.String

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpc"></a>

```java
public java.lang.String getVpc();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

---



