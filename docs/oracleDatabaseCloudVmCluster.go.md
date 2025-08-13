# `oracleDatabaseCloudVmCluster` Submodule <a name="`oracleDatabaseCloudVmCluster` Submodule" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseCloudVmCluster <a name="OracleDatabaseCloudVmCluster" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster google_oracle_database_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/oracledatabasecloudvmcluster"

oracledatabasecloudvmcluster.NewOracleDatabaseCloudVmCluster(scope Construct, id *string, config OracleDatabaseCloudVmClusterConfig) OracleDatabaseCloudVmCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig">OracleDatabaseCloudVmClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig">OracleDatabaseCloudVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetBackupOdbSubnet">ResetBackupOdbSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetBackupSubnetCidr">ResetBackupSubnetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetCidr">ResetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetOdbNetwork">ResetOdbNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetOdbSubnet">ResetOdbSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties"></a>

```go
func PutProperties(value OracleDatabaseCloudVmClusterProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putTimeouts"></a>

```go
func PutTimeouts(value OracleDatabaseCloudVmClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts">OracleDatabaseCloudVmClusterTimeouts</a>

---

##### `ResetBackupOdbSubnet` <a name="ResetBackupOdbSubnet" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetBackupOdbSubnet"></a>

```go
func ResetBackupOdbSubnet()
```

##### `ResetBackupSubnetCidr` <a name="ResetBackupSubnetCidr" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetBackupSubnetCidr"></a>

```go
func ResetBackupSubnetCidr()
```

##### `ResetCidr` <a name="ResetCidr" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetCidr"></a>

```go
func ResetCidr()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetOdbNetwork` <a name="ResetOdbNetwork" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetOdbNetwork"></a>

```go
func ResetOdbNetwork()
```

##### `ResetOdbSubnet` <a name="ResetOdbSubnet" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetOdbSubnet"></a>

```go
func ResetOdbSubnet()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OracleDatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/oracledatabasecloudvmcluster"

oracledatabasecloudvmcluster.OracleDatabaseCloudVmCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/oracledatabasecloudvmcluster"

oracledatabasecloudvmcluster.OracleDatabaseCloudVmCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/oracledatabasecloudvmcluster"

oracledatabasecloudvmcluster.OracleDatabaseCloudVmCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/oracledatabasecloudvmcluster"

oracledatabasecloudvmcluster.OracleDatabaseCloudVmCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OracleDatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OracleDatabaseCloudVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OracleDatabaseCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OracleDatabaseCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.gcpOracleZone">GcpOracleZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference">OracleDatabaseCloudVmClusterPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference">OracleDatabaseCloudVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupOdbSubnetInput">BackupOdbSubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupSubnetCidrInput">BackupSubnetCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cidrInput">CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cloudVmClusterIdInput">CloudVmClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.exadataInfrastructureInput">ExadataInfrastructureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.odbNetworkInput">OdbNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.odbSubnetInput">OdbSubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupOdbSubnet">BackupOdbSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupSubnetCidr">BackupSubnetCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cloudVmClusterId">CloudVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.exadataInfrastructure">ExadataInfrastructure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.odbNetwork">OdbNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.odbSubnet">OdbSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.gcpOracleZone"></a>

```go
func GcpOracleZone() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.properties"></a>

```go
func Properties() OracleDatabaseCloudVmClusterPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference">OracleDatabaseCloudVmClusterPropertiesOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.timeouts"></a>

```go
func Timeouts() OracleDatabaseCloudVmClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference">OracleDatabaseCloudVmClusterTimeoutsOutputReference</a>

---

##### `BackupOdbSubnetInput`<sup>Optional</sup> <a name="BackupOdbSubnetInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupOdbSubnetInput"></a>

```go
func BackupOdbSubnetInput() *string
```

- *Type:* *string

---

##### `BackupSubnetCidrInput`<sup>Optional</sup> <a name="BackupSubnetCidrInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupSubnetCidrInput"></a>

```go
func BackupSubnetCidrInput() *string
```

- *Type:* *string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cidrInput"></a>

```go
func CidrInput() *string
```

- *Type:* *string

---

##### `CloudVmClusterIdInput`<sup>Optional</sup> <a name="CloudVmClusterIdInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cloudVmClusterIdInput"></a>

```go
func CloudVmClusterIdInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExadataInfrastructureInput`<sup>Optional</sup> <a name="ExadataInfrastructureInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.exadataInfrastructureInput"></a>

```go
func ExadataInfrastructureInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `OdbNetworkInput`<sup>Optional</sup> <a name="OdbNetworkInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.odbNetworkInput"></a>

```go
func OdbNetworkInput() *string
```

- *Type:* *string

---

##### `OdbSubnetInput`<sup>Optional</sup> <a name="OdbSubnetInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.odbSubnetInput"></a>

```go
func OdbSubnetInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.propertiesInput"></a>

```go
func PropertiesInput() OracleDatabaseCloudVmClusterProperties
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BackupOdbSubnet`<sup>Required</sup> <a name="BackupOdbSubnet" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupOdbSubnet"></a>

```go
func BackupOdbSubnet() *string
```

- *Type:* *string

---

##### `BackupSubnetCidr`<sup>Required</sup> <a name="BackupSubnetCidr" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupSubnetCidr"></a>

```go
func BackupSubnetCidr() *string
```

- *Type:* *string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `CloudVmClusterId`<sup>Required</sup> <a name="CloudVmClusterId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cloudVmClusterId"></a>

```go
func CloudVmClusterId() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExadataInfrastructure`<sup>Required</sup> <a name="ExadataInfrastructure" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.exadataInfrastructure"></a>

```go
func ExadataInfrastructure() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `OdbNetwork`<sup>Required</sup> <a name="OdbNetwork" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.odbNetwork"></a>

```go
func OdbNetwork() *string
```

- *Type:* *string

---

##### `OdbSubnet`<sup>Required</sup> <a name="OdbSubnet" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.odbSubnet"></a>

```go
func OdbSubnet() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseCloudVmClusterConfig <a name="OracleDatabaseCloudVmClusterConfig" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/oracledatabasecloudvmcluster"

&oracledatabasecloudvmcluster.OracleDatabaseCloudVmClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloudVmClusterId: *string,
	ExadataInfrastructure: *string,
	Location: *string,
	BackupOdbSubnet: *string,
	BackupSubnetCidr: *string,
	Cidr: *string,
	DeletionProtection: interface{},
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	Network: *string,
	OdbNetwork: *string,
	OdbSubnet: *string,
	Project: *string,
	Properties: github.com/cdktf/cdktf-provider-google-go/google/v16.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.cloudVmClusterId">CloudVmClusterId</a></code> | <code>*string</code> | The ID of the VM Cluster to create. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.exadataInfrastructure">ExadataInfrastructure</a></code> | <code>*string</code> | The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.backupOdbSubnet">BackupOdbSubnet</a></code> | <code>*string</code> | The name of the backup OdbSubnet associated with the VM Cluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.backupSubnetCidr">BackupSubnetCidr</a></code> | <code>*string</code> | CIDR range of the backup subnet. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.cidr">Cidr</a></code> | <code>*string</code> | Network settings. CIDR to use for cluster IP allocation. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Whether Terraform will be prevented from destroying the cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User friendly name for this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#id OracleDatabaseCloudVmCluster#id}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels or tags associated with the VM Cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.network">Network</a></code> | <code>*string</code> | The name of the VPC network. Format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.odbNetwork">OdbNetwork</a></code> | <code>*string</code> | The name of the OdbNetwork associated with the VM Cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.odbSubnet">OdbSubnet</a></code> | <code>*string</code> | The name of the OdbSubnet associated with the VM Cluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#project OracleDatabaseCloudVmCluster#project}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts">OracleDatabaseCloudVmClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudVmClusterId`<sup>Required</sup> <a name="CloudVmClusterId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.cloudVmClusterId"></a>

```go
CloudVmClusterId *string
```

- *Type:* *string

The ID of the VM Cluster to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#cloud_vm_cluster_id OracleDatabaseCloudVmCluster#cloud_vm_cluster_id}

---

##### `ExadataInfrastructure`<sup>Required</sup> <a name="ExadataInfrastructure" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.exadataInfrastructure"></a>

```go
ExadataInfrastructure *string
```

- *Type:* *string

The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#exadata_infrastructure OracleDatabaseCloudVmCluster#exadata_infrastructure}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#location OracleDatabaseCloudVmCluster#location}

---

##### `BackupOdbSubnet`<sup>Optional</sup> <a name="BackupOdbSubnet" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.backupOdbSubnet"></a>

```go
BackupOdbSubnet *string
```

- *Type:* *string

The name of the backup OdbSubnet associated with the VM Cluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#backup_odb_subnet OracleDatabaseCloudVmCluster#backup_odb_subnet}

---

##### `BackupSubnetCidr`<sup>Optional</sup> <a name="BackupSubnetCidr" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.backupSubnetCidr"></a>

```go
BackupSubnetCidr *string
```

- *Type:* *string

CIDR range of the backup subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#backup_subnet_cidr OracleDatabaseCloudVmCluster#backup_subnet_cidr}

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.cidr"></a>

```go
Cidr *string
```

- *Type:* *string

Network settings. CIDR to use for cluster IP allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#cidr OracleDatabaseCloudVmCluster#cidr}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Whether Terraform will be prevented from destroying the cluster.

Deleting this cluster via terraform destroy or terraform apply will only succeed if this field is false in the Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#deletion_protection OracleDatabaseCloudVmCluster#deletion_protection}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User friendly name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#display_name OracleDatabaseCloudVmCluster#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#id OracleDatabaseCloudVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels or tags associated with the VM Cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#labels OracleDatabaseCloudVmCluster#labels}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The name of the VPC network. Format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#network OracleDatabaseCloudVmCluster#network}

---

##### `OdbNetwork`<sup>Optional</sup> <a name="OdbNetwork" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.odbNetwork"></a>

```go
OdbNetwork *string
```

- *Type:* *string

The name of the OdbNetwork associated with the VM Cluster.

Format:
projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the odb_subnet and backup_odb_subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#odb_network OracleDatabaseCloudVmCluster#odb_network}

---

##### `OdbSubnet`<sup>Optional</sup> <a name="OdbSubnet" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.odbSubnet"></a>

```go
OdbSubnet *string
```

- *Type:* *string

The name of the OdbSubnet associated with the VM Cluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#odb_subnet OracleDatabaseCloudVmCluster#odb_subnet}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#project OracleDatabaseCloudVmCluster#project}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.properties"></a>

```go
Properties OracleDatabaseCloudVmClusterProperties
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#properties OracleDatabaseCloudVmCluster#properties}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.timeouts"></a>

```go
Timeouts OracleDatabaseCloudVmClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts">OracleDatabaseCloudVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#timeouts OracleDatabaseCloudVmCluster#timeouts}

---

### OracleDatabaseCloudVmClusterProperties <a name="OracleDatabaseCloudVmClusterProperties" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/oracledatabasecloudvmcluster"

&oracledatabasecloudvmcluster.OracleDatabaseCloudVmClusterProperties {
	CpuCoreCount: *f64,
	LicenseType: *string,
	ClusterName: *string,
	DataStorageSizeTb: *f64,
	DbNodeStorageSizeGb: *f64,
	DbServerOcids: *[]*string,
	DiagnosticsDataCollectionOptions: github.com/cdktf/cdktf-provider-google-go/google/v16.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions,
	DiskRedundancy: *string,
	GiVersion: *string,
	HostnamePrefix: *string,
	LocalBackupEnabled: interface{},
	MemorySizeGb: *f64,
	NodeCount: *f64,
	OcpuCount: *f64,
	SparseDiskgroupEnabled: interface{},
	SshPublicKeys: *[]*string,
	TimeZone: github.com/cdktf/cdktf-provider-google-go/google/v16.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | Number of enabled CPU cores. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.licenseType">LicenseType</a></code> | <code>*string</code> | License type of VM Cluster.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.clusterName">ClusterName</a></code> | <code>*string</code> | OCI Cluster name. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.dataStorageSizeTb">DataStorageSizeTb</a></code> | <code>*f64</code> | The data disk group size to be allocated in TBs. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.dbNodeStorageSizeGb">DbNodeStorageSizeGb</a></code> | <code>*f64</code> | Local storage per VM. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.dbServerOcids">DbServerOcids</a></code> | <code>*[]*string</code> | OCID of database servers. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.diagnosticsDataCollectionOptions">DiagnosticsDataCollectionOptions</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | diagnostics_data_collection_options block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.diskRedundancy">DiskRedundancy</a></code> | <code>*string</code> | The type of redundancy.   Possible values:  DISK_REDUNDANCY_UNSPECIFIED HIGH NORMAL. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.giVersion">GiVersion</a></code> | <code>*string</code> | Grid Infrastructure Version. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.hostnamePrefix">HostnamePrefix</a></code> | <code>*string</code> | Prefix for VM cluster host names. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.localBackupEnabled">LocalBackupEnabled</a></code> | <code>interface{}</code> | Use local backup. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.memorySizeGb">MemorySizeGb</a></code> | <code>*f64</code> | Memory allocated in GBs. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | Number of database servers. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.ocpuCount">OcpuCount</a></code> | <code>*f64</code> | OCPU count per VM. Minimum is 0.1. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.sparseDiskgroupEnabled">SparseDiskgroupEnabled</a></code> | <code>interface{}</code> | Use exadata sparse snapshots. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | SSH public keys to be stored with cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | time_zone block. |

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.cpuCoreCount"></a>

```go
CpuCoreCount *f64
```

- *Type:* *f64

Number of enabled CPU cores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#cpu_core_count OracleDatabaseCloudVmCluster#cpu_core_count}

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.licenseType"></a>

```go
LicenseType *string
```

- *Type:* *string

License type of VM Cluster.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#license_type OracleDatabaseCloudVmCluster#license_type}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

OCI Cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#cluster_name OracleDatabaseCloudVmCluster#cluster_name}

---

##### `DataStorageSizeTb`<sup>Optional</sup> <a name="DataStorageSizeTb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.dataStorageSizeTb"></a>

```go
DataStorageSizeTb *f64
```

- *Type:* *f64

The data disk group size to be allocated in TBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#data_storage_size_tb OracleDatabaseCloudVmCluster#data_storage_size_tb}

---

##### `DbNodeStorageSizeGb`<sup>Optional</sup> <a name="DbNodeStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.dbNodeStorageSizeGb"></a>

```go
DbNodeStorageSizeGb *f64
```

- *Type:* *f64

Local storage per VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#db_node_storage_size_gb OracleDatabaseCloudVmCluster#db_node_storage_size_gb}

---

##### `DbServerOcids`<sup>Optional</sup> <a name="DbServerOcids" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.dbServerOcids"></a>

```go
DbServerOcids *[]*string
```

- *Type:* *[]*string

OCID of database servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#db_server_ocids OracleDatabaseCloudVmCluster#db_server_ocids}

---

##### `DiagnosticsDataCollectionOptions`<sup>Optional</sup> <a name="DiagnosticsDataCollectionOptions" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.diagnosticsDataCollectionOptions"></a>

```go
DiagnosticsDataCollectionOptions OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

diagnostics_data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#diagnostics_data_collection_options OracleDatabaseCloudVmCluster#diagnostics_data_collection_options}

---

##### `DiskRedundancy`<sup>Optional</sup> <a name="DiskRedundancy" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.diskRedundancy"></a>

```go
DiskRedundancy *string
```

- *Type:* *string

The type of redundancy.   Possible values:  DISK_REDUNDANCY_UNSPECIFIED HIGH NORMAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#disk_redundancy OracleDatabaseCloudVmCluster#disk_redundancy}

---

##### `GiVersion`<sup>Optional</sup> <a name="GiVersion" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.giVersion"></a>

```go
GiVersion *string
```

- *Type:* *string

Grid Infrastructure Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#gi_version OracleDatabaseCloudVmCluster#gi_version}

---

##### `HostnamePrefix`<sup>Optional</sup> <a name="HostnamePrefix" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.hostnamePrefix"></a>

```go
HostnamePrefix *string
```

- *Type:* *string

Prefix for VM cluster host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#hostname_prefix OracleDatabaseCloudVmCluster#hostname_prefix}

---

##### `LocalBackupEnabled`<sup>Optional</sup> <a name="LocalBackupEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.localBackupEnabled"></a>

```go
LocalBackupEnabled interface{}
```

- *Type:* interface{}

Use local backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#local_backup_enabled OracleDatabaseCloudVmCluster#local_backup_enabled}

---

##### `MemorySizeGb`<sup>Optional</sup> <a name="MemorySizeGb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.memorySizeGb"></a>

```go
MemorySizeGb *f64
```

- *Type:* *f64

Memory allocated in GBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#memory_size_gb OracleDatabaseCloudVmCluster#memory_size_gb}

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

Number of database servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#node_count OracleDatabaseCloudVmCluster#node_count}

---

##### `OcpuCount`<sup>Optional</sup> <a name="OcpuCount" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.ocpuCount"></a>

```go
OcpuCount *f64
```

- *Type:* *f64

OCPU count per VM. Minimum is 0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#ocpu_count OracleDatabaseCloudVmCluster#ocpu_count}

---

##### `SparseDiskgroupEnabled`<sup>Optional</sup> <a name="SparseDiskgroupEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.sparseDiskgroupEnabled"></a>

```go
SparseDiskgroupEnabled interface{}
```

- *Type:* interface{}

Use exadata sparse snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#sparse_diskgroup_enabled OracleDatabaseCloudVmCluster#sparse_diskgroup_enabled}

---

##### `SshPublicKeys`<sup>Optional</sup> <a name="SshPublicKeys" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.sshPublicKeys"></a>

```go
SshPublicKeys *[]*string
```

- *Type:* *[]*string

SSH public keys to be stored with cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#ssh_public_keys OracleDatabaseCloudVmCluster#ssh_public_keys}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.timeZone"></a>

```go
TimeZone OracleDatabaseCloudVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#time_zone OracleDatabaseCloudVmCluster#time_zone}

---

### OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions <a name="OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/oracledatabasecloudvmcluster"

&oracledatabasecloudvmcluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions {
	DiagnosticsEventsEnabled: interface{},
	HealthMonitoringEnabled: interface{},
	IncidentLogsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.diagnosticsEventsEnabled">DiagnosticsEventsEnabled</a></code> | <code>interface{}</code> | Indicates whether diagnostic collection is enabled for the VM cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.healthMonitoringEnabled">HealthMonitoringEnabled</a></code> | <code>interface{}</code> | Indicates whether health monitoring is enabled for the VM cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.incidentLogsEnabled">IncidentLogsEnabled</a></code> | <code>interface{}</code> | Indicates whether incident logs and trace collection are enabled for the VM cluster. |

---

##### `DiagnosticsEventsEnabled`<sup>Optional</sup> <a name="DiagnosticsEventsEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.diagnosticsEventsEnabled"></a>

```go
DiagnosticsEventsEnabled interface{}
```

- *Type:* interface{}

Indicates whether diagnostic collection is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#diagnostics_events_enabled OracleDatabaseCloudVmCluster#diagnostics_events_enabled}

---

##### `HealthMonitoringEnabled`<sup>Optional</sup> <a name="HealthMonitoringEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.healthMonitoringEnabled"></a>

```go
HealthMonitoringEnabled interface{}
```

- *Type:* interface{}

Indicates whether health monitoring is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#health_monitoring_enabled OracleDatabaseCloudVmCluster#health_monitoring_enabled}

---

##### `IncidentLogsEnabled`<sup>Optional</sup> <a name="IncidentLogsEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.incidentLogsEnabled"></a>

```go
IncidentLogsEnabled interface{}
```

- *Type:* interface{}

Indicates whether incident logs and trace collection are enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#incident_logs_enabled OracleDatabaseCloudVmCluster#incident_logs_enabled}

---

### OracleDatabaseCloudVmClusterPropertiesTimeZone <a name="OracleDatabaseCloudVmClusterPropertiesTimeZone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/oracledatabasecloudvmcluster"

&oracledatabasecloudvmcluster.OracleDatabaseCloudVmClusterPropertiesTimeZone {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone.property.id">Id</a></code> | <code>*string</code> | IANA Time Zone Database time zone, e.g. "America/New_York". |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone.property.id"></a>

```go
Id *string
```

- *Type:* *string

IANA Time Zone Database time zone, e.g. "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#id OracleDatabaseCloudVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OracleDatabaseCloudVmClusterTimeouts <a name="OracleDatabaseCloudVmClusterTimeouts" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/oracledatabasecloudvmcluster"

&oracledatabasecloudvmcluster.OracleDatabaseCloudVmClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#create OracleDatabaseCloudVmCluster#create}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#delete OracleDatabaseCloudVmCluster#delete}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#update OracleDatabaseCloudVmCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#create OracleDatabaseCloudVmCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#delete OracleDatabaseCloudVmCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#update OracleDatabaseCloudVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference <a name="OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/oracledatabasecloudvmcluster"

oracledatabasecloudvmcluster.NewOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetDiagnosticsEventsEnabled">ResetDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetHealthMonitoringEnabled">ResetHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetIncidentLogsEnabled">ResetIncidentLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiagnosticsEventsEnabled` <a name="ResetDiagnosticsEventsEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetDiagnosticsEventsEnabled"></a>

```go
func ResetDiagnosticsEventsEnabled()
```

##### `ResetHealthMonitoringEnabled` <a name="ResetHealthMonitoringEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetHealthMonitoringEnabled"></a>

```go
func ResetHealthMonitoringEnabled()
```

##### `ResetIncidentLogsEnabled` <a name="ResetIncidentLogsEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetIncidentLogsEnabled"></a>

```go
func ResetIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabledInput">DiagnosticsEventsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabledInput">HealthMonitoringEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabledInput">IncidentLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled">DiagnosticsEventsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled">HealthMonitoringEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled">IncidentLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="DiagnosticsEventsEnabledInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabledInput"></a>

```go
func DiagnosticsEventsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HealthMonitoringEnabledInput`<sup>Optional</sup> <a name="HealthMonitoringEnabledInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabledInput"></a>

```go
func HealthMonitoringEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IncidentLogsEnabledInput`<sup>Optional</sup> <a name="IncidentLogsEnabledInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabledInput"></a>

```go
func IncidentLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DiagnosticsEventsEnabled`<sup>Required</sup> <a name="DiagnosticsEventsEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled"></a>

```go
func DiagnosticsEventsEnabled() interface{}
```

- *Type:* interface{}

---

##### `HealthMonitoringEnabled`<sup>Required</sup> <a name="HealthMonitoringEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled"></a>

```go
func HealthMonitoringEnabled() interface{}
```

- *Type:* interface{}

---

##### `IncidentLogsEnabled`<sup>Required</sup> <a name="IncidentLogsEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled"></a>

```go
func IncidentLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

---


### OracleDatabaseCloudVmClusterPropertiesOutputReference <a name="OracleDatabaseCloudVmClusterPropertiesOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/oracledatabasecloudvmcluster"

oracledatabasecloudvmcluster.NewOracleDatabaseCloudVmClusterPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OracleDatabaseCloudVmClusterPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions">PutDiagnosticsDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putTimeZone">PutTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDataStorageSizeTb">ResetDataStorageSizeTb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbNodeStorageSizeGb">ResetDbNodeStorageSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbServerOcids">ResetDbServerOcids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiagnosticsDataCollectionOptions">ResetDiagnosticsDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiskRedundancy">ResetDiskRedundancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetGiVersion">ResetGiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetHostnamePrefix">ResetHostnamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetLocalBackupEnabled">ResetLocalBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetMemorySizeGb">ResetMemorySizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetOcpuCount">ResetOcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetSparseDiskgroupEnabled">ResetSparseDiskgroupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetSshPublicKeys">ResetSshPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDiagnosticsDataCollectionOptions` <a name="PutDiagnosticsDataCollectionOptions" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions"></a>

```go
func PutDiagnosticsDataCollectionOptions(value OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

---

##### `PutTimeZone` <a name="PutTimeZone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putTimeZone"></a>

```go
func PutTimeZone(value OracleDatabaseCloudVmClusterPropertiesTimeZone)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a>

---

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetDataStorageSizeTb` <a name="ResetDataStorageSizeTb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDataStorageSizeTb"></a>

```go
func ResetDataStorageSizeTb()
```

##### `ResetDbNodeStorageSizeGb` <a name="ResetDbNodeStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbNodeStorageSizeGb"></a>

```go
func ResetDbNodeStorageSizeGb()
```

##### `ResetDbServerOcids` <a name="ResetDbServerOcids" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbServerOcids"></a>

```go
func ResetDbServerOcids()
```

##### `ResetDiagnosticsDataCollectionOptions` <a name="ResetDiagnosticsDataCollectionOptions" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiagnosticsDataCollectionOptions"></a>

```go
func ResetDiagnosticsDataCollectionOptions()
```

##### `ResetDiskRedundancy` <a name="ResetDiskRedundancy" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiskRedundancy"></a>

```go
func ResetDiskRedundancy()
```

##### `ResetGiVersion` <a name="ResetGiVersion" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetGiVersion"></a>

```go
func ResetGiVersion()
```

##### `ResetHostnamePrefix` <a name="ResetHostnamePrefix" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetHostnamePrefix"></a>

```go
func ResetHostnamePrefix()
```

##### `ResetLocalBackupEnabled` <a name="ResetLocalBackupEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetLocalBackupEnabled"></a>

```go
func ResetLocalBackupEnabled()
```

##### `ResetMemorySizeGb` <a name="ResetMemorySizeGb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetMemorySizeGb"></a>

```go
func ResetMemorySizeGb()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetNodeCount"></a>

```go
func ResetNodeCount()
```

##### `ResetOcpuCount` <a name="ResetOcpuCount" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetOcpuCount"></a>

```go
func ResetOcpuCount()
```

##### `ResetSparseDiskgroupEnabled` <a name="ResetSparseDiskgroupEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetSparseDiskgroupEnabled"></a>

```go
func ResetSparseDiskgroupEnabled()
```

##### `ResetSshPublicKeys` <a name="ResetSshPublicKeys" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetSshPublicKeys"></a>

```go
func ResetSshPublicKeys()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptions">DiagnosticsDataCollectionOptions</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dnsListenerIp">DnsListenerIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ociUrl">OciUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDns">ScanDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDnsRecordId">ScanDnsRecordId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanIpIds">ScanIpIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcpSsl">ScanListenerPortTcpSsl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.storageSizeGb">StorageSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.systemVersion">SystemVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference">OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTbInput">DataStorageSizeTbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGbInput">DbNodeStorageSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcidsInput">DbServerOcidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptionsInput">DiagnosticsDataCollectionOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancyInput">DiskRedundancyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersionInput">GiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefixInput">HostnamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabledInput">LocalBackupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGbInput">MemorySizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCountInput">OcpuCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabledInput">SparseDiskgroupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTb">DataStorageSizeTb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGb">DbNodeStorageSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcids">DbServerOcids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancy">DiskRedundancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersion">GiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefix">HostnamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabled">LocalBackupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGb">MemorySizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCount">OcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabled">SparseDiskgroupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DiagnosticsDataCollectionOptions`<sup>Required</sup> <a name="DiagnosticsDataCollectionOptions" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptions"></a>

```go
func DiagnosticsDataCollectionOptions() OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference</a>

---

##### `DnsListenerIp`<sup>Required</sup> <a name="DnsListenerIp" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dnsListenerIp"></a>

```go
func DnsListenerIp() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ociUrl"></a>

```go
func OciUrl() *string
```

- *Type:* *string

---

##### `ScanDns`<sup>Required</sup> <a name="ScanDns" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDns"></a>

```go
func ScanDns() *string
```

- *Type:* *string

---

##### `ScanDnsRecordId`<sup>Required</sup> <a name="ScanDnsRecordId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDnsRecordId"></a>

```go
func ScanDnsRecordId() *string
```

- *Type:* *string

---

##### `ScanIpIds`<sup>Required</sup> <a name="ScanIpIds" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanIpIds"></a>

```go
func ScanIpIds() *[]*string
```

- *Type:* *[]*string

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcp"></a>

```go
func ScanListenerPortTcp() *f64
```

- *Type:* *f64

---

##### `ScanListenerPortTcpSsl`<sup>Required</sup> <a name="ScanListenerPortTcpSsl" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcpSsl"></a>

```go
func ScanListenerPortTcpSsl() *f64
```

- *Type:* *f64

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StorageSizeGb`<sup>Required</sup> <a name="StorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.storageSizeGb"></a>

```go
func StorageSizeGb() *f64
```

- *Type:* *f64

---

##### `SystemVersion`<sup>Required</sup> <a name="SystemVersion" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.systemVersion"></a>

```go
func SystemVersion() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZone"></a>

```go
func TimeZone() OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference">OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCountInput"></a>

```go
func CpuCoreCountInput() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeTbInput`<sup>Optional</sup> <a name="DataStorageSizeTbInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTbInput"></a>

```go
func DataStorageSizeTbInput() *f64
```

- *Type:* *f64

---

##### `DbNodeStorageSizeGbInput`<sup>Optional</sup> <a name="DbNodeStorageSizeGbInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGbInput"></a>

```go
func DbNodeStorageSizeGbInput() *f64
```

- *Type:* *f64

---

##### `DbServerOcidsInput`<sup>Optional</sup> <a name="DbServerOcidsInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcidsInput"></a>

```go
func DbServerOcidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DiagnosticsDataCollectionOptionsInput`<sup>Optional</sup> <a name="DiagnosticsDataCollectionOptionsInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptionsInput"></a>

```go
func DiagnosticsDataCollectionOptionsInput() OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

---

##### `DiskRedundancyInput`<sup>Optional</sup> <a name="DiskRedundancyInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancyInput"></a>

```go
func DiskRedundancyInput() *string
```

- *Type:* *string

---

##### `GiVersionInput`<sup>Optional</sup> <a name="GiVersionInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersionInput"></a>

```go
func GiVersionInput() *string
```

- *Type:* *string

---

##### `HostnamePrefixInput`<sup>Optional</sup> <a name="HostnamePrefixInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefixInput"></a>

```go
func HostnamePrefixInput() *string
```

- *Type:* *string

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseTypeInput"></a>

```go
func LicenseTypeInput() *string
```

- *Type:* *string

---

##### `LocalBackupEnabledInput`<sup>Optional</sup> <a name="LocalBackupEnabledInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabledInput"></a>

```go
func LocalBackupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MemorySizeGbInput`<sup>Optional</sup> <a name="MemorySizeGbInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGbInput"></a>

```go
func MemorySizeGbInput() *f64
```

- *Type:* *f64

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `OcpuCountInput`<sup>Optional</sup> <a name="OcpuCountInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCountInput"></a>

```go
func OcpuCountInput() *f64
```

- *Type:* *f64

---

##### `SparseDiskgroupEnabledInput`<sup>Optional</sup> <a name="SparseDiskgroupEnabledInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabledInput"></a>

```go
func SparseDiskgroupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeysInput"></a>

```go
func SshPublicKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() OracleDatabaseCloudVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a>

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCount"></a>

```go
func CpuCoreCount() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeTb`<sup>Required</sup> <a name="DataStorageSizeTb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTb"></a>

```go
func DataStorageSizeTb() *f64
```

- *Type:* *f64

---

##### `DbNodeStorageSizeGb`<sup>Required</sup> <a name="DbNodeStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```go
func DbNodeStorageSizeGb() *f64
```

- *Type:* *f64

---

##### `DbServerOcids`<sup>Required</sup> <a name="DbServerOcids" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcids"></a>

```go
func DbServerOcids() *[]*string
```

- *Type:* *[]*string

---

##### `DiskRedundancy`<sup>Required</sup> <a name="DiskRedundancy" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancy"></a>

```go
func DiskRedundancy() *string
```

- *Type:* *string

---

##### `GiVersion`<sup>Required</sup> <a name="GiVersion" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersion"></a>

```go
func GiVersion() *string
```

- *Type:* *string

---

##### `HostnamePrefix`<sup>Required</sup> <a name="HostnamePrefix" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefix"></a>

```go
func HostnamePrefix() *string
```

- *Type:* *string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `LocalBackupEnabled`<sup>Required</sup> <a name="LocalBackupEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabled"></a>

```go
func LocalBackupEnabled() interface{}
```

- *Type:* interface{}

---

##### `MemorySizeGb`<sup>Required</sup> <a name="MemorySizeGb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGb"></a>

```go
func MemorySizeGb() *f64
```

- *Type:* *f64

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `OcpuCount`<sup>Required</sup> <a name="OcpuCount" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCount"></a>

```go
func OcpuCount() *f64
```

- *Type:* *f64

---

##### `SparseDiskgroupEnabled`<sup>Required</sup> <a name="SparseDiskgroupEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabled"></a>

```go
func SparseDiskgroupEnabled() interface{}
```

- *Type:* interface{}

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeys"></a>

```go
func SshPublicKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() OracleDatabaseCloudVmClusterProperties
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a>

---


### OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference <a name="OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/oracledatabasecloudvmcluster"

oracledatabasecloudvmcluster.NewOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.internalValue"></a>

```go
func InternalValue() OracleDatabaseCloudVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a>

---


### OracleDatabaseCloudVmClusterTimeoutsOutputReference <a name="OracleDatabaseCloudVmClusterTimeoutsOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/oracledatabasecloudvmcluster"

oracledatabasecloudvmcluster.NewOracleDatabaseCloudVmClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OracleDatabaseCloudVmClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



