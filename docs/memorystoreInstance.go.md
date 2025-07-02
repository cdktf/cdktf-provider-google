# `memorystoreInstance` Submodule <a name="`memorystoreInstance` Submodule" id="@cdktf/provider-google.memorystoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemorystoreInstance <a name="MemorystoreInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance google_memorystore_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstance(scope Construct, id *string, config MemorystoreInstanceConfig) MemorystoreInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig">MemorystoreInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig">MemorystoreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putAutomatedBackupConfig">PutAutomatedBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putCrossInstanceReplicationConfig">PutCrossInstanceReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putDesiredAutoCreatedEndpoints">PutDesiredAutoCreatedEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putDesiredPscAutoConnections">PutDesiredPscAutoConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putGcsSource">PutGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putMaintenancePolicy">PutMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putManagedBackupSource">PutManagedBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putPersistenceConfig">PutPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putZoneDistributionConfig">PutZoneDistributionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetAuthorizationMode">ResetAuthorizationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetAutomatedBackupConfig">ResetAutomatedBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetCrossInstanceReplicationConfig">ResetCrossInstanceReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetDesiredAutoCreatedEndpoints">ResetDesiredAutoCreatedEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetDesiredPscAutoConnections">ResetDesiredPscAutoConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetEngineConfigs">ResetEngineConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetGcsSource">ResetGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetMaintenancePolicy">ResetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetManagedBackupSource">ResetManagedBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetNodeType">ResetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetPersistenceConfig">ResetPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetReplicaCount">ResetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetTransitEncryptionMode">ResetTransitEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetZoneDistributionConfig">ResetZoneDistributionConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutomatedBackupConfig` <a name="PutAutomatedBackupConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putAutomatedBackupConfig"></a>

```go
func PutAutomatedBackupConfig(value MemorystoreInstanceAutomatedBackupConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putAutomatedBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig">MemorystoreInstanceAutomatedBackupConfig</a>

---

##### `PutCrossInstanceReplicationConfig` <a name="PutCrossInstanceReplicationConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putCrossInstanceReplicationConfig"></a>

```go
func PutCrossInstanceReplicationConfig(value MemorystoreInstanceCrossInstanceReplicationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putCrossInstanceReplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig">MemorystoreInstanceCrossInstanceReplicationConfig</a>

---

##### `PutDesiredAutoCreatedEndpoints` <a name="PutDesiredAutoCreatedEndpoints" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putDesiredAutoCreatedEndpoints"></a>

```go
func PutDesiredAutoCreatedEndpoints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putDesiredAutoCreatedEndpoints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDesiredPscAutoConnections` <a name="PutDesiredPscAutoConnections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putDesiredPscAutoConnections"></a>

```go
func PutDesiredPscAutoConnections(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putDesiredPscAutoConnections.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGcsSource` <a name="PutGcsSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putGcsSource"></a>

```go
func PutGcsSource(value MemorystoreInstanceGcsSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putGcsSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource">MemorystoreInstanceGcsSource</a>

---

##### `PutMaintenancePolicy` <a name="PutMaintenancePolicy" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putMaintenancePolicy"></a>

```go
func PutMaintenancePolicy(value MemorystoreInstanceMaintenancePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy">MemorystoreInstanceMaintenancePolicy</a>

---

##### `PutManagedBackupSource` <a name="PutManagedBackupSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putManagedBackupSource"></a>

```go
func PutManagedBackupSource(value MemorystoreInstanceManagedBackupSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putManagedBackupSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource">MemorystoreInstanceManagedBackupSource</a>

---

##### `PutPersistenceConfig` <a name="PutPersistenceConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putPersistenceConfig"></a>

```go
func PutPersistenceConfig(value MemorystoreInstancePersistenceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putPersistenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig">MemorystoreInstancePersistenceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putTimeouts"></a>

```go
func PutTimeouts(value MemorystoreInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts">MemorystoreInstanceTimeouts</a>

---

##### `PutZoneDistributionConfig` <a name="PutZoneDistributionConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putZoneDistributionConfig"></a>

```go
func PutZoneDistributionConfig(value MemorystoreInstanceZoneDistributionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putZoneDistributionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig">MemorystoreInstanceZoneDistributionConfig</a>

---

##### `ResetAuthorizationMode` <a name="ResetAuthorizationMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetAuthorizationMode"></a>

```go
func ResetAuthorizationMode()
```

##### `ResetAutomatedBackupConfig` <a name="ResetAutomatedBackupConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetAutomatedBackupConfig"></a>

```go
func ResetAutomatedBackupConfig()
```

##### `ResetCrossInstanceReplicationConfig` <a name="ResetCrossInstanceReplicationConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetCrossInstanceReplicationConfig"></a>

```go
func ResetCrossInstanceReplicationConfig()
```

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetDeletionProtectionEnabled"></a>

```go
func ResetDeletionProtectionEnabled()
```

##### `ResetDesiredAutoCreatedEndpoints` <a name="ResetDesiredAutoCreatedEndpoints" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetDesiredAutoCreatedEndpoints"></a>

```go
func ResetDesiredAutoCreatedEndpoints()
```

##### `ResetDesiredPscAutoConnections` <a name="ResetDesiredPscAutoConnections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetDesiredPscAutoConnections"></a>

```go
func ResetDesiredPscAutoConnections()
```

##### `ResetEngineConfigs` <a name="ResetEngineConfigs" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetEngineConfigs"></a>

```go
func ResetEngineConfigs()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetGcsSource` <a name="ResetGcsSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetGcsSource"></a>

```go
func ResetGcsSource()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaintenancePolicy` <a name="ResetMaintenancePolicy" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetMaintenancePolicy"></a>

```go
func ResetMaintenancePolicy()
```

##### `ResetManagedBackupSource` <a name="ResetManagedBackupSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetManagedBackupSource"></a>

```go
func ResetManagedBackupSource()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetMode"></a>

```go
func ResetMode()
```

##### `ResetNodeType` <a name="ResetNodeType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetNodeType"></a>

```go
func ResetNodeType()
```

##### `ResetPersistenceConfig` <a name="ResetPersistenceConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetPersistenceConfig"></a>

```go
func ResetPersistenceConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetReplicaCount` <a name="ResetReplicaCount" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetReplicaCount"></a>

```go
func ResetReplicaCount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransitEncryptionMode` <a name="ResetTransitEncryptionMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetTransitEncryptionMode"></a>

```go
func ResetTransitEncryptionMode()
```

##### `ResetZoneDistributionConfig` <a name="ResetZoneDistributionConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetZoneDistributionConfig"></a>

```go
func ResetZoneDistributionConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MemorystoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.MemorystoreInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.MemorystoreInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.MemorystoreInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.MemorystoreInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MemorystoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MemorystoreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MemorystoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MemorystoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.automatedBackupConfig">AutomatedBackupConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference">MemorystoreInstanceAutomatedBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.backupCollection">BackupCollection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.crossInstanceReplicationConfig">CrossInstanceReplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference">MemorystoreInstanceCrossInstanceReplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.desiredAutoCreatedEndpoints">DesiredAutoCreatedEndpoints</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList">MemorystoreInstanceDesiredAutoCreatedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.desiredPscAutoConnections">DesiredPscAutoConnections</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList">MemorystoreInstanceDesiredPscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.discoveryEndpoints">DiscoveryEndpoints</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList">MemorystoreInstanceDiscoveryEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList">MemorystoreInstanceEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.gcsSource">GcsSource</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference">MemorystoreInstanceGcsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference">MemorystoreInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList">MemorystoreInstanceMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.managedBackupSource">ManagedBackupSource</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference">MemorystoreInstanceManagedBackupSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList">MemorystoreInstanceNodeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.persistenceConfig">PersistenceConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference">MemorystoreInstancePersistenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.pscAttachmentDetails">PscAttachmentDetails</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList">MemorystoreInstancePscAttachmentDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.pscAutoConnections">PscAutoConnections</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList">MemorystoreInstancePscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.stateInfo">StateInfo</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList">MemorystoreInstanceStateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference">MemorystoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.zoneDistributionConfig">ZoneDistributionConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference">MemorystoreInstanceZoneDistributionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.authorizationModeInput">AuthorizationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.automatedBackupConfigInput">AutomatedBackupConfigInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig">MemorystoreInstanceAutomatedBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.crossInstanceReplicationConfigInput">CrossInstanceReplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig">MemorystoreInstanceCrossInstanceReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.desiredAutoCreatedEndpointsInput">DesiredAutoCreatedEndpointsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.desiredPscAutoConnectionsInput">DesiredPscAutoConnectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.engineConfigsInput">EngineConfigsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.gcsSourceInput">GcsSourceInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource">MemorystoreInstanceGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.maintenancePolicyInput">MaintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy">MemorystoreInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.managedBackupSourceInput">ManagedBackupSourceInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource">MemorystoreInstanceManagedBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.nodeTypeInput">NodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.persistenceConfigInput">PersistenceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig">MemorystoreInstancePersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.replicaCountInput">ReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.shardCountInput">ShardCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.transitEncryptionModeInput">TransitEncryptionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.zoneDistributionConfigInput">ZoneDistributionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig">MemorystoreInstanceZoneDistributionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.authorizationMode">AuthorizationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.engineConfigs">EngineConfigs</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.shardCount">ShardCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.transitEncryptionMode">TransitEncryptionMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutomatedBackupConfig`<sup>Required</sup> <a name="AutomatedBackupConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.automatedBackupConfig"></a>

```go
func AutomatedBackupConfig() MemorystoreInstanceAutomatedBackupConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference">MemorystoreInstanceAutomatedBackupConfigOutputReference</a>

---

##### `BackupCollection`<sup>Required</sup> <a name="BackupCollection" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.backupCollection"></a>

```go
func BackupCollection() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CrossInstanceReplicationConfig`<sup>Required</sup> <a name="CrossInstanceReplicationConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.crossInstanceReplicationConfig"></a>

```go
func CrossInstanceReplicationConfig() MemorystoreInstanceCrossInstanceReplicationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference">MemorystoreInstanceCrossInstanceReplicationConfigOutputReference</a>

---

##### `DesiredAutoCreatedEndpoints`<sup>Required</sup> <a name="DesiredAutoCreatedEndpoints" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.desiredAutoCreatedEndpoints"></a>

```go
func DesiredAutoCreatedEndpoints() MemorystoreInstanceDesiredAutoCreatedEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList">MemorystoreInstanceDesiredAutoCreatedEndpointsList</a>

---

##### `DesiredPscAutoConnections`<sup>Required</sup> <a name="DesiredPscAutoConnections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.desiredPscAutoConnections"></a>

```go
func DesiredPscAutoConnections() MemorystoreInstanceDesiredPscAutoConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList">MemorystoreInstanceDesiredPscAutoConnectionsList</a>

---

##### `DiscoveryEndpoints`<sup>Required</sup> <a name="DiscoveryEndpoints" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.discoveryEndpoints"></a>

```go
func DiscoveryEndpoints() MemorystoreInstanceDiscoveryEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList">MemorystoreInstanceDiscoveryEndpointsList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.endpoints"></a>

```go
func Endpoints() MemorystoreInstanceEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList">MemorystoreInstanceEndpointsList</a>

---

##### `GcsSource`<sup>Required</sup> <a name="GcsSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.gcsSource"></a>

```go
func GcsSource() MemorystoreInstanceGcsSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference">MemorystoreInstanceGcsSourceOutputReference</a>

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.maintenancePolicy"></a>

```go
func MaintenancePolicy() MemorystoreInstanceMaintenancePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference">MemorystoreInstanceMaintenancePolicyOutputReference</a>

---

##### `MaintenanceSchedule`<sup>Required</sup> <a name="MaintenanceSchedule" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.maintenanceSchedule"></a>

```go
func MaintenanceSchedule() MemorystoreInstanceMaintenanceScheduleList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList">MemorystoreInstanceMaintenanceScheduleList</a>

---

##### `ManagedBackupSource`<sup>Required</sup> <a name="ManagedBackupSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.managedBackupSource"></a>

```go
func ManagedBackupSource() MemorystoreInstanceManagedBackupSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference">MemorystoreInstanceManagedBackupSourceOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.nodeConfig"></a>

```go
func NodeConfig() MemorystoreInstanceNodeConfigList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList">MemorystoreInstanceNodeConfigList</a>

---

##### `PersistenceConfig`<sup>Required</sup> <a name="PersistenceConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.persistenceConfig"></a>

```go
func PersistenceConfig() MemorystoreInstancePersistenceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference">MemorystoreInstancePersistenceConfigOutputReference</a>

---

##### `PscAttachmentDetails`<sup>Required</sup> <a name="PscAttachmentDetails" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.pscAttachmentDetails"></a>

```go
func PscAttachmentDetails() MemorystoreInstancePscAttachmentDetailsList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList">MemorystoreInstancePscAttachmentDetailsList</a>

---

##### `PscAutoConnections`<sup>Required</sup> <a name="PscAutoConnections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.pscAutoConnections"></a>

```go
func PscAutoConnections() MemorystoreInstancePscAutoConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList">MemorystoreInstancePscAutoConnectionsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateInfo`<sup>Required</sup> <a name="StateInfo" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.stateInfo"></a>

```go
func StateInfo() MemorystoreInstanceStateInfoList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList">MemorystoreInstanceStateInfoList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.timeouts"></a>

```go
func Timeouts() MemorystoreInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference">MemorystoreInstanceTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ZoneDistributionConfig`<sup>Required</sup> <a name="ZoneDistributionConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.zoneDistributionConfig"></a>

```go
func ZoneDistributionConfig() MemorystoreInstanceZoneDistributionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference">MemorystoreInstanceZoneDistributionConfigOutputReference</a>

---

##### `AuthorizationModeInput`<sup>Optional</sup> <a name="AuthorizationModeInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.authorizationModeInput"></a>

```go
func AuthorizationModeInput() *string
```

- *Type:* *string

---

##### `AutomatedBackupConfigInput`<sup>Optional</sup> <a name="AutomatedBackupConfigInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.automatedBackupConfigInput"></a>

```go
func AutomatedBackupConfigInput() MemorystoreInstanceAutomatedBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig">MemorystoreInstanceAutomatedBackupConfig</a>

---

##### `CrossInstanceReplicationConfigInput`<sup>Optional</sup> <a name="CrossInstanceReplicationConfigInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.crossInstanceReplicationConfigInput"></a>

```go
func CrossInstanceReplicationConfigInput() MemorystoreInstanceCrossInstanceReplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig">MemorystoreInstanceCrossInstanceReplicationConfig</a>

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.deletionProtectionEnabledInput"></a>

```go
func DeletionProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DesiredAutoCreatedEndpointsInput`<sup>Optional</sup> <a name="DesiredAutoCreatedEndpointsInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.desiredAutoCreatedEndpointsInput"></a>

```go
func DesiredAutoCreatedEndpointsInput() interface{}
```

- *Type:* interface{}

---

##### `DesiredPscAutoConnectionsInput`<sup>Optional</sup> <a name="DesiredPscAutoConnectionsInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.desiredPscAutoConnectionsInput"></a>

```go
func DesiredPscAutoConnectionsInput() interface{}
```

- *Type:* interface{}

---

##### `EngineConfigsInput`<sup>Optional</sup> <a name="EngineConfigsInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.engineConfigsInput"></a>

```go
func EngineConfigsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `GcsSourceInput`<sup>Optional</sup> <a name="GcsSourceInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.gcsSourceInput"></a>

```go
func GcsSourceInput() MemorystoreInstanceGcsSource
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource">MemorystoreInstanceGcsSource</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaintenancePolicyInput`<sup>Optional</sup> <a name="MaintenancePolicyInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.maintenancePolicyInput"></a>

```go
func MaintenancePolicyInput() MemorystoreInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy">MemorystoreInstanceMaintenancePolicy</a>

---

##### `ManagedBackupSourceInput`<sup>Optional</sup> <a name="ManagedBackupSourceInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.managedBackupSourceInput"></a>

```go
func ManagedBackupSourceInput() MemorystoreInstanceManagedBackupSource
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource">MemorystoreInstanceManagedBackupSource</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.nodeTypeInput"></a>

```go
func NodeTypeInput() *string
```

- *Type:* *string

---

##### `PersistenceConfigInput`<sup>Optional</sup> <a name="PersistenceConfigInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.persistenceConfigInput"></a>

```go
func PersistenceConfigInput() MemorystoreInstancePersistenceConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig">MemorystoreInstancePersistenceConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReplicaCountInput`<sup>Optional</sup> <a name="ReplicaCountInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.replicaCountInput"></a>

```go
func ReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `ShardCountInput`<sup>Optional</sup> <a name="ShardCountInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.shardCountInput"></a>

```go
func ShardCountInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransitEncryptionModeInput`<sup>Optional</sup> <a name="TransitEncryptionModeInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.transitEncryptionModeInput"></a>

```go
func TransitEncryptionModeInput() *string
```

- *Type:* *string

---

##### `ZoneDistributionConfigInput`<sup>Optional</sup> <a name="ZoneDistributionConfigInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.zoneDistributionConfigInput"></a>

```go
func ZoneDistributionConfigInput() MemorystoreInstanceZoneDistributionConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig">MemorystoreInstanceZoneDistributionConfig</a>

---

##### `AuthorizationMode`<sup>Required</sup> <a name="AuthorizationMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.authorizationMode"></a>

```go
func AuthorizationMode() *string
```

- *Type:* *string

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.deletionProtectionEnabled"></a>

```go
func DeletionProtectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `EngineConfigs`<sup>Required</sup> <a name="EngineConfigs" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.engineConfigs"></a>

```go
func EngineConfigs() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.replicaCount"></a>

```go
func ReplicaCount() *f64
```

- *Type:* *f64

---

##### `ShardCount`<sup>Required</sup> <a name="ShardCount" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.shardCount"></a>

```go
func ShardCount() *f64
```

- *Type:* *f64

---

##### `TransitEncryptionMode`<sup>Required</sup> <a name="TransitEncryptionMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.transitEncryptionMode"></a>

```go
func TransitEncryptionMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MemorystoreInstanceAutomatedBackupConfig <a name="MemorystoreInstanceAutomatedBackupConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceAutomatedBackupConfig {
	FixedFrequencySchedule: github.com/cdktf/cdktf-provider-google-go/google/v16.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule,
	Retention: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig.property.fixedFrequencySchedule">FixedFrequencySchedule</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a></code> | fixed_frequency_schedule block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig.property.retention">Retention</a></code> | <code>*string</code> | How long to keep automated backups before the backups are deleted. |

---

##### `FixedFrequencySchedule`<sup>Required</sup> <a name="FixedFrequencySchedule" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig.property.fixedFrequencySchedule"></a>

```go
FixedFrequencySchedule MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a>

fixed_frequency_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#fixed_frequency_schedule MemorystoreInstance#fixed_frequency_schedule}

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig.property.retention"></a>

```go
Retention *string
```

- *Type:* *string

How long to keep automated backups before the backups are deleted.

The value should be between 1 day and 365 days. If not specified, the default value is 35 days.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". The default_value is "3024000s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#retention MemorystoreInstance#retention}

---

### MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule <a name="MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule {
	StartTime: github.com/cdktf/cdktf-provider-google-go/google/v16.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a></code> | start_time block. |

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule.property.startTime"></a>

```go
StartTime MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#start_time MemorystoreInstance#start_time}

---

### MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime <a name="MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime {
	Hours: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime.property.hours">Hours</a></code> | <code>*f64</code> | Hours of a day in 24 hour format. |

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and typically must be less than or equal to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#hours MemorystoreInstance#hours}

---

### MemorystoreInstanceConfig <a name="MemorystoreInstanceConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceId: *string,
	Location: *string,
	ShardCount: *f64,
	AuthorizationMode: *string,
	AutomatedBackupConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig,
	CrossInstanceReplicationConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig,
	DeletionProtectionEnabled: interface{},
	DesiredAutoCreatedEndpoints: interface{},
	DesiredPscAutoConnections: interface{},
	EngineConfigs: *map[string]*string,
	EngineVersion: *string,
	GcsSource: github.com/cdktf/cdktf-provider-google-go/google/v16.memorystoreInstance.MemorystoreInstanceGcsSource,
	Id: *string,
	KmsKey: *string,
	Labels: *map[string]*string,
	MaintenancePolicy: github.com/cdktf/cdktf-provider-google-go/google/v16.memorystoreInstance.MemorystoreInstanceMaintenancePolicy,
	ManagedBackupSource: github.com/cdktf/cdktf-provider-google-go/google/v16.memorystoreInstance.MemorystoreInstanceManagedBackupSource,
	Mode: *string,
	NodeType: *string,
	PersistenceConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.memorystoreInstance.MemorystoreInstancePersistenceConfig,
	Project: *string,
	ReplicaCount: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.memorystoreInstance.MemorystoreInstanceTimeouts,
	TransitEncryptionMode: *string,
	ZoneDistributionConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | Required. The ID to use for the instance, which will become the final component of the instance's resource name. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.shardCount">ShardCount</a></code> | <code>*f64</code> | Required. Number of shards for the instance. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.authorizationMode">AuthorizationMode</a></code> | <code>*string</code> | Optional. Immutable. Authorization mode of the instance. Possible values:  AUTH_DISABLED IAM_AUTH. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.automatedBackupConfig">AutomatedBackupConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig">MemorystoreInstanceAutomatedBackupConfig</a></code> | automated_backup_config block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.crossInstanceReplicationConfig">CrossInstanceReplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig">MemorystoreInstanceCrossInstanceReplicationConfig</a></code> | cross_instance_replication_config block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | Optional. If set to true deletion of the instance will fail. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.desiredAutoCreatedEndpoints">DesiredAutoCreatedEndpoints</a></code> | <code>interface{}</code> | desired_auto_created_endpoints block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.desiredPscAutoConnections">DesiredPscAutoConnections</a></code> | <code>interface{}</code> | desired_psc_auto_connections block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.engineConfigs">EngineConfigs</a></code> | <code>*map[string]*string</code> | Optional. User-provided engine configurations for the instance. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | Optional. Engine version of the instance. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.gcsSource">GcsSource</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource">MemorystoreInstanceGcsSource</a></code> | gcs_source block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#id MemorystoreInstance#id}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The KMS key used to encrypt the at-rest data of the cluster. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. Labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy">MemorystoreInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.managedBackupSource">ManagedBackupSource</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource">MemorystoreInstanceManagedBackupSource</a></code> | managed_backup_source block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.mode">Mode</a></code> | <code>*string</code> | Optional. cluster or cluster-disabled.   Possible values:  CLUSTER  CLUSTER_DISABLED Possible values: ["CLUSTER", "CLUSTER_DISABLED"]. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.nodeType">NodeType</a></code> | <code>*string</code> | Optional. Machine type for individual nodes of the instance.   Possible values:  SHARED_CORE_NANO HIGHMEM_MEDIUM HIGHMEM_XLARGE STANDARD_SMALL. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.persistenceConfig">PersistenceConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig">MemorystoreInstancePersistenceConfig</a></code> | persistence_config block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#project MemorystoreInstance#project}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | Optional. Number of replica nodes per shard. If omitted the default is 0 replicas. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts">MemorystoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.transitEncryptionMode">TransitEncryptionMode</a></code> | <code>*string</code> | Optional. Immutable. In-transit encryption mode of the instance.   Possible values:  TRANSIT_ENCRYPTION_DISABLED SERVER_AUTHENTICATION. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.zoneDistributionConfig">ZoneDistributionConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig">MemorystoreInstanceZoneDistributionConfig</a></code> | zone_distribution_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Required. The ID to use for the instance, which will become the final component of the instance's resource name.

This value is subject to the following restrictions:

* Must be 4-63 characters in length
* Must begin with a letter or digit
* Must contain only lowercase letters, digits, and hyphens
* Must not end with a hyphen
* Must be unique within a location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#instance_id MemorystoreInstance#instance_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'memorystore.googleapis.com/CertificateAuthority'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#location MemorystoreInstance#location}

---

##### `ShardCount`<sup>Required</sup> <a name="ShardCount" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.shardCount"></a>

```go
ShardCount *f64
```

- *Type:* *f64

Required. Number of shards for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#shard_count MemorystoreInstance#shard_count}

---

##### `AuthorizationMode`<sup>Optional</sup> <a name="AuthorizationMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.authorizationMode"></a>

```go
AuthorizationMode *string
```

- *Type:* *string

Optional. Immutable. Authorization mode of the instance. Possible values:  AUTH_DISABLED IAM_AUTH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#authorization_mode MemorystoreInstance#authorization_mode}

---

##### `AutomatedBackupConfig`<sup>Optional</sup> <a name="AutomatedBackupConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.automatedBackupConfig"></a>

```go
AutomatedBackupConfig MemorystoreInstanceAutomatedBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig">MemorystoreInstanceAutomatedBackupConfig</a>

automated_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#automated_backup_config MemorystoreInstance#automated_backup_config}

---

##### `CrossInstanceReplicationConfig`<sup>Optional</sup> <a name="CrossInstanceReplicationConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.crossInstanceReplicationConfig"></a>

```go
CrossInstanceReplicationConfig MemorystoreInstanceCrossInstanceReplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig">MemorystoreInstanceCrossInstanceReplicationConfig</a>

cross_instance_replication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#cross_instance_replication_config MemorystoreInstance#cross_instance_replication_config}

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.deletionProtectionEnabled"></a>

```go
DeletionProtectionEnabled interface{}
```

- *Type:* interface{}

Optional. If set to true deletion of the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#deletion_protection_enabled MemorystoreInstance#deletion_protection_enabled}

---

##### `DesiredAutoCreatedEndpoints`<sup>Optional</sup> <a name="DesiredAutoCreatedEndpoints" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.desiredAutoCreatedEndpoints"></a>

```go
DesiredAutoCreatedEndpoints interface{}
```

- *Type:* interface{}

desired_auto_created_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#desired_auto_created_endpoints MemorystoreInstance#desired_auto_created_endpoints}

---

##### `DesiredPscAutoConnections`<sup>Optional</sup> <a name="DesiredPscAutoConnections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.desiredPscAutoConnections"></a>

```go
DesiredPscAutoConnections interface{}
```

- *Type:* interface{}

desired_psc_auto_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#desired_psc_auto_connections MemorystoreInstance#desired_psc_auto_connections}

---

##### `EngineConfigs`<sup>Optional</sup> <a name="EngineConfigs" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.engineConfigs"></a>

```go
EngineConfigs *map[string]*string
```

- *Type:* *map[string]*string

Optional. User-provided engine configurations for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#engine_configs MemorystoreInstance#engine_configs}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

Optional. Engine version of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#engine_version MemorystoreInstance#engine_version}

---

##### `GcsSource`<sup>Optional</sup> <a name="GcsSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.gcsSource"></a>

```go
GcsSource MemorystoreInstanceGcsSource
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource">MemorystoreInstanceGcsSource</a>

gcs_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#gcs_source MemorystoreInstance#gcs_source}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#id MemorystoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The KMS key used to encrypt the at-rest data of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#kms_key MemorystoreInstance#kms_key}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. Labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#labels MemorystoreInstance#labels}

---

##### `MaintenancePolicy`<sup>Optional</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.maintenancePolicy"></a>

```go
MaintenancePolicy MemorystoreInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy">MemorystoreInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#maintenance_policy MemorystoreInstance#maintenance_policy}

---

##### `ManagedBackupSource`<sup>Optional</sup> <a name="ManagedBackupSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.managedBackupSource"></a>

```go
ManagedBackupSource MemorystoreInstanceManagedBackupSource
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource">MemorystoreInstanceManagedBackupSource</a>

managed_backup_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#managed_backup_source MemorystoreInstance#managed_backup_source}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Optional. cluster or cluster-disabled.   Possible values:  CLUSTER  CLUSTER_DISABLED Possible values: ["CLUSTER", "CLUSTER_DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#mode MemorystoreInstance#mode}

---

##### `NodeType`<sup>Optional</sup> <a name="NodeType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.nodeType"></a>

```go
NodeType *string
```

- *Type:* *string

Optional. Machine type for individual nodes of the instance.   Possible values:  SHARED_CORE_NANO HIGHMEM_MEDIUM HIGHMEM_XLARGE STANDARD_SMALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#node_type MemorystoreInstance#node_type}

---

##### `PersistenceConfig`<sup>Optional</sup> <a name="PersistenceConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.persistenceConfig"></a>

```go
PersistenceConfig MemorystoreInstancePersistenceConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig">MemorystoreInstancePersistenceConfig</a>

persistence_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#persistence_config MemorystoreInstance#persistence_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#project MemorystoreInstance#project}.

---

##### `ReplicaCount`<sup>Optional</sup> <a name="ReplicaCount" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.replicaCount"></a>

```go
ReplicaCount *f64
```

- *Type:* *f64

Optional. Number of replica nodes per shard. If omitted the default is 0 replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#replica_count MemorystoreInstance#replica_count}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.timeouts"></a>

```go
Timeouts MemorystoreInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts">MemorystoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#timeouts MemorystoreInstance#timeouts}

---

##### `TransitEncryptionMode`<sup>Optional</sup> <a name="TransitEncryptionMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.transitEncryptionMode"></a>

```go
TransitEncryptionMode *string
```

- *Type:* *string

Optional. Immutable. In-transit encryption mode of the instance.   Possible values:  TRANSIT_ENCRYPTION_DISABLED SERVER_AUTHENTICATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#transit_encryption_mode MemorystoreInstance#transit_encryption_mode}

---

##### `ZoneDistributionConfig`<sup>Optional</sup> <a name="ZoneDistributionConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.zoneDistributionConfig"></a>

```go
ZoneDistributionConfig MemorystoreInstanceZoneDistributionConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig">MemorystoreInstanceZoneDistributionConfig</a>

zone_distribution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#zone_distribution_config MemorystoreInstance#zone_distribution_config}

---

### MemorystoreInstanceCrossInstanceReplicationConfig <a name="MemorystoreInstanceCrossInstanceReplicationConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceCrossInstanceReplicationConfig {
	InstanceRole: *string,
	PrimaryInstance: github.com/cdktf/cdktf-provider-google-go/google/v16.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance,
	SecondaryInstances: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig.property.instanceRole">InstanceRole</a></code> | <code>*string</code> | The instance role supports the following values: 1. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig.property.primaryInstance">PrimaryInstance</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a></code> | primary_instance block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig.property.secondaryInstances">SecondaryInstances</a></code> | <code>interface{}</code> | secondary_instances block. |

---

##### `InstanceRole`<sup>Optional</sup> <a name="InstanceRole" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig.property.instanceRole"></a>

```go
InstanceRole *string
```

- *Type:* *string

The instance role supports the following values: 1.

'INSTANCE_ROLE_UNSPECIFIED': This is an independent instance that has never participated in cross instance replication. It allows both reads and writes.
2. 'NONE': This is an independent instance that previously participated in cross instance replication(either as a 'PRIMARY' or 'SECONDARY' cluster). It allows both reads and writes.
3. 'PRIMARY': This instance serves as the replication source for secondary instance that are replicating from it. Any data written to it is automatically replicated to its secondary clusters. It allows both reads and writes.
4. 'SECONDARY': This instance replicates data from the primary instance. It allows only reads. Possible values: ["INSTANCE_ROLE_UNSPECIFIED", "NONE", "PRIMARY", "SECONDARY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#instance_role MemorystoreInstance#instance_role}

---

##### `PrimaryInstance`<sup>Optional</sup> <a name="PrimaryInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig.property.primaryInstance"></a>

```go
PrimaryInstance MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a>

primary_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#primary_instance MemorystoreInstance#primary_instance}

---

##### `SecondaryInstances`<sup>Optional</sup> <a name="SecondaryInstances" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig.property.secondaryInstances"></a>

```go
SecondaryInstances interface{}
```

- *Type:* interface{}

secondary_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#secondary_instances MemorystoreInstance#secondary_instances}

---

### MemorystoreInstanceCrossInstanceReplicationConfigMembership <a name="MemorystoreInstanceCrossInstanceReplicationConfigMembership" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembership"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembership.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceCrossInstanceReplicationConfigMembership {

}
```


### MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance <a name="MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance {

}
```


### MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance <a name="MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance {

}
```


### MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance <a name="MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance {
	Instance: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance.property.instance">Instance</a></code> | <code>*string</code> | The full resource path of the primary instance in the format: projects/{project}/locations/{region}/instances/{instance-id}. |

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The full resource path of the primary instance in the format: projects/{project}/locations/{region}/instances/{instance-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#instance MemorystoreInstance#instance}

---

### MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances <a name="MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances {
	Instance: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances.property.instance">Instance</a></code> | <code>*string</code> | The full resource path of the Nth instance in the format: projects/{project}/locations/{region}/instance/{instance-id}. |

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The full resource path of the Nth instance in the format: projects/{project}/locations/{region}/instance/{instance-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#instance MemorystoreInstance#instance}

---

### MemorystoreInstanceDesiredAutoCreatedEndpoints <a name="MemorystoreInstanceDesiredAutoCreatedEndpoints" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceDesiredAutoCreatedEndpoints {
	Network: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpoints.property.network">Network</a></code> | <code>*string</code> | Required. The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpoints.property.projectId">ProjectId</a></code> | <code>*string</code> | Required. The consumer project_id where the forwarding rule is created from. |

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpoints.property.network"></a>

```go
Network *string
```

- *Type:* *string

Required. The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#network MemorystoreInstance#network}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpoints.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Required. The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#project_id MemorystoreInstance#project_id}

---

### MemorystoreInstanceDesiredPscAutoConnections <a name="MemorystoreInstanceDesiredPscAutoConnections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceDesiredPscAutoConnections {
	Network: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections.property.network">Network</a></code> | <code>*string</code> | Required. The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections.property.projectId">ProjectId</a></code> | <code>*string</code> | Required. The consumer project_id where the forwarding rule is created from. |

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections.property.network"></a>

```go
Network *string
```

- *Type:* *string

Required. The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#network MemorystoreInstance#network}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Required. The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#project_id MemorystoreInstance#project_id}

---

### MemorystoreInstanceDiscoveryEndpoints <a name="MemorystoreInstanceDiscoveryEndpoints" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceDiscoveryEndpoints {

}
```


### MemorystoreInstanceEndpoints <a name="MemorystoreInstanceEndpoints" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceEndpoints {

}
```


### MemorystoreInstanceEndpointsConnections <a name="MemorystoreInstanceEndpointsConnections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceEndpointsConnections {

}
```


### MemorystoreInstanceEndpointsConnectionsPscAutoConnection <a name="MemorystoreInstanceEndpointsConnectionsPscAutoConnection" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnection {

}
```


### MemorystoreInstanceGcsSource <a name="MemorystoreInstanceGcsSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceGcsSource {
	Uris: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource.property.uris">Uris</a></code> | <code>*[]*string</code> | URIs of the GCS objects to import. Example: gs://bucket1/object1, gs://bucket2/folder2/object2. |

---

##### `Uris`<sup>Required</sup> <a name="Uris" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource.property.uris"></a>

```go
Uris *[]*string
```

- *Type:* *[]*string

URIs of the GCS objects to import. Example: gs://bucket1/object1, gs://bucket2/folder2/object2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#uris MemorystoreInstance#uris}

---

### MemorystoreInstanceMaintenancePolicy <a name="MemorystoreInstanceMaintenancePolicy" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceMaintenancePolicy {
	WeeklyMaintenanceWindow: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy.property.weeklyMaintenanceWindow">WeeklyMaintenanceWindow</a></code> | <code>interface{}</code> | weekly_maintenance_window block. |

---

##### `WeeklyMaintenanceWindow`<sup>Optional</sup> <a name="WeeklyMaintenanceWindow" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy.property.weeklyMaintenanceWindow"></a>

```go
WeeklyMaintenanceWindow interface{}
```

- *Type:* interface{}

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#weekly_maintenance_window MemorystoreInstance#weekly_maintenance_window}

---

### MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow <a name="MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow {
	Day: *string,
	StartTime: github.com/cdktf/cdktf-provider-google-go/google/v16.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day">Day</a></code> | <code>*string</code> | The day of week that maintenance updates occur. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day"></a>

```go
Day *string
```

- *Type:* *string

The day of week that maintenance updates occur.

* DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#day MemorystoreInstance#day}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime"></a>

```go
StartTime MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#start_time MemorystoreInstance#start_time}

---

### MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime {
	Hours: *f64,
	Minutes: *f64,
	Nanos: *f64,
	Seconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours">Hours</a></code> | <code>*f64</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes">Minutes</a></code> | <code>*f64</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos">Nanos</a></code> | <code>*f64</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds">Seconds</a></code> | <code>*f64</code> | Seconds of minutes of the time. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#hours MemorystoreInstance#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes"></a>

```go
Minutes *f64
```

- *Type:* *f64

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#minutes MemorystoreInstance#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#nanos MemorystoreInstance#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#seconds MemorystoreInstance#seconds}

---

### MemorystoreInstanceMaintenanceSchedule <a name="MemorystoreInstanceMaintenanceSchedule" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceMaintenanceSchedule {

}
```


### MemorystoreInstanceManagedBackupSource <a name="MemorystoreInstanceManagedBackupSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceManagedBackupSource {
	Backup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource.property.backup">Backup</a></code> | <code>*string</code> | Example: 'projects/{project}/locations/{location}/backupCollections/{collection}/backups/{backup}'. |

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource.property.backup"></a>

```go
Backup *string
```

- *Type:* *string

Example: 'projects/{project}/locations/{location}/backupCollections/{collection}/backups/{backup}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#backup MemorystoreInstance#backup}

---

### MemorystoreInstanceNodeConfig <a name="MemorystoreInstanceNodeConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceNodeConfig {

}
```


### MemorystoreInstancePersistenceConfig <a name="MemorystoreInstancePersistenceConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstancePersistenceConfig {
	AofConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig,
	Mode: *string,
	RdbConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig.property.aofConfig">AofConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig">MemorystoreInstancePersistenceConfigAofConfig</a></code> | aof_config block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig.property.mode">Mode</a></code> | <code>*string</code> | Optional. Current persistence mode.   Possible values: DISABLED RDB AOF Possible values: ["DISABLED", "RDB", "AOF"]. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig.property.rdbConfig">RdbConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig">MemorystoreInstancePersistenceConfigRdbConfig</a></code> | rdb_config block. |

---

##### `AofConfig`<sup>Optional</sup> <a name="AofConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig.property.aofConfig"></a>

```go
AofConfig MemorystoreInstancePersistenceConfigAofConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig">MemorystoreInstancePersistenceConfigAofConfig</a>

aof_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#aof_config MemorystoreInstance#aof_config}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Optional. Current persistence mode.   Possible values: DISABLED RDB AOF Possible values: ["DISABLED", "RDB", "AOF"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#mode MemorystoreInstance#mode}

---

##### `RdbConfig`<sup>Optional</sup> <a name="RdbConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig.property.rdbConfig"></a>

```go
RdbConfig MemorystoreInstancePersistenceConfigRdbConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig">MemorystoreInstancePersistenceConfigRdbConfig</a>

rdb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#rdb_config MemorystoreInstance#rdb_config}

---

### MemorystoreInstancePersistenceConfigAofConfig <a name="MemorystoreInstancePersistenceConfigAofConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstancePersistenceConfigAofConfig {
	AppendFsync: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig.property.appendFsync">AppendFsync</a></code> | <code>*string</code> | Optional. The fsync mode.   Possible values:  NEVER EVERY_SEC ALWAYS. |

---

##### `AppendFsync`<sup>Optional</sup> <a name="AppendFsync" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig.property.appendFsync"></a>

```go
AppendFsync *string
```

- *Type:* *string

Optional. The fsync mode.   Possible values:  NEVER EVERY_SEC ALWAYS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#append_fsync MemorystoreInstance#append_fsync}

---

### MemorystoreInstancePersistenceConfigRdbConfig <a name="MemorystoreInstancePersistenceConfigRdbConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstancePersistenceConfigRdbConfig {
	RdbSnapshotPeriod: *string,
	RdbSnapshotStartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig.property.rdbSnapshotPeriod">RdbSnapshotPeriod</a></code> | <code>*string</code> | Optional. Period between RDB snapshots.   Possible values:  ONE_HOUR SIX_HOURS TWELVE_HOURS TWENTY_FOUR_HOURS. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig.property.rdbSnapshotStartTime">RdbSnapshotStartTime</a></code> | <code>*string</code> | Optional. |

---

##### `RdbSnapshotPeriod`<sup>Optional</sup> <a name="RdbSnapshotPeriod" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig.property.rdbSnapshotPeriod"></a>

```go
RdbSnapshotPeriod *string
```

- *Type:* *string

Optional. Period between RDB snapshots.   Possible values:  ONE_HOUR SIX_HOURS TWELVE_HOURS TWENTY_FOUR_HOURS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#rdb_snapshot_period MemorystoreInstance#rdb_snapshot_period}

---

##### `RdbSnapshotStartTime`<sup>Optional</sup> <a name="RdbSnapshotStartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig.property.rdbSnapshotStartTime"></a>

```go
RdbSnapshotStartTime *string
```

- *Type:* *string

Optional.

Time that the first snapshot was/will be attempted, and to which future
snapshots will be aligned. If not provided, the current time will be
used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#rdb_snapshot_start_time MemorystoreInstance#rdb_snapshot_start_time}

---

### MemorystoreInstancePscAttachmentDetails <a name="MemorystoreInstancePscAttachmentDetails" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstancePscAttachmentDetails {

}
```


### MemorystoreInstancePscAutoConnections <a name="MemorystoreInstancePscAutoConnections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstancePscAutoConnections {

}
```


### MemorystoreInstanceStateInfo <a name="MemorystoreInstanceStateInfo" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceStateInfo {

}
```


### MemorystoreInstanceStateInfoUpdateInfo <a name="MemorystoreInstanceStateInfoUpdateInfo" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceStateInfoUpdateInfo {

}
```


### MemorystoreInstanceTimeouts <a name="MemorystoreInstanceTimeouts" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#create MemorystoreInstance#create}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#delete MemorystoreInstance#delete}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#update MemorystoreInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#create MemorystoreInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#delete MemorystoreInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#update MemorystoreInstance#update}.

---

### MemorystoreInstanceZoneDistributionConfig <a name="MemorystoreInstanceZoneDistributionConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

&memorystoreinstance.MemorystoreInstanceZoneDistributionConfig {
	Mode: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig.property.mode">Mode</a></code> | <code>*string</code> | Optional. Current zone distribution mode. Defaults to MULTI_ZONE.   Possible values:  MULTI_ZONE SINGLE_ZONE Possible values: ["MULTI_ZONE", "SINGLE_ZONE"]. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig.property.zone">Zone</a></code> | <code>*string</code> | Optional. Defines zone where all resources will be allocated with SINGLE_ZONE mode. Ignored for MULTI_ZONE mode. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Optional. Current zone distribution mode. Defaults to MULTI_ZONE.   Possible values:  MULTI_ZONE SINGLE_ZONE Possible values: ["MULTI_ZONE", "SINGLE_ZONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#mode MemorystoreInstance#mode}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Optional. Defines zone where all resources will be allocated with SINGLE_ZONE mode. Ignored for MULTI_ZONE mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/memorystore_instance#zone MemorystoreInstance#zone}

---

## Classes <a name="Classes" id="Classes"></a>

### MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference <a name="MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.putStartTime"></a>

```go
func PutStartTime(value MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTime"></a>

```go
func StartTime() MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference</a>

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a>

---


### MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference <a name="MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

---


### MemorystoreInstanceAutomatedBackupConfigOutputReference <a name="MemorystoreInstanceAutomatedBackupConfigOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceAutomatedBackupConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemorystoreInstanceAutomatedBackupConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.putFixedFrequencySchedule">PutFixedFrequencySchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFixedFrequencySchedule` <a name="PutFixedFrequencySchedule" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.putFixedFrequencySchedule"></a>

```go
func PutFixedFrequencySchedule(value MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.putFixedFrequencySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.fixedFrequencySchedule">FixedFrequencySchedule</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.fixedFrequencyScheduleInput">FixedFrequencyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.retentionInput">RetentionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.retention">Retention</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig">MemorystoreInstanceAutomatedBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FixedFrequencySchedule`<sup>Required</sup> <a name="FixedFrequencySchedule" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.fixedFrequencySchedule"></a>

```go
func FixedFrequencySchedule() MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference</a>

---

##### `FixedFrequencyScheduleInput`<sup>Optional</sup> <a name="FixedFrequencyScheduleInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.fixedFrequencyScheduleInput"></a>

```go
func FixedFrequencyScheduleInput() MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a>

---

##### `RetentionInput`<sup>Optional</sup> <a name="RetentionInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.retentionInput"></a>

```go
func RetentionInput() *string
```

- *Type:* *string

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.retention"></a>

```go
func Retention() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceAutomatedBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig">MemorystoreInstanceAutomatedBackupConfig</a>

---


### MemorystoreInstanceCrossInstanceReplicationConfigMembershipList <a name="MemorystoreInstanceCrossInstanceReplicationConfigMembershipList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceCrossInstanceReplicationConfigMembershipList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstanceCrossInstanceReplicationConfigMembershipList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.get"></a>

```go
func Get(index *f64) MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference <a name="MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.primaryInstance">PrimaryInstance</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList">MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.secondaryInstance">SecondaryInstance</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList">MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembership">MemorystoreInstanceCrossInstanceReplicationConfigMembership</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryInstance`<sup>Required</sup> <a name="PrimaryInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.primaryInstance"></a>

```go
func PrimaryInstance() MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList">MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList</a>

---

##### `SecondaryInstance`<sup>Required</sup> <a name="SecondaryInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.secondaryInstance"></a>

```go
func SecondaryInstance() MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList">MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceCrossInstanceReplicationConfigMembership
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembership">MemorystoreInstanceCrossInstanceReplicationConfigMembership</a>

---


### MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList <a name="MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.get"></a>

```go
func Get(index *f64) MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference <a name="MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance</a>

---


### MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList <a name="MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.get"></a>

```go
func Get(index *f64) MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference <a name="MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance</a>

---


### MemorystoreInstanceCrossInstanceReplicationConfigOutputReference <a name="MemorystoreInstanceCrossInstanceReplicationConfigOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceCrossInstanceReplicationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemorystoreInstanceCrossInstanceReplicationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putPrimaryInstance">PutPrimaryInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putSecondaryInstances">PutSecondaryInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetInstanceRole">ResetInstanceRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetPrimaryInstance">ResetPrimaryInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetSecondaryInstances">ResetSecondaryInstances</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrimaryInstance` <a name="PutPrimaryInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putPrimaryInstance"></a>

```go
func PutPrimaryInstance(value MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putPrimaryInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a>

---

##### `PutSecondaryInstances` <a name="PutSecondaryInstances" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putSecondaryInstances"></a>

```go
func PutSecondaryInstances(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putSecondaryInstances.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetInstanceRole` <a name="ResetInstanceRole" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetInstanceRole"></a>

```go
func ResetInstanceRole()
```

##### `ResetPrimaryInstance` <a name="ResetPrimaryInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetPrimaryInstance"></a>

```go
func ResetPrimaryInstance()
```

##### `ResetSecondaryInstances` <a name="ResetSecondaryInstances" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetSecondaryInstances"></a>

```go
func ResetSecondaryInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.membership">Membership</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList">MemorystoreInstanceCrossInstanceReplicationConfigMembershipList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.primaryInstance">PrimaryInstance</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference">MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.secondaryInstances">SecondaryInstances</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList">MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.instanceRoleInput">InstanceRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.primaryInstanceInput">PrimaryInstanceInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.secondaryInstancesInput">SecondaryInstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.instanceRole">InstanceRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig">MemorystoreInstanceCrossInstanceReplicationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.membership"></a>

```go
func Membership() MemorystoreInstanceCrossInstanceReplicationConfigMembershipList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList">MemorystoreInstanceCrossInstanceReplicationConfigMembershipList</a>

---

##### `PrimaryInstance`<sup>Required</sup> <a name="PrimaryInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.primaryInstance"></a>

```go
func PrimaryInstance() MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference">MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference</a>

---

##### `SecondaryInstances`<sup>Required</sup> <a name="SecondaryInstances" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.secondaryInstances"></a>

```go
func SecondaryInstances() MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList">MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InstanceRoleInput`<sup>Optional</sup> <a name="InstanceRoleInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.instanceRoleInput"></a>

```go
func InstanceRoleInput() *string
```

- *Type:* *string

---

##### `PrimaryInstanceInput`<sup>Optional</sup> <a name="PrimaryInstanceInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.primaryInstanceInput"></a>

```go
func PrimaryInstanceInput() MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a>

---

##### `SecondaryInstancesInput`<sup>Optional</sup> <a name="SecondaryInstancesInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.secondaryInstancesInput"></a>

```go
func SecondaryInstancesInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceRole`<sup>Required</sup> <a name="InstanceRole" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.instanceRole"></a>

```go
func InstanceRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceCrossInstanceReplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig">MemorystoreInstanceCrossInstanceReplicationConfig</a>

---


### MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference <a name="MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resetInstance">ResetInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resetInstance"></a>

```go
func ResetInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a>

---


### MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList <a name="MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.get"></a>

```go
func Get(index *f64) MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference <a name="MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resetInstance">ResetInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resetInstance"></a>

```go
func ResetInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MemorystoreInstanceDesiredAutoCreatedEndpointsList <a name="MemorystoreInstanceDesiredAutoCreatedEndpointsList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceDesiredAutoCreatedEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstanceDesiredAutoCreatedEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.get"></a>

```go
func Get(index *f64) MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference <a name="MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MemorystoreInstanceDesiredPscAutoConnectionsList <a name="MemorystoreInstanceDesiredPscAutoConnectionsList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceDesiredPscAutoConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstanceDesiredPscAutoConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.get"></a>

```go
func Get(index *f64) MemorystoreInstanceDesiredPscAutoConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MemorystoreInstanceDesiredPscAutoConnectionsOutputReference <a name="MemorystoreInstanceDesiredPscAutoConnectionsOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceDesiredPscAutoConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstanceDesiredPscAutoConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MemorystoreInstanceDiscoveryEndpointsList <a name="MemorystoreInstanceDiscoveryEndpointsList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceDiscoveryEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstanceDiscoveryEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.get"></a>

```go
func Get(index *f64) MemorystoreInstanceDiscoveryEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MemorystoreInstanceDiscoveryEndpointsOutputReference <a name="MemorystoreInstanceDiscoveryEndpointsOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceDiscoveryEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstanceDiscoveryEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpoints">MemorystoreInstanceDiscoveryEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceDiscoveryEndpoints
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpoints">MemorystoreInstanceDiscoveryEndpoints</a>

---


### MemorystoreInstanceEndpointsConnectionsList <a name="MemorystoreInstanceEndpointsConnectionsList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceEndpointsConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstanceEndpointsConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.get"></a>

```go
func Get(index *f64) MemorystoreInstanceEndpointsConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MemorystoreInstanceEndpointsConnectionsOutputReference <a name="MemorystoreInstanceEndpointsConnectionsOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceEndpointsConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstanceEndpointsConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.property.pscAutoConnection">PscAutoConnection</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList">MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnections">MemorystoreInstanceEndpointsConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PscAutoConnection`<sup>Required</sup> <a name="PscAutoConnection" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.property.pscAutoConnection"></a>

```go
func PscAutoConnection() MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList">MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceEndpointsConnections
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnections">MemorystoreInstanceEndpointsConnections</a>

---


### MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList <a name="MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.get"></a>

```go
func Get(index *f64) MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference <a name="MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.forwardingRule">ForwardingRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnection">MemorystoreInstanceEndpointsConnectionsPscAutoConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.forwardingRule"></a>

```go
func ForwardingRule() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.pscConnectionId"></a>

```go
func PscConnectionId() *string
```

- *Type:* *string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.serviceAttachment"></a>

```go
func ServiceAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceEndpointsConnectionsPscAutoConnection
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnection">MemorystoreInstanceEndpointsConnectionsPscAutoConnection</a>

---


### MemorystoreInstanceEndpointsList <a name="MemorystoreInstanceEndpointsList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstanceEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.get"></a>

```go
func Get(index *f64) MemorystoreInstanceEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MemorystoreInstanceEndpointsOutputReference <a name="MemorystoreInstanceEndpointsOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstanceEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList">MemorystoreInstanceEndpointsConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpoints">MemorystoreInstanceEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.property.connections"></a>

```go
func Connections() MemorystoreInstanceEndpointsConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList">MemorystoreInstanceEndpointsConnectionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceEndpoints
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpoints">MemorystoreInstanceEndpoints</a>

---


### MemorystoreInstanceGcsSourceOutputReference <a name="MemorystoreInstanceGcsSourceOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceGcsSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemorystoreInstanceGcsSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.urisInput">UrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.uris">Uris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource">MemorystoreInstanceGcsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UrisInput`<sup>Optional</sup> <a name="UrisInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.urisInput"></a>

```go
func UrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `Uris`<sup>Required</sup> <a name="Uris" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.uris"></a>

```go
func Uris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceGcsSource
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource">MemorystoreInstanceGcsSource</a>

---


### MemorystoreInstanceMaintenancePolicyOutputReference <a name="MemorystoreInstanceMaintenancePolicyOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceMaintenancePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemorystoreInstanceMaintenancePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow">PutWeeklyMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow">ResetWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeeklyMaintenanceWindow` <a name="PutWeeklyMaintenanceWindow" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow"></a>

```go
func PutWeeklyMaintenanceWindow(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetWeeklyMaintenanceWindow` <a name="ResetWeeklyMaintenanceWindow" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow"></a>

```go
func ResetWeeklyMaintenanceWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">WeeklyMaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput">WeeklyMaintenanceWindowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy">MemorystoreInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WeeklyMaintenanceWindow`<sup>Required</sup> <a name="WeeklyMaintenanceWindow" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```go
func WeeklyMaintenanceWindow() MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `WeeklyMaintenanceWindowInput`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput"></a>

```go
func WeeklyMaintenanceWindowInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy">MemorystoreInstanceMaintenancePolicy</a>

---


### MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList <a name="MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```go
func Get(index *f64) MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime"></a>

```go
func PutStartTime(value MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput">DayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```go
func StartTime() MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a>

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput"></a>

```go
func DayInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```go
func ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```go
func ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```go
func ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```go
func ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *f64
```

- *Type:* *f64

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### MemorystoreInstanceMaintenanceScheduleList <a name="MemorystoreInstanceMaintenanceScheduleList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceMaintenanceScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstanceMaintenanceScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.get"></a>

```go
func Get(index *f64) MemorystoreInstanceMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MemorystoreInstanceMaintenanceScheduleOutputReference <a name="MemorystoreInstanceMaintenanceScheduleOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceMaintenanceScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstanceMaintenanceScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">ScheduleDeadlineTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceSchedule">MemorystoreInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `ScheduleDeadlineTime`<sup>Required</sup> <a name="ScheduleDeadlineTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```go
func ScheduleDeadlineTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceMaintenanceSchedule
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceSchedule">MemorystoreInstanceMaintenanceSchedule</a>

---


### MemorystoreInstanceManagedBackupSourceOutputReference <a name="MemorystoreInstanceManagedBackupSourceOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceManagedBackupSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemorystoreInstanceManagedBackupSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.backupInput">BackupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.backup">Backup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource">MemorystoreInstanceManagedBackupSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupInput`<sup>Optional</sup> <a name="BackupInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.backupInput"></a>

```go
func BackupInput() *string
```

- *Type:* *string

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.backup"></a>

```go
func Backup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceManagedBackupSource
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource">MemorystoreInstanceManagedBackupSource</a>

---


### MemorystoreInstanceNodeConfigList <a name="MemorystoreInstanceNodeConfigList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceNodeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstanceNodeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.get"></a>

```go
func Get(index *f64) MemorystoreInstanceNodeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MemorystoreInstanceNodeConfigOutputReference <a name="MemorystoreInstanceNodeConfigOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceNodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstanceNodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfig">MemorystoreInstanceNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.property.sizeGb"></a>

```go
func SizeGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfig">MemorystoreInstanceNodeConfig</a>

---


### MemorystoreInstancePersistenceConfigAofConfigOutputReference <a name="MemorystoreInstancePersistenceConfigAofConfigOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstancePersistenceConfigAofConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemorystoreInstancePersistenceConfigAofConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.resetAppendFsync">ResetAppendFsync</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppendFsync` <a name="ResetAppendFsync" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.resetAppendFsync"></a>

```go
func ResetAppendFsync()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsyncInput">AppendFsyncInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsync">AppendFsync</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig">MemorystoreInstancePersistenceConfigAofConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppendFsyncInput`<sup>Optional</sup> <a name="AppendFsyncInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsyncInput"></a>

```go
func AppendFsyncInput() *string
```

- *Type:* *string

---

##### `AppendFsync`<sup>Required</sup> <a name="AppendFsync" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsync"></a>

```go
func AppendFsync() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstancePersistenceConfigAofConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig">MemorystoreInstancePersistenceConfigAofConfig</a>

---


### MemorystoreInstancePersistenceConfigOutputReference <a name="MemorystoreInstancePersistenceConfigOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstancePersistenceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemorystoreInstancePersistenceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.putAofConfig">PutAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.putRdbConfig">PutRdbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.resetAofConfig">ResetAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.resetRdbConfig">ResetRdbConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAofConfig` <a name="PutAofConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.putAofConfig"></a>

```go
func PutAofConfig(value MemorystoreInstancePersistenceConfigAofConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.putAofConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig">MemorystoreInstancePersistenceConfigAofConfig</a>

---

##### `PutRdbConfig` <a name="PutRdbConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.putRdbConfig"></a>

```go
func PutRdbConfig(value MemorystoreInstancePersistenceConfigRdbConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.putRdbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig">MemorystoreInstancePersistenceConfigRdbConfig</a>

---

##### `ResetAofConfig` <a name="ResetAofConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.resetAofConfig"></a>

```go
func ResetAofConfig()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetRdbConfig` <a name="ResetRdbConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.resetRdbConfig"></a>

```go
func ResetRdbConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.aofConfig">AofConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference">MemorystoreInstancePersistenceConfigAofConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.rdbConfig">RdbConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference">MemorystoreInstancePersistenceConfigRdbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.aofConfigInput">AofConfigInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig">MemorystoreInstancePersistenceConfigAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.rdbConfigInput">RdbConfigInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig">MemorystoreInstancePersistenceConfigRdbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig">MemorystoreInstancePersistenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AofConfig`<sup>Required</sup> <a name="AofConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.aofConfig"></a>

```go
func AofConfig() MemorystoreInstancePersistenceConfigAofConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference">MemorystoreInstancePersistenceConfigAofConfigOutputReference</a>

---

##### `RdbConfig`<sup>Required</sup> <a name="RdbConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.rdbConfig"></a>

```go
func RdbConfig() MemorystoreInstancePersistenceConfigRdbConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference">MemorystoreInstancePersistenceConfigRdbConfigOutputReference</a>

---

##### `AofConfigInput`<sup>Optional</sup> <a name="AofConfigInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.aofConfigInput"></a>

```go
func AofConfigInput() MemorystoreInstancePersistenceConfigAofConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig">MemorystoreInstancePersistenceConfigAofConfig</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `RdbConfigInput`<sup>Optional</sup> <a name="RdbConfigInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.rdbConfigInput"></a>

```go
func RdbConfigInput() MemorystoreInstancePersistenceConfigRdbConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig">MemorystoreInstancePersistenceConfigRdbConfig</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstancePersistenceConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig">MemorystoreInstancePersistenceConfig</a>

---


### MemorystoreInstancePersistenceConfigRdbConfigOutputReference <a name="MemorystoreInstancePersistenceConfigRdbConfigOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstancePersistenceConfigRdbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemorystoreInstancePersistenceConfigRdbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.resetRdbSnapshotPeriod">ResetRdbSnapshotPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.resetRdbSnapshotStartTime">ResetRdbSnapshotStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRdbSnapshotPeriod` <a name="ResetRdbSnapshotPeriod" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.resetRdbSnapshotPeriod"></a>

```go
func ResetRdbSnapshotPeriod()
```

##### `ResetRdbSnapshotStartTime` <a name="ResetRdbSnapshotStartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.resetRdbSnapshotStartTime"></a>

```go
func ResetRdbSnapshotStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriodInput">RdbSnapshotPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTimeInput">RdbSnapshotStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriod">RdbSnapshotPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTime">RdbSnapshotStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig">MemorystoreInstancePersistenceConfigRdbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RdbSnapshotPeriodInput`<sup>Optional</sup> <a name="RdbSnapshotPeriodInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriodInput"></a>

```go
func RdbSnapshotPeriodInput() *string
```

- *Type:* *string

---

##### `RdbSnapshotStartTimeInput`<sup>Optional</sup> <a name="RdbSnapshotStartTimeInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTimeInput"></a>

```go
func RdbSnapshotStartTimeInput() *string
```

- *Type:* *string

---

##### `RdbSnapshotPeriod`<sup>Required</sup> <a name="RdbSnapshotPeriod" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriod"></a>

```go
func RdbSnapshotPeriod() *string
```

- *Type:* *string

---

##### `RdbSnapshotStartTime`<sup>Required</sup> <a name="RdbSnapshotStartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTime"></a>

```go
func RdbSnapshotStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstancePersistenceConfigRdbConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig">MemorystoreInstancePersistenceConfigRdbConfig</a>

---


### MemorystoreInstancePscAttachmentDetailsList <a name="MemorystoreInstancePscAttachmentDetailsList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstancePscAttachmentDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstancePscAttachmentDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.get"></a>

```go
func Get(index *f64) MemorystoreInstancePscAttachmentDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MemorystoreInstancePscAttachmentDetailsOutputReference <a name="MemorystoreInstancePscAttachmentDetailsOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstancePscAttachmentDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstancePscAttachmentDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetails">MemorystoreInstancePscAttachmentDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.serviceAttachment"></a>

```go
func ServiceAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstancePscAttachmentDetails
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetails">MemorystoreInstancePscAttachmentDetails</a>

---


### MemorystoreInstancePscAutoConnectionsList <a name="MemorystoreInstancePscAutoConnectionsList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstancePscAutoConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstancePscAutoConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.get"></a>

```go
func Get(index *f64) MemorystoreInstancePscAutoConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MemorystoreInstancePscAutoConnectionsOutputReference <a name="MemorystoreInstancePscAutoConnectionsOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstancePscAutoConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstancePscAutoConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.forwardingRule">ForwardingRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionStatus">PscConnectionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnections">MemorystoreInstancePscAutoConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.forwardingRule"></a>

```go
func ForwardingRule() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionId"></a>

```go
func PscConnectionId() *string
```

- *Type:* *string

---

##### `PscConnectionStatus`<sup>Required</sup> <a name="PscConnectionStatus" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionStatus"></a>

```go
func PscConnectionStatus() *string
```

- *Type:* *string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.serviceAttachment"></a>

```go
func ServiceAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstancePscAutoConnections
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnections">MemorystoreInstancePscAutoConnections</a>

---


### MemorystoreInstanceStateInfoList <a name="MemorystoreInstanceStateInfoList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceStateInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstanceStateInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.get"></a>

```go
func Get(index *f64) MemorystoreInstanceStateInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MemorystoreInstanceStateInfoOutputReference <a name="MemorystoreInstanceStateInfoOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceStateInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstanceStateInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.property.updateInfo">UpdateInfo</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList">MemorystoreInstanceStateInfoUpdateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfo">MemorystoreInstanceStateInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UpdateInfo`<sup>Required</sup> <a name="UpdateInfo" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.property.updateInfo"></a>

```go
func UpdateInfo() MemorystoreInstanceStateInfoUpdateInfoList
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList">MemorystoreInstanceStateInfoUpdateInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceStateInfo
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfo">MemorystoreInstanceStateInfo</a>

---


### MemorystoreInstanceStateInfoUpdateInfoList <a name="MemorystoreInstanceStateInfoUpdateInfoList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceStateInfoUpdateInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorystoreInstanceStateInfoUpdateInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.get"></a>

```go
func Get(index *f64) MemorystoreInstanceStateInfoUpdateInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MemorystoreInstanceStateInfoUpdateInfoOutputReference <a name="MemorystoreInstanceStateInfoUpdateInfoOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceStateInfoUpdateInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorystoreInstanceStateInfoUpdateInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetEngineVersion">TargetEngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetNodeType">TargetNodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetReplicaCount">TargetReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetShardCount">TargetShardCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfo">MemorystoreInstanceStateInfoUpdateInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetEngineVersion`<sup>Required</sup> <a name="TargetEngineVersion" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetEngineVersion"></a>

```go
func TargetEngineVersion() *string
```

- *Type:* *string

---

##### `TargetNodeType`<sup>Required</sup> <a name="TargetNodeType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetNodeType"></a>

```go
func TargetNodeType() *string
```

- *Type:* *string

---

##### `TargetReplicaCount`<sup>Required</sup> <a name="TargetReplicaCount" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetReplicaCount"></a>

```go
func TargetReplicaCount() *f64
```

- *Type:* *f64

---

##### `TargetShardCount`<sup>Required</sup> <a name="TargetShardCount" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetShardCount"></a>

```go
func TargetShardCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceStateInfoUpdateInfo
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfo">MemorystoreInstanceStateInfoUpdateInfo</a>

---


### MemorystoreInstanceTimeoutsOutputReference <a name="MemorystoreInstanceTimeoutsOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemorystoreInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MemorystoreInstanceZoneDistributionConfigOutputReference <a name="MemorystoreInstanceZoneDistributionConfigOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/memorystoreinstance"

memorystoreinstance.NewMemorystoreInstanceZoneDistributionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemorystoreInstanceZoneDistributionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.resetZone"></a>

```go
func ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig">MemorystoreInstanceZoneDistributionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() MemorystoreInstanceZoneDistributionConfig
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig">MemorystoreInstanceZoneDistributionConfig</a>

---



