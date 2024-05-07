# `bigqueryTable` Submodule <a name="`bigqueryTable` Submodule" id="@cdktf/provider-google.bigqueryTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryTable <a name="BigqueryTable" id="@cdktf/provider-google.bigqueryTable.BigqueryTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table google_bigquery_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTable(scope Construct, id *string, config BigqueryTableConfig) BigqueryTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig">BigqueryTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig">BigqueryTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration">PutExternalDataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putMaterializedView">PutMaterializedView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putRangePartitioning">PutRangePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableConstraints">PutTableConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableReplicationInfo">PutTableReplicationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putTimePartitioning">PutTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putView">PutView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetClustering">ResetClustering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetExpirationTime">ResetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetExternalDataConfiguration">ResetExternalDataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetFriendlyName">ResetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetMaterializedView">ResetMaterializedView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetMaxStaleness">ResetMaxStaleness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetRangePartitioning">ResetRangePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetRequirePartitionFilter">ResetRequirePartitionFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetTableConstraints">ResetTableConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetTableReplicationInfo">ResetTableReplicationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetTimePartitioning">ResetTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetView">ResetView</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value BigqueryTableEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a>

---

##### `PutExternalDataConfiguration` <a name="PutExternalDataConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration"></a>

```go
func PutExternalDataConfiguration(value BigqueryTableExternalDataConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a>

---

##### `PutMaterializedView` <a name="PutMaterializedView" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putMaterializedView"></a>

```go
func PutMaterializedView(value BigqueryTableMaterializedView)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putMaterializedView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a>

---

##### `PutRangePartitioning` <a name="PutRangePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putRangePartitioning"></a>

```go
func PutRangePartitioning(value BigqueryTableRangePartitioning)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putRangePartitioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a>

---

##### `PutTableConstraints` <a name="PutTableConstraints" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableConstraints"></a>

```go
func PutTableConstraints(value BigqueryTableTableConstraints)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a>

---

##### `PutTableReplicationInfo` <a name="PutTableReplicationInfo" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableReplicationInfo"></a>

```go
func PutTableReplicationInfo(value BigqueryTableTableReplicationInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableReplicationInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a>

---

##### `PutTimePartitioning` <a name="PutTimePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTimePartitioning"></a>

```go
func PutTimePartitioning(value BigqueryTableTimePartitioning)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTimePartitioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a>

---

##### `PutView` <a name="PutView" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putView"></a>

```go
func PutView(value BigqueryTableView)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a>

---

##### `ResetClustering` <a name="ResetClustering" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetClustering"></a>

```go
func ResetClustering()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetExpirationTime` <a name="ResetExpirationTime" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetExpirationTime"></a>

```go
func ResetExpirationTime()
```

##### `ResetExternalDataConfiguration` <a name="ResetExternalDataConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetExternalDataConfiguration"></a>

```go
func ResetExternalDataConfiguration()
```

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetFriendlyName"></a>

```go
func ResetFriendlyName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaterializedView` <a name="ResetMaterializedView" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetMaterializedView"></a>

```go
func ResetMaterializedView()
```

##### `ResetMaxStaleness` <a name="ResetMaxStaleness" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetMaxStaleness"></a>

```go
func ResetMaxStaleness()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRangePartitioning` <a name="ResetRangePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetRangePartitioning"></a>

```go
func ResetRangePartitioning()
```

##### `ResetRequirePartitionFilter` <a name="ResetRequirePartitionFilter" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetRequirePartitionFilter"></a>

```go
func ResetRequirePartitionFilter()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetTableConstraints` <a name="ResetTableConstraints" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetTableConstraints"></a>

```go
func ResetTableConstraints()
```

##### `ResetTableReplicationInfo` <a name="ResetTableReplicationInfo" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetTableReplicationInfo"></a>

```go
func ResetTableReplicationInfo()
```

##### `ResetTimePartitioning` <a name="ResetTimePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetTimePartitioning"></a>

```go
func ResetTimePartitioning()
```

##### `ResetView` <a name="ResetView" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetView"></a>

```go
func ResetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.BigqueryTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.BigqueryTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.BigqueryTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.BigqueryTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BigqueryTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BigqueryTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BigqueryTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference">BigqueryTableEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.externalDataConfiguration">ExternalDataConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference">BigqueryTableExternalDataConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.materializedView">MaterializedView</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference">BigqueryTableMaterializedViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.numBytes">NumBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.numLongTermBytes">NumLongTermBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.numRows">NumRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.rangePartitioning">RangePartitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference">BigqueryTableRangePartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableConstraints">TableConstraints</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference">BigqueryTableTableConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableReplicationInfo">TableReplicationInfo</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference">BigqueryTableTableReplicationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.timePartitioning">TimePartitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference">BigqueryTableTimePartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.view">View</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference">BigqueryTableViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.clusteringInput">ClusteringInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.expirationTimeInput">ExpirationTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.externalDataConfigurationInput">ExternalDataConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.materializedViewInput">MaterializedViewInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.maxStalenessInput">MaxStalenessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.rangePartitioningInput">RangePartitioningInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.requirePartitionFilterInput">RequirePartitionFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableConstraintsInput">TableConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableIdInput">TableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableReplicationInfoInput">TableReplicationInfoInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.timePartitioningInput">TimePartitioningInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.viewInput">ViewInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.clustering">Clustering</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.expirationTime">ExpirationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.maxStaleness">MaxStaleness</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() BigqueryTableEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference">BigqueryTableEncryptionConfigurationOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ExternalDataConfiguration`<sup>Required</sup> <a name="ExternalDataConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.externalDataConfiguration"></a>

```go
func ExternalDataConfiguration() BigqueryTableExternalDataConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference">BigqueryTableExternalDataConfigurationOutputReference</a>

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *f64
```

- *Type:* *f64

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaterializedView`<sup>Required</sup> <a name="MaterializedView" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.materializedView"></a>

```go
func MaterializedView() BigqueryTableMaterializedViewOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference">BigqueryTableMaterializedViewOutputReference</a>

---

##### `NumBytes`<sup>Required</sup> <a name="NumBytes" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.numBytes"></a>

```go
func NumBytes() *f64
```

- *Type:* *f64

---

##### `NumLongTermBytes`<sup>Required</sup> <a name="NumLongTermBytes" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.numLongTermBytes"></a>

```go
func NumLongTermBytes() *f64
```

- *Type:* *f64

---

##### `NumRows`<sup>Required</sup> <a name="NumRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.numRows"></a>

```go
func NumRows() *f64
```

- *Type:* *f64

---

##### `RangePartitioning`<sup>Required</sup> <a name="RangePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.rangePartitioning"></a>

```go
func RangePartitioning() BigqueryTableRangePartitioningOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference">BigqueryTableRangePartitioningOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `TableConstraints`<sup>Required</sup> <a name="TableConstraints" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableConstraints"></a>

```go
func TableConstraints() BigqueryTableTableConstraintsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference">BigqueryTableTableConstraintsOutputReference</a>

---

##### `TableReplicationInfo`<sup>Required</sup> <a name="TableReplicationInfo" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableReplicationInfo"></a>

```go
func TableReplicationInfo() BigqueryTableTableReplicationInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference">BigqueryTableTableReplicationInfoOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimePartitioning`<sup>Required</sup> <a name="TimePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.timePartitioning"></a>

```go
func TimePartitioning() BigqueryTableTimePartitioningOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference">BigqueryTableTimePartitioningOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.view"></a>

```go
func View() BigqueryTableViewOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference">BigqueryTableViewOutputReference</a>

---

##### `ClusteringInput`<sup>Optional</sup> <a name="ClusteringInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.clusteringInput"></a>

```go
func ClusteringInput() *[]*string
```

- *Type:* *[]*string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() BigqueryTableEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a>

---

##### `ExpirationTimeInput`<sup>Optional</sup> <a name="ExpirationTimeInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.expirationTimeInput"></a>

```go
func ExpirationTimeInput() *f64
```

- *Type:* *f64

---

##### `ExternalDataConfigurationInput`<sup>Optional</sup> <a name="ExternalDataConfigurationInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.externalDataConfigurationInput"></a>

```go
func ExternalDataConfigurationInput() BigqueryTableExternalDataConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a>

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.friendlyNameInput"></a>

```go
func FriendlyNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaterializedViewInput`<sup>Optional</sup> <a name="MaterializedViewInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.materializedViewInput"></a>

```go
func MaterializedViewInput() BigqueryTableMaterializedView
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a>

---

##### `MaxStalenessInput`<sup>Optional</sup> <a name="MaxStalenessInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.maxStalenessInput"></a>

```go
func MaxStalenessInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RangePartitioningInput`<sup>Optional</sup> <a name="RangePartitioningInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.rangePartitioningInput"></a>

```go
func RangePartitioningInput() BigqueryTableRangePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a>

---

##### `RequirePartitionFilterInput`<sup>Optional</sup> <a name="RequirePartitionFilterInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.requirePartitionFilterInput"></a>

```go
func RequirePartitionFilterInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `TableConstraintsInput`<sup>Optional</sup> <a name="TableConstraintsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableConstraintsInput"></a>

```go
func TableConstraintsInput() BigqueryTableTableConstraints
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a>

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableIdInput"></a>

```go
func TableIdInput() *string
```

- *Type:* *string

---

##### `TableReplicationInfoInput`<sup>Optional</sup> <a name="TableReplicationInfoInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableReplicationInfoInput"></a>

```go
func TableReplicationInfoInput() BigqueryTableTableReplicationInfo
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a>

---

##### `TimePartitioningInput`<sup>Optional</sup> <a name="TimePartitioningInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.timePartitioningInput"></a>

```go
func TimePartitioningInput() BigqueryTableTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a>

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.viewInput"></a>

```go
func ViewInput() BigqueryTableView
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a>

---

##### `Clustering`<sup>Required</sup> <a name="Clustering" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.clustering"></a>

```go
func Clustering() *[]*string
```

- *Type:* *[]*string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.expirationTime"></a>

```go
func ExpirationTime() *f64
```

- *Type:* *f64

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.friendlyName"></a>

```go
func FriendlyName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxStaleness`<sup>Required</sup> <a name="MaxStaleness" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.maxStaleness"></a>

```go
func MaxStaleness() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RequirePartitionFilter`<sup>Required</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.requirePartitionFilter"></a>

```go
func RequirePartitionFilter() interface{}
```

- *Type:* interface{}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryTableConfig <a name="BigqueryTableConfig" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatasetId: *string,
	TableId: *string,
	Clustering: *[]*string,
	DeletionProtection: interface{},
	Description: *string,
	EncryptionConfiguration: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryTable.BigqueryTableEncryptionConfiguration,
	ExpirationTime: *f64,
	ExternalDataConfiguration: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryTable.BigqueryTableExternalDataConfiguration,
	FriendlyName: *string,
	Id: *string,
	Labels: *map[string]*string,
	MaterializedView: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryTable.BigqueryTableMaterializedView,
	MaxStaleness: *string,
	Project: *string,
	RangePartitioning: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryTable.BigqueryTableRangePartitioning,
	RequirePartitionFilter: interface{},
	Schema: *string,
	TableConstraints: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryTable.BigqueryTableTableConstraints,
	TableReplicationInfo: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryTable.BigqueryTableTableReplicationInfo,
	TimePartitioning: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryTable.BigqueryTableTimePartitioning,
	View: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryTable.BigqueryTableView,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.datasetId">DatasetId</a></code> | <code>*string</code> | The dataset ID to create the table in. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableId">TableId</a></code> | <code>*string</code> | A unique ID for the resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.clustering">Clustering</a></code> | <code>*[]*string</code> | Specifies column names to use for data clustering. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.description">Description</a></code> | <code>*string</code> | The field description. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.expirationTime">ExpirationTime</a></code> | <code>*f64</code> | The time when this table expires, in milliseconds since the epoch. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.externalDataConfiguration">ExternalDataConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a></code> | external_data_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | A descriptive name for the table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#id BigqueryTable#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A mapping of labels to assign to the resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.materializedView">MaterializedView</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a></code> | materialized_view block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.maxStaleness">MaxStaleness</a></code> | <code>*string</code> | The maximum staleness of data that could be returned when the table (or stale MV) is queried. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.rangePartitioning">RangePartitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a></code> | range_partitioning block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>interface{}</code> | If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.schema">Schema</a></code> | <code>*string</code> | A JSON schema for the table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableConstraints">TableConstraints</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a></code> | table_constraints block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableReplicationInfo">TableReplicationInfo</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a></code> | table_replication_info block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.timePartitioning">TimePartitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a></code> | time_partitioning block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.view">View</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a></code> | view block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The dataset ID to create the table in. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#dataset_id BigqueryTable#dataset_id}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableId"></a>

```go
TableId *string
```

- *Type:* *string

A unique ID for the resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#table_id BigqueryTable#table_id}

---

##### `Clustering`<sup>Optional</sup> <a name="Clustering" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.clustering"></a>

```go
Clustering *[]*string
```

- *Type:* *[]*string

Specifies column names to use for data clustering.

Up to four top-level columns are allowed, and should be specified in descending priority order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#clustering BigqueryTable#clustering}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#deletion_protection BigqueryTable#deletion_protection}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The field description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#description BigqueryTable#description}

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration BigqueryTableEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#encryption_configuration BigqueryTable#encryption_configuration}

---

##### `ExpirationTime`<sup>Optional</sup> <a name="ExpirationTime" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.expirationTime"></a>

```go
ExpirationTime *f64
```

- *Type:* *f64

The time when this table expires, in milliseconds since the epoch.

If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#expiration_time BigqueryTable#expiration_time}

---

##### `ExternalDataConfiguration`<sup>Optional</sup> <a name="ExternalDataConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.externalDataConfiguration"></a>

```go
ExternalDataConfiguration BigqueryTableExternalDataConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a>

external_data_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#external_data_configuration BigqueryTable#external_data_configuration}

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.friendlyName"></a>

```go
FriendlyName *string
```

- *Type:* *string

A descriptive name for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#friendly_name BigqueryTable#friendly_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#id BigqueryTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A mapping of labels to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#labels BigqueryTable#labels}

---

##### `MaterializedView`<sup>Optional</sup> <a name="MaterializedView" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.materializedView"></a>

```go
MaterializedView BigqueryTableMaterializedView
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a>

materialized_view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#materialized_view BigqueryTable#materialized_view}

---

##### `MaxStaleness`<sup>Optional</sup> <a name="MaxStaleness" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.maxStaleness"></a>

```go
MaxStaleness *string
```

- *Type:* *string

The maximum staleness of data that could be returned when the table (or stale MV) is queried.

Staleness encoded as a string encoding of [SQL IntervalValue type](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#interval_type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#max_staleness BigqueryTable#max_staleness}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#project BigqueryTable#project}

---

##### `RangePartitioning`<sup>Optional</sup> <a name="RangePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.rangePartitioning"></a>

```go
RangePartitioning BigqueryTableRangePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a>

range_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#range_partitioning BigqueryTable#range_partitioning}

---

##### `RequirePartitionFilter`<sup>Optional</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.requirePartitionFilter"></a>

```go
RequirePartitionFilter interface{}
```

- *Type:* interface{}

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

A JSON schema for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#schema BigqueryTable#schema}

---

##### `TableConstraints`<sup>Optional</sup> <a name="TableConstraints" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableConstraints"></a>

```go
TableConstraints BigqueryTableTableConstraints
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a>

table_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#table_constraints BigqueryTable#table_constraints}

---

##### `TableReplicationInfo`<sup>Optional</sup> <a name="TableReplicationInfo" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableReplicationInfo"></a>

```go
TableReplicationInfo BigqueryTableTableReplicationInfo
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a>

table_replication_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#table_replication_info BigqueryTable#table_replication_info}

---

##### `TimePartitioning`<sup>Optional</sup> <a name="TimePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.timePartitioning"></a>

```go
TimePartitioning BigqueryTableTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a>

time_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#time_partitioning BigqueryTable#time_partitioning}

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.view"></a>

```go
View BigqueryTableView
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a>

view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#view BigqueryTable#view}

---

### BigqueryTableEncryptionConfiguration <a name="BigqueryTableEncryptionConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableEncryptionConfiguration {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The self link or full name of a key which should be used to encrypt this table. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The self link or full name of a key which should be used to encrypt this table.

Note that the default bigquery service account will need to have encrypt/decrypt permissions on this key - you may want to see the google_bigquery_default_service_account datasource and the google_kms_crypto_key_iam_binding resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#kms_key_name BigqueryTable#kms_key_name}

---

### BigqueryTableExternalDataConfiguration <a name="BigqueryTableExternalDataConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableExternalDataConfiguration {
	Autodetect: interface{},
	SourceUris: *[]*string,
	AvroOptions: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions,
	Compression: *string,
	ConnectionId: *string,
	CsvOptions: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions,
	FileSetSpecType: *string,
	GoogleSheetsOptions: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions,
	HivePartitioningOptions: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions,
	IgnoreUnknownValues: interface{},
	JsonExtension: *string,
	JsonOptions: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions,
	MaxBadRecords: *f64,
	MetadataCacheMode: *string,
	ObjectMetadata: *string,
	ParquetOptions: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions,
	ReferenceFileSchemaUri: *string,
	Schema: *string,
	SourceFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.autodetect">Autodetect</a></code> | <code>interface{}</code> | Let BigQuery try to autodetect the schema and format of the table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.sourceUris">SourceUris</a></code> | <code>*[]*string</code> | A list of the fully-qualified URIs that point to your data in Google Cloud. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.avroOptions">AvroOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a></code> | avro_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.compression">Compression</a></code> | <code>*string</code> | The compression type of the data source. Valid values are "NONE" or "GZIP". |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.connectionId">ConnectionId</a></code> | <code>*string</code> | The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.fileSetSpecType">FileSetSpecType</a></code> | <code>*string</code> | Specifies how source URIs are interpreted for constructing the file set to load. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.googleSheetsOptions">GoogleSheetsOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | google_sheets_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.hivePartitioningOptions">HivePartitioningOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | hive_partitioning_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.ignoreUnknownValues">IgnoreUnknownValues</a></code> | <code>interface{}</code> | Indicates if BigQuery should allow extra values that are not represented in the table schema. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.jsonExtension">JsonExtension</a></code> | <code>*string</code> | Load option to be used together with sourceFormat newline-delimited JSON to indicate that a variant of JSON is being loaded. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.jsonOptions">JsonOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a></code> | json_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.maxBadRecords">MaxBadRecords</a></code> | <code>*f64</code> | The maximum number of bad records that BigQuery can ignore when reading data. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.metadataCacheMode">MetadataCacheMode</a></code> | <code>*string</code> | Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.objectMetadata">ObjectMetadata</a></code> | <code>*string</code> | Object Metadata is used to create Object Tables. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.parquetOptions">ParquetOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a></code> | parquet_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.referenceFileSchemaUri">ReferenceFileSchemaUri</a></code> | <code>*string</code> | When creating an external table, the user can provide a reference file with the table schema. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.schema">Schema</a></code> | <code>*string</code> | A JSON schema for the external table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.sourceFormat">SourceFormat</a></code> | <code>*string</code> | Please see sourceFormat under ExternalDataConfiguration in Bigquery's public API documentation (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration) for supported formats. To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly". |

---

##### `Autodetect`<sup>Required</sup> <a name="Autodetect" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.autodetect"></a>

```go
Autodetect interface{}
```

- *Type:* interface{}

Let BigQuery try to autodetect the schema and format of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#autodetect BigqueryTable#autodetect}

---

##### `SourceUris`<sup>Required</sup> <a name="SourceUris" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.sourceUris"></a>

```go
SourceUris *[]*string
```

- *Type:* *[]*string

A list of the fully-qualified URIs that point to your data in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#source_uris BigqueryTable#source_uris}

---

##### `AvroOptions`<sup>Optional</sup> <a name="AvroOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.avroOptions"></a>

```go
AvroOptions BigqueryTableExternalDataConfigurationAvroOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a>

avro_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#avro_options BigqueryTable#avro_options}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

The compression type of the data source. Valid values are "NONE" or "GZIP".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#compression BigqueryTable#compression}

---

##### `ConnectionId`<sup>Optional</sup> <a name="ConnectionId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3.

The connectionId can have the form "{{project}}.{{location}}.{{connection_id}}" or "projects/{{project}}/locations/{{location}}/connections/{{connection_id}}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#connection_id BigqueryTable#connection_id}

---

##### `CsvOptions`<sup>Optional</sup> <a name="CsvOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.csvOptions"></a>

```go
CsvOptions BigqueryTableExternalDataConfigurationCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#csv_options BigqueryTable#csv_options}

---

##### `FileSetSpecType`<sup>Optional</sup> <a name="FileSetSpecType" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.fileSetSpecType"></a>

```go
FileSetSpecType *string
```

- *Type:* *string

Specifies how source URIs are interpreted for constructing the file set to load.

By default source URIs are expanded against the underlying storage.  Other options include specifying manifest files. Only applicable to object storage systems.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#file_set_spec_type BigqueryTable#file_set_spec_type}

---

##### `GoogleSheetsOptions`<sup>Optional</sup> <a name="GoogleSheetsOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.googleSheetsOptions"></a>

```go
GoogleSheetsOptions BigqueryTableExternalDataConfigurationGoogleSheetsOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

google_sheets_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#google_sheets_options BigqueryTable#google_sheets_options}

---

##### `HivePartitioningOptions`<sup>Optional</sup> <a name="HivePartitioningOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.hivePartitioningOptions"></a>

```go
HivePartitioningOptions BigqueryTableExternalDataConfigurationHivePartitioningOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

hive_partitioning_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#hive_partitioning_options BigqueryTable#hive_partitioning_options}

---

##### `IgnoreUnknownValues`<sup>Optional</sup> <a name="IgnoreUnknownValues" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.ignoreUnknownValues"></a>

```go
IgnoreUnknownValues interface{}
```

- *Type:* interface{}

Indicates if BigQuery should allow extra values that are not represented in the table schema.

If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#ignore_unknown_values BigqueryTable#ignore_unknown_values}

---

##### `JsonExtension`<sup>Optional</sup> <a name="JsonExtension" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.jsonExtension"></a>

```go
JsonExtension *string
```

- *Type:* *string

Load option to be used together with sourceFormat newline-delimited JSON to indicate that a variant of JSON is being loaded.

To load newline-delimited GeoJSON, specify GEOJSON (and sourceFormat must be set to NEWLINE_DELIMITED_JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#json_extension BigqueryTable#json_extension}

---

##### `JsonOptions`<sup>Optional</sup> <a name="JsonOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.jsonOptions"></a>

```go
JsonOptions BigqueryTableExternalDataConfigurationJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#json_options BigqueryTable#json_options}

---

##### `MaxBadRecords`<sup>Optional</sup> <a name="MaxBadRecords" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.maxBadRecords"></a>

```go
MaxBadRecords *f64
```

- *Type:* *f64

The maximum number of bad records that BigQuery can ignore when reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#max_bad_records BigqueryTable#max_bad_records}

---

##### `MetadataCacheMode`<sup>Optional</sup> <a name="MetadataCacheMode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.metadataCacheMode"></a>

```go
MetadataCacheMode *string
```

- *Type:* *string

Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#metadata_cache_mode BigqueryTable#metadata_cache_mode}

---

##### `ObjectMetadata`<sup>Optional</sup> <a name="ObjectMetadata" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.objectMetadata"></a>

```go
ObjectMetadata *string
```

- *Type:* *string

Object Metadata is used to create Object Tables.

Object Tables contain a listing of objects (with their metadata) found at the sourceUris. If ObjectMetadata is set, sourceFormat should be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#object_metadata BigqueryTable#object_metadata}

---

##### `ParquetOptions`<sup>Optional</sup> <a name="ParquetOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.parquetOptions"></a>

```go
ParquetOptions BigqueryTableExternalDataConfigurationParquetOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a>

parquet_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#parquet_options BigqueryTable#parquet_options}

---

##### `ReferenceFileSchemaUri`<sup>Optional</sup> <a name="ReferenceFileSchemaUri" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.referenceFileSchemaUri"></a>

```go
ReferenceFileSchemaUri *string
```

- *Type:* *string

When creating an external table, the user can provide a reference file with the table schema.

This is enabled for the following formats: AVRO, PARQUET, ORC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#reference_file_schema_uri BigqueryTable#reference_file_schema_uri}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

A JSON schema for the external table.

Schema is required for CSV and JSON formats and is disallowed for Google Cloud Bigtable, Cloud Datastore backups, and Avro formats when using external tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#schema BigqueryTable#schema}

---

##### `SourceFormat`<sup>Optional</sup> <a name="SourceFormat" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.sourceFormat"></a>

```go
SourceFormat *string
```

- *Type:* *string

Please see sourceFormat under ExternalDataConfiguration in Bigquery's public API documentation (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration) for supported formats. To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#source_format BigqueryTable#source_format}

---

### BigqueryTableExternalDataConfigurationAvroOptions <a name="BigqueryTableExternalDataConfigurationAvroOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableExternalDataConfigurationAvroOptions {
	UseAvroLogicalTypes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions.property.useAvroLogicalTypes">UseAvroLogicalTypes</a></code> | <code>interface{}</code> | If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER). |

---

##### `UseAvroLogicalTypes`<sup>Required</sup> <a name="UseAvroLogicalTypes" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions.property.useAvroLogicalTypes"></a>

```go
UseAvroLogicalTypes interface{}
```

- *Type:* interface{}

If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#use_avro_logical_types BigqueryTable#use_avro_logical_types}

---

### BigqueryTableExternalDataConfigurationCsvOptions <a name="BigqueryTableExternalDataConfigurationCsvOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableExternalDataConfigurationCsvOptions {
	Quote: *string,
	AllowJaggedRows: interface{},
	AllowQuotedNewlines: interface{},
	Encoding: *string,
	FieldDelimiter: *string,
	SkipLeadingRows: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.quote">Quote</a></code> | <code>*string</code> | The value that is used to quote data sections in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.allowJaggedRows">AllowJaggedRows</a></code> | <code>interface{}</code> | Indicates if BigQuery should accept rows that are missing trailing optional columns. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.allowQuotedNewlines">AllowQuotedNewlines</a></code> | <code>interface{}</code> | Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.encoding">Encoding</a></code> | <code>*string</code> | The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | The separator for fields in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>*f64</code> | The number of rows at the top of a CSV file that BigQuery will skip when reading the data. |

---

##### `Quote`<sup>Required</sup> <a name="Quote" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.quote"></a>

```go
Quote *string
```

- *Type:* *string

The value that is used to quote data sections in a CSV file.

If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allow_quoted_newlines property to true. The API-side default is ", specified in Terraform escaped as ". Due to limitations with Terraform default values, this value is required to be explicitly set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#quote BigqueryTable#quote}

---

##### `AllowJaggedRows`<sup>Optional</sup> <a name="AllowJaggedRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.allowJaggedRows"></a>

```go
AllowJaggedRows interface{}
```

- *Type:* interface{}

Indicates if BigQuery should accept rows that are missing trailing optional columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#allow_jagged_rows BigqueryTable#allow_jagged_rows}

---

##### `AllowQuotedNewlines`<sup>Optional</sup> <a name="AllowQuotedNewlines" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.allowQuotedNewlines"></a>

```go
AllowQuotedNewlines interface{}
```

- *Type:* interface{}

Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#allow_quoted_newlines BigqueryTable#allow_quoted_newlines}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#encoding BigqueryTable#encoding}

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.fieldDelimiter"></a>

```go
FieldDelimiter *string
```

- *Type:* *string

The separator for fields in a CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#field_delimiter BigqueryTable#field_delimiter}

---

##### `SkipLeadingRows`<sup>Optional</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.skipLeadingRows"></a>

```go
SkipLeadingRows *f64
```

- *Type:* *f64

The number of rows at the top of a CSV file that BigQuery will skip when reading the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#skip_leading_rows BigqueryTable#skip_leading_rows}

---

### BigqueryTableExternalDataConfigurationGoogleSheetsOptions <a name="BigqueryTableExternalDataConfigurationGoogleSheetsOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions {
	Range: *string,
	SkipLeadingRows: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.range">Range</a></code> | <code>*string</code> | Range of a sheet to query from. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>*f64</code> | The number of rows at the top of the sheet that BigQuery will skip when reading the data. |

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.range"></a>

```go
Range *string
```

- *Type:* *string

Range of a sheet to query from.

Only used when non-empty. At least one of range or skip_leading_rows must be set. Typical format: "sheet_name!top_left_cell_id:bottom_right_cell_id" For example: "sheet1!A1:B20"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#range BigqueryTable#range}

---

##### `SkipLeadingRows`<sup>Optional</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.skipLeadingRows"></a>

```go
SkipLeadingRows *f64
```

- *Type:* *f64

The number of rows at the top of the sheet that BigQuery will skip when reading the data.

At least one of range or skip_leading_rows must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#skip_leading_rows BigqueryTable#skip_leading_rows}

---

### BigqueryTableExternalDataConfigurationHivePartitioningOptions <a name="BigqueryTableExternalDataConfigurationHivePartitioningOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableExternalDataConfigurationHivePartitioningOptions {
	Mode: *string,
	RequirePartitionFilter: interface{},
	SourceUriPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.mode">Mode</a></code> | <code>*string</code> | When set, what mode of hive partitioning to use when reading data. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>interface{}</code> | If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.sourceUriPrefix">SourceUriPrefix</a></code> | <code>*string</code> | When hive partition detection is requested, a common for all source uris must be required. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

When set, what mode of hive partitioning to use when reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#mode BigqueryTable#mode}

---

##### `RequirePartitionFilter`<sup>Optional</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.requirePartitionFilter"></a>

```go
RequirePartitionFilter interface{}
```

- *Type:* interface{}

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}

---

##### `SourceUriPrefix`<sup>Optional</sup> <a name="SourceUriPrefix" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.sourceUriPrefix"></a>

```go
SourceUriPrefix *string
```

- *Type:* *string

When hive partition detection is requested, a common for all source uris must be required.

The prefix must end immediately before the partition key encoding begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#source_uri_prefix BigqueryTable#source_uri_prefix}

---

### BigqueryTableExternalDataConfigurationJsonOptions <a name="BigqueryTableExternalDataConfigurationJsonOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableExternalDataConfigurationJsonOptions {
	Encoding: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions.property.encoding">Encoding</a></code> | <code>*string</code> | The character encoding of the data. |

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

The character encoding of the data.

The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#encoding BigqueryTable#encoding}

---

### BigqueryTableExternalDataConfigurationParquetOptions <a name="BigqueryTableExternalDataConfigurationParquetOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableExternalDataConfigurationParquetOptions {
	EnableListInference: interface{},
	EnumAsString: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions.property.enableListInference">EnableListInference</a></code> | <code>interface{}</code> | Indicates whether to use schema inference specifically for Parquet LIST logical type. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions.property.enumAsString">EnumAsString</a></code> | <code>interface{}</code> | Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default. |

---

##### `EnableListInference`<sup>Optional</sup> <a name="EnableListInference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions.property.enableListInference"></a>

```go
EnableListInference interface{}
```

- *Type:* interface{}

Indicates whether to use schema inference specifically for Parquet LIST logical type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#enable_list_inference BigqueryTable#enable_list_inference}

---

##### `EnumAsString`<sup>Optional</sup> <a name="EnumAsString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions.property.enumAsString"></a>

```go
EnumAsString interface{}
```

- *Type:* interface{}

Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#enum_as_string BigqueryTable#enum_as_string}

---

### BigqueryTableMaterializedView <a name="BigqueryTableMaterializedView" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableMaterializedView {
	Query: *string,
	AllowNonIncrementalDefinition: interface{},
	EnableRefresh: interface{},
	RefreshIntervalMs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.query">Query</a></code> | <code>*string</code> | A query whose result is persisted. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.allowNonIncrementalDefinition">AllowNonIncrementalDefinition</a></code> | <code>interface{}</code> | Allow non incremental materialized view definition. The default value is false. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.enableRefresh">EnableRefresh</a></code> | <code>interface{}</code> | Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.refreshIntervalMs">RefreshIntervalMs</a></code> | <code>*f64</code> | Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.query"></a>

```go
Query *string
```

- *Type:* *string

A query whose result is persisted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#query BigqueryTable#query}

---

##### `AllowNonIncrementalDefinition`<sup>Optional</sup> <a name="AllowNonIncrementalDefinition" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.allowNonIncrementalDefinition"></a>

```go
AllowNonIncrementalDefinition interface{}
```

- *Type:* interface{}

Allow non incremental materialized view definition. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#allow_non_incremental_definition BigqueryTable#allow_non_incremental_definition}

---

##### `EnableRefresh`<sup>Optional</sup> <a name="EnableRefresh" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.enableRefresh"></a>

```go
EnableRefresh interface{}
```

- *Type:* interface{}

Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#enable_refresh BigqueryTable#enable_refresh}

---

##### `RefreshIntervalMs`<sup>Optional</sup> <a name="RefreshIntervalMs" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.refreshIntervalMs"></a>

```go
RefreshIntervalMs *f64
```

- *Type:* *f64

Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#refresh_interval_ms BigqueryTable#refresh_interval_ms}

---

### BigqueryTableRangePartitioning <a name="BigqueryTableRangePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableRangePartitioning {
	Field: *string,
	Range: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryTable.BigqueryTableRangePartitioningRange,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning.property.field">Field</a></code> | <code>*string</code> | The field used to determine how to create a range-based partition. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a></code> | range block. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning.property.field"></a>

```go
Field *string
```

- *Type:* *string

The field used to determine how to create a range-based partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#field BigqueryTable#field}

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning.property.range"></a>

```go
Range BigqueryTableRangePartitioningRange
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#range BigqueryTable#range}

---

### BigqueryTableRangePartitioningRange <a name="BigqueryTableRangePartitioningRange" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableRangePartitioningRange {
	End: *f64,
	Interval: *f64,
	Start: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.end">End</a></code> | <code>*f64</code> | End of the range partitioning, exclusive. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.interval">Interval</a></code> | <code>*f64</code> | The width of each range within the partition. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.start">Start</a></code> | <code>*f64</code> | Start of the range partitioning, inclusive. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.end"></a>

```go
End *f64
```

- *Type:* *f64

End of the range partitioning, exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#end BigqueryTable#end}

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.interval"></a>

```go
Interval *f64
```

- *Type:* *f64

The width of each range within the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#interval BigqueryTable#interval}

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.start"></a>

```go
Start *f64
```

- *Type:* *f64

Start of the range partitioning, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#start BigqueryTable#start}

---

### BigqueryTableTableConstraints <a name="BigqueryTableTableConstraints" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableTableConstraints {
	ForeignKeys: interface{},
	PrimaryKey: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints.property.foreignKeys">ForeignKeys</a></code> | <code>interface{}</code> | foreign_keys block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints.property.primaryKey">PrimaryKey</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a></code> | primary_key block. |

---

##### `ForeignKeys`<sup>Optional</sup> <a name="ForeignKeys" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints.property.foreignKeys"></a>

```go
ForeignKeys interface{}
```

- *Type:* interface{}

foreign_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#foreign_keys BigqueryTable#foreign_keys}

---

##### `PrimaryKey`<sup>Optional</sup> <a name="PrimaryKey" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints.property.primaryKey"></a>

```go
PrimaryKey BigqueryTableTableConstraintsPrimaryKey
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a>

primary_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#primary_key BigqueryTable#primary_key}

---

### BigqueryTableTableConstraintsForeignKeys <a name="BigqueryTableTableConstraintsForeignKeys" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableTableConstraintsForeignKeys {
	ColumnReferences: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences,
	ReferencedTable: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.property.columnReferences">ColumnReferences</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a></code> | column_references block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.property.referencedTable">ReferencedTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a></code> | referenced_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.property.name">Name</a></code> | <code>*string</code> | Set only if the foreign key constraint is named. |

---

##### `ColumnReferences`<sup>Required</sup> <a name="ColumnReferences" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.property.columnReferences"></a>

```go
ColumnReferences BigqueryTableTableConstraintsForeignKeysColumnReferences
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a>

column_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#column_references BigqueryTable#column_references}

---

##### `ReferencedTable`<sup>Required</sup> <a name="ReferencedTable" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.property.referencedTable"></a>

```go
ReferencedTable BigqueryTableTableConstraintsForeignKeysReferencedTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a>

referenced_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#referenced_table BigqueryTable#referenced_table}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.property.name"></a>

```go
Name *string
```

- *Type:* *string

Set only if the foreign key constraint is named.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#name BigqueryTable#name}

---

### BigqueryTableTableConstraintsForeignKeysColumnReferences <a name="BigqueryTableTableConstraintsForeignKeysColumnReferences" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableTableConstraintsForeignKeysColumnReferences {
	ReferencedColumn: *string,
	ReferencingColumn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencedColumn">ReferencedColumn</a></code> | <code>*string</code> | The column in the primary key that are referenced by the referencingColumn. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencingColumn">ReferencingColumn</a></code> | <code>*string</code> | The column that composes the foreign key. |

---

##### `ReferencedColumn`<sup>Required</sup> <a name="ReferencedColumn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencedColumn"></a>

```go
ReferencedColumn *string
```

- *Type:* *string

The column in the primary key that are referenced by the referencingColumn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#referenced_column BigqueryTable#referenced_column}

---

##### `ReferencingColumn`<sup>Required</sup> <a name="ReferencingColumn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencingColumn"></a>

```go
ReferencingColumn *string
```

- *Type:* *string

The column that composes the foreign key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#referencing_column BigqueryTable#referencing_column}

---

### BigqueryTableTableConstraintsForeignKeysReferencedTable <a name="BigqueryTableTableConstraintsForeignKeysReferencedTable" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableTableConstraintsForeignKeysReferencedTable {
	DatasetId: *string,
	ProjectId: *string,
	TableId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.property.datasetId">DatasetId</a></code> | <code>*string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.property.tableId">TableId</a></code> | <code>*string</code> | The ID of the table. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#dataset_id BigqueryTable#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#project_id BigqueryTable#project_id}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.property.tableId"></a>

```go
TableId *string
```

- *Type:* *string

The ID of the table.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. Certain operations allow suffixing of the table ID with a partition decorator, such as sample_table$20190123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#table_id BigqueryTable#table_id}

---

### BigqueryTableTableConstraintsPrimaryKey <a name="BigqueryTableTableConstraintsPrimaryKey" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableTableConstraintsPrimaryKey {
	Columns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey.property.columns">Columns</a></code> | <code>*[]*string</code> | The columns that are composed of the primary key constraint. |

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey.property.columns"></a>

```go
Columns *[]*string
```

- *Type:* *[]*string

The columns that are composed of the primary key constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#columns BigqueryTable#columns}

---

### BigqueryTableTableReplicationInfo <a name="BigqueryTableTableReplicationInfo" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableTableReplicationInfo {
	SourceDatasetId: *string,
	SourceProjectId: *string,
	SourceTableId: *string,
	ReplicationIntervalMs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.sourceDatasetId">SourceDatasetId</a></code> | <code>*string</code> | The ID of the source dataset. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.sourceProjectId">SourceProjectId</a></code> | <code>*string</code> | The ID of the source project. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.sourceTableId">SourceTableId</a></code> | <code>*string</code> | The ID of the source materialized view. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.replicationIntervalMs">ReplicationIntervalMs</a></code> | <code>*f64</code> | The interval at which the source materialized view is polled for updates. The default is 300000. |

---

##### `SourceDatasetId`<sup>Required</sup> <a name="SourceDatasetId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.sourceDatasetId"></a>

```go
SourceDatasetId *string
```

- *Type:* *string

The ID of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#source_dataset_id BigqueryTable#source_dataset_id}

---

##### `SourceProjectId`<sup>Required</sup> <a name="SourceProjectId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.sourceProjectId"></a>

```go
SourceProjectId *string
```

- *Type:* *string

The ID of the source project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#source_project_id BigqueryTable#source_project_id}

---

##### `SourceTableId`<sup>Required</sup> <a name="SourceTableId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.sourceTableId"></a>

```go
SourceTableId *string
```

- *Type:* *string

The ID of the source materialized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#source_table_id BigqueryTable#source_table_id}

---

##### `ReplicationIntervalMs`<sup>Optional</sup> <a name="ReplicationIntervalMs" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.replicationIntervalMs"></a>

```go
ReplicationIntervalMs *f64
```

- *Type:* *f64

The interval at which the source materialized view is polled for updates. The default is 300000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#replication_interval_ms BigqueryTable#replication_interval_ms}

---

### BigqueryTableTimePartitioning <a name="BigqueryTableTimePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableTimePartitioning {
	Type: *string,
	ExpirationMs: *f64,
	Field: *string,
	RequirePartitionFilter: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.type">Type</a></code> | <code>*string</code> | The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.expirationMs">ExpirationMs</a></code> | <code>*f64</code> | Number of milliseconds for which to keep the storage for a partition. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.field">Field</a></code> | <code>*string</code> | The field used to determine how to create a time-based partition. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>interface{}</code> | If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.type"></a>

```go
Type *string
```

- *Type:* *string

The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#type BigqueryTable#type}

---

##### `ExpirationMs`<sup>Optional</sup> <a name="ExpirationMs" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.expirationMs"></a>

```go
ExpirationMs *f64
```

- *Type:* *f64

Number of milliseconds for which to keep the storage for a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#expiration_ms BigqueryTable#expiration_ms}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.field"></a>

```go
Field *string
```

- *Type:* *string

The field used to determine how to create a time-based partition.

If time-based partitioning is enabled without this value, the table is partitioned based on the load time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#field BigqueryTable#field}

---

##### `RequirePartitionFilter`<sup>Optional</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.requirePartitionFilter"></a>

```go
RequirePartitionFilter interface{}
```

- *Type:* interface{}

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}

---

### BigqueryTableView <a name="BigqueryTableView" id="@cdktf/provider-google.bigqueryTable.BigqueryTableView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableView.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

&bigquerytable.BigqueryTableView {
	Query: *string,
	UseLegacySql: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView.property.query">Query</a></code> | <code>*string</code> | A query that BigQuery executes when the view is referenced. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView.property.useLegacySql">UseLegacySql</a></code> | <code>interface{}</code> | Specifies whether to use BigQuery's legacy SQL for this view. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.bigqueryTable.BigqueryTableView.property.query"></a>

```go
Query *string
```

- *Type:* *string

A query that BigQuery executes when the view is referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#query BigqueryTable#query}

---

##### `UseLegacySql`<sup>Optional</sup> <a name="UseLegacySql" id="@cdktf/provider-google.bigqueryTable.BigqueryTableView.property.useLegacySql"></a>

```go
UseLegacySql interface{}
```

- *Type:* interface{}

Specifies whether to use BigQuery's legacy SQL for this view.

The default value is true. If set to false, the view will use BigQuery's standard SQL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_table#use_legacy_sql BigqueryTable#use_legacy_sql}

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryTableEncryptionConfigurationOutputReference <a name="BigqueryTableEncryptionConfigurationOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryTableEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyVersion">KmsKeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyVersion`<sup>Required</sup> <a name="KmsKeyVersion" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```go
func KmsKeyVersion() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryTableEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a>

---


### BigqueryTableExternalDataConfigurationAvroOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationAvroOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableExternalDataConfigurationAvroOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryTableExternalDataConfigurationAvroOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypesInput">UseAvroLogicalTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypes">UseAvroLogicalTypes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UseAvroLogicalTypesInput`<sup>Optional</sup> <a name="UseAvroLogicalTypesInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypesInput"></a>

```go
func UseAvroLogicalTypesInput() interface{}
```

- *Type:* interface{}

---

##### `UseAvroLogicalTypes`<sup>Required</sup> <a name="UseAvroLogicalTypes" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypes"></a>

```go
func UseAvroLogicalTypes() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryTableExternalDataConfigurationAvroOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a>

---


### BigqueryTableExternalDataConfigurationCsvOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationCsvOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableExternalDataConfigurationCsvOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryTableExternalDataConfigurationCsvOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowJaggedRows">ResetAllowJaggedRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowQuotedNewlines">ResetAllowQuotedNewlines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetSkipLeadingRows">ResetSkipLeadingRows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowJaggedRows` <a name="ResetAllowJaggedRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowJaggedRows"></a>

```go
func ResetAllowJaggedRows()
```

##### `ResetAllowQuotedNewlines` <a name="ResetAllowQuotedNewlines" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowQuotedNewlines"></a>

```go
func ResetAllowQuotedNewlines()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetFieldDelimiter"></a>

```go
func ResetFieldDelimiter()
```

##### `ResetSkipLeadingRows` <a name="ResetSkipLeadingRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetSkipLeadingRows"></a>

```go
func ResetSkipLeadingRows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRowsInput">AllowJaggedRowsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlinesInput">AllowQuotedNewlinesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quoteInput">QuoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRowsInput">SkipLeadingRowsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRows">AllowJaggedRows</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlines">AllowQuotedNewlines</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quote">Quote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowJaggedRowsInput`<sup>Optional</sup> <a name="AllowJaggedRowsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRowsInput"></a>

```go
func AllowJaggedRowsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowQuotedNewlinesInput`<sup>Optional</sup> <a name="AllowQuotedNewlinesInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlinesInput"></a>

```go
func AllowQuotedNewlinesInput() interface{}
```

- *Type:* interface{}

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiterInput"></a>

```go
func FieldDelimiterInput() *string
```

- *Type:* *string

---

##### `QuoteInput`<sup>Optional</sup> <a name="QuoteInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quoteInput"></a>

```go
func QuoteInput() *string
```

- *Type:* *string

---

##### `SkipLeadingRowsInput`<sup>Optional</sup> <a name="SkipLeadingRowsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRowsInput"></a>

```go
func SkipLeadingRowsInput() *f64
```

- *Type:* *f64

---

##### `AllowJaggedRows`<sup>Required</sup> <a name="AllowJaggedRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRows"></a>

```go
func AllowJaggedRows() interface{}
```

- *Type:* interface{}

---

##### `AllowQuotedNewlines`<sup>Required</sup> <a name="AllowQuotedNewlines" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlines"></a>

```go
func AllowQuotedNewlines() interface{}
```

- *Type:* interface{}

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `Quote`<sup>Required</sup> <a name="Quote" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quote"></a>

```go
func Quote() *string
```

- *Type:* *string

---

##### `SkipLeadingRows`<sup>Required</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRows"></a>

```go
func SkipLeadingRows() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryTableExternalDataConfigurationCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a>

---


### BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetSkipLeadingRows">ResetSkipLeadingRows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetRange"></a>

```go
func ResetRange()
```

##### `ResetSkipLeadingRows` <a name="ResetSkipLeadingRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetSkipLeadingRows"></a>

```go
func ResetSkipLeadingRows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.rangeInput">RangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRowsInput">SkipLeadingRowsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.range">Range</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.rangeInput"></a>

```go
func RangeInput() *string
```

- *Type:* *string

---

##### `SkipLeadingRowsInput`<sup>Optional</sup> <a name="SkipLeadingRowsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRowsInput"></a>

```go
func SkipLeadingRowsInput() *f64
```

- *Type:* *f64

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.range"></a>

```go
func Range() *string
```

- *Type:* *string

---

##### `SkipLeadingRows`<sup>Required</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRows"></a>

```go
func SkipLeadingRows() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryTableExternalDataConfigurationGoogleSheetsOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

---


### BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetRequirePartitionFilter">ResetRequirePartitionFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetSourceUriPrefix">ResetSourceUriPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetRequirePartitionFilter` <a name="ResetRequirePartitionFilter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetRequirePartitionFilter"></a>

```go
func ResetRequirePartitionFilter()
```

##### `ResetSourceUriPrefix` <a name="ResetSourceUriPrefix" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetSourceUriPrefix"></a>

```go
func ResetSourceUriPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilterInput">RequirePartitionFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefixInput">SourceUriPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefix">SourceUriPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `RequirePartitionFilterInput`<sup>Optional</sup> <a name="RequirePartitionFilterInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilterInput"></a>

```go
func RequirePartitionFilterInput() interface{}
```

- *Type:* interface{}

---

##### `SourceUriPrefixInput`<sup>Optional</sup> <a name="SourceUriPrefixInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefixInput"></a>

```go
func SourceUriPrefixInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `RequirePartitionFilter`<sup>Required</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilter"></a>

```go
func RequirePartitionFilter() interface{}
```

- *Type:* interface{}

---

##### `SourceUriPrefix`<sup>Required</sup> <a name="SourceUriPrefix" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefix"></a>

```go
func SourceUriPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryTableExternalDataConfigurationHivePartitioningOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

---


### BigqueryTableExternalDataConfigurationJsonOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationJsonOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableExternalDataConfigurationJsonOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryTableExternalDataConfigurationJsonOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryTableExternalDataConfigurationJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a>

---


### BigqueryTableExternalDataConfigurationOutputReference <a name="BigqueryTableExternalDataConfigurationOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableExternalDataConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryTableExternalDataConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putAvroOptions">PutAvroOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions">PutCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putGoogleSheetsOptions">PutGoogleSheetsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions">PutHivePartitioningOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putJsonOptions">PutJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putParquetOptions">PutParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetAvroOptions">ResetAvroOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetConnectionId">ResetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetCsvOptions">ResetCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetFileSetSpecType">ResetFileSetSpecType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetGoogleSheetsOptions">ResetGoogleSheetsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetHivePartitioningOptions">ResetHivePartitioningOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetIgnoreUnknownValues">ResetIgnoreUnknownValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetJsonExtension">ResetJsonExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetJsonOptions">ResetJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetMaxBadRecords">ResetMaxBadRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetMetadataCacheMode">ResetMetadataCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetObjectMetadata">ResetObjectMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetParquetOptions">ResetParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetReferenceFileSchemaUri">ResetReferenceFileSchemaUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetSourceFormat">ResetSourceFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvroOptions` <a name="PutAvroOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putAvroOptions"></a>

```go
func PutAvroOptions(value BigqueryTableExternalDataConfigurationAvroOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putAvroOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a>

---

##### `PutCsvOptions` <a name="PutCsvOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions"></a>

```go
func PutCsvOptions(value BigqueryTableExternalDataConfigurationCsvOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a>

---

##### `PutGoogleSheetsOptions` <a name="PutGoogleSheetsOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putGoogleSheetsOptions"></a>

```go
func PutGoogleSheetsOptions(value BigqueryTableExternalDataConfigurationGoogleSheetsOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putGoogleSheetsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

---

##### `PutHivePartitioningOptions` <a name="PutHivePartitioningOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions"></a>

```go
func PutHivePartitioningOptions(value BigqueryTableExternalDataConfigurationHivePartitioningOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

---

##### `PutJsonOptions` <a name="PutJsonOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putJsonOptions"></a>

```go
func PutJsonOptions(value BigqueryTableExternalDataConfigurationJsonOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putJsonOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a>

---

##### `PutParquetOptions` <a name="PutParquetOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putParquetOptions"></a>

```go
func PutParquetOptions(value BigqueryTableExternalDataConfigurationParquetOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putParquetOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a>

---

##### `ResetAvroOptions` <a name="ResetAvroOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetAvroOptions"></a>

```go
func ResetAvroOptions()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetConnectionId` <a name="ResetConnectionId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetConnectionId"></a>

```go
func ResetConnectionId()
```

##### `ResetCsvOptions` <a name="ResetCsvOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetCsvOptions"></a>

```go
func ResetCsvOptions()
```

##### `ResetFileSetSpecType` <a name="ResetFileSetSpecType" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetFileSetSpecType"></a>

```go
func ResetFileSetSpecType()
```

##### `ResetGoogleSheetsOptions` <a name="ResetGoogleSheetsOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetGoogleSheetsOptions"></a>

```go
func ResetGoogleSheetsOptions()
```

##### `ResetHivePartitioningOptions` <a name="ResetHivePartitioningOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetHivePartitioningOptions"></a>

```go
func ResetHivePartitioningOptions()
```

##### `ResetIgnoreUnknownValues` <a name="ResetIgnoreUnknownValues" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetIgnoreUnknownValues"></a>

```go
func ResetIgnoreUnknownValues()
```

##### `ResetJsonExtension` <a name="ResetJsonExtension" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetJsonExtension"></a>

```go
func ResetJsonExtension()
```

##### `ResetJsonOptions` <a name="ResetJsonOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetJsonOptions"></a>

```go
func ResetJsonOptions()
```

##### `ResetMaxBadRecords` <a name="ResetMaxBadRecords" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetMaxBadRecords"></a>

```go
func ResetMaxBadRecords()
```

##### `ResetMetadataCacheMode` <a name="ResetMetadataCacheMode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetMetadataCacheMode"></a>

```go
func ResetMetadataCacheMode()
```

##### `ResetObjectMetadata` <a name="ResetObjectMetadata" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetObjectMetadata"></a>

```go
func ResetObjectMetadata()
```

##### `ResetParquetOptions` <a name="ResetParquetOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetParquetOptions"></a>

```go
func ResetParquetOptions()
```

##### `ResetReferenceFileSchemaUri` <a name="ResetReferenceFileSchemaUri" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetReferenceFileSchemaUri"></a>

```go
func ResetReferenceFileSchemaUri()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetSourceFormat` <a name="ResetSourceFormat" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetSourceFormat"></a>

```go
func ResetSourceFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.avroOptions">AvroOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference">BigqueryTableExternalDataConfigurationAvroOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference">BigqueryTableExternalDataConfigurationCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptions">GoogleSheetsOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference">BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptions">HivePartitioningOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference">BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonOptions">JsonOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference">BigqueryTableExternalDataConfigurationJsonOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.parquetOptions">ParquetOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference">BigqueryTableExternalDataConfigurationParquetOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.autodetectInput">AutodetectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.avroOptionsInput">AvroOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.csvOptionsInput">CsvOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecTypeInput">FileSetSpecTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptionsInput">GoogleSheetsOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptionsInput">HivePartitioningOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValuesInput">IgnoreUnknownValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonExtensionInput">JsonExtensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonOptionsInput">JsonOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecordsInput">MaxBadRecordsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheModeInput">MetadataCacheModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.objectMetadataInput">ObjectMetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.parquetOptionsInput">ParquetOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUriInput">ReferenceFileSchemaUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceFormatInput">SourceFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceUrisInput">SourceUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.autodetect">Autodetect</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecType">FileSetSpecType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValues">IgnoreUnknownValues</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonExtension">JsonExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecords">MaxBadRecords</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheMode">MetadataCacheMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.objectMetadata">ObjectMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUri">ReferenceFileSchemaUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceFormat">SourceFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceUris">SourceUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvroOptions`<sup>Required</sup> <a name="AvroOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.avroOptions"></a>

```go
func AvroOptions() BigqueryTableExternalDataConfigurationAvroOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference">BigqueryTableExternalDataConfigurationAvroOptionsOutputReference</a>

---

##### `CsvOptions`<sup>Required</sup> <a name="CsvOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.csvOptions"></a>

```go
func CsvOptions() BigqueryTableExternalDataConfigurationCsvOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference">BigqueryTableExternalDataConfigurationCsvOptionsOutputReference</a>

---

##### `GoogleSheetsOptions`<sup>Required</sup> <a name="GoogleSheetsOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptions"></a>

```go
func GoogleSheetsOptions() BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference">BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference</a>

---

##### `HivePartitioningOptions`<sup>Required</sup> <a name="HivePartitioningOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptions"></a>

```go
func HivePartitioningOptions() BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference">BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference</a>

---

##### `JsonOptions`<sup>Required</sup> <a name="JsonOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonOptions"></a>

```go
func JsonOptions() BigqueryTableExternalDataConfigurationJsonOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference">BigqueryTableExternalDataConfigurationJsonOptionsOutputReference</a>

---

##### `ParquetOptions`<sup>Required</sup> <a name="ParquetOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.parquetOptions"></a>

```go
func ParquetOptions() BigqueryTableExternalDataConfigurationParquetOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference">BigqueryTableExternalDataConfigurationParquetOptionsOutputReference</a>

---

##### `AutodetectInput`<sup>Optional</sup> <a name="AutodetectInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.autodetectInput"></a>

```go
func AutodetectInput() interface{}
```

- *Type:* interface{}

---

##### `AvroOptionsInput`<sup>Optional</sup> <a name="AvroOptionsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.avroOptionsInput"></a>

```go
func AvroOptionsInput() BigqueryTableExternalDataConfigurationAvroOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a>

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `CsvOptionsInput`<sup>Optional</sup> <a name="CsvOptionsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.csvOptionsInput"></a>

```go
func CsvOptionsInput() BigqueryTableExternalDataConfigurationCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a>

---

##### `FileSetSpecTypeInput`<sup>Optional</sup> <a name="FileSetSpecTypeInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecTypeInput"></a>

```go
func FileSetSpecTypeInput() *string
```

- *Type:* *string

---

##### `GoogleSheetsOptionsInput`<sup>Optional</sup> <a name="GoogleSheetsOptionsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptionsInput"></a>

```go
func GoogleSheetsOptionsInput() BigqueryTableExternalDataConfigurationGoogleSheetsOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

---

##### `HivePartitioningOptionsInput`<sup>Optional</sup> <a name="HivePartitioningOptionsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptionsInput"></a>

```go
func HivePartitioningOptionsInput() BigqueryTableExternalDataConfigurationHivePartitioningOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

---

##### `IgnoreUnknownValuesInput`<sup>Optional</sup> <a name="IgnoreUnknownValuesInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValuesInput"></a>

```go
func IgnoreUnknownValuesInput() interface{}
```

- *Type:* interface{}

---

##### `JsonExtensionInput`<sup>Optional</sup> <a name="JsonExtensionInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonExtensionInput"></a>

```go
func JsonExtensionInput() *string
```

- *Type:* *string

---

##### `JsonOptionsInput`<sup>Optional</sup> <a name="JsonOptionsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonOptionsInput"></a>

```go
func JsonOptionsInput() BigqueryTableExternalDataConfigurationJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a>

---

##### `MaxBadRecordsInput`<sup>Optional</sup> <a name="MaxBadRecordsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecordsInput"></a>

```go
func MaxBadRecordsInput() *f64
```

- *Type:* *f64

---

##### `MetadataCacheModeInput`<sup>Optional</sup> <a name="MetadataCacheModeInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheModeInput"></a>

```go
func MetadataCacheModeInput() *string
```

- *Type:* *string

---

##### `ObjectMetadataInput`<sup>Optional</sup> <a name="ObjectMetadataInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.objectMetadataInput"></a>

```go
func ObjectMetadataInput() *string
```

- *Type:* *string

---

##### `ParquetOptionsInput`<sup>Optional</sup> <a name="ParquetOptionsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.parquetOptionsInput"></a>

```go
func ParquetOptionsInput() BigqueryTableExternalDataConfigurationParquetOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a>

---

##### `ReferenceFileSchemaUriInput`<sup>Optional</sup> <a name="ReferenceFileSchemaUriInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUriInput"></a>

```go
func ReferenceFileSchemaUriInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `SourceFormatInput`<sup>Optional</sup> <a name="SourceFormatInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceFormatInput"></a>

```go
func SourceFormatInput() *string
```

- *Type:* *string

---

##### `SourceUrisInput`<sup>Optional</sup> <a name="SourceUrisInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceUrisInput"></a>

```go
func SourceUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `Autodetect`<sup>Required</sup> <a name="Autodetect" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.autodetect"></a>

```go
func Autodetect() interface{}
```

- *Type:* interface{}

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `FileSetSpecType`<sup>Required</sup> <a name="FileSetSpecType" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecType"></a>

```go
func FileSetSpecType() *string
```

- *Type:* *string

---

##### `IgnoreUnknownValues`<sup>Required</sup> <a name="IgnoreUnknownValues" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValues"></a>

```go
func IgnoreUnknownValues() interface{}
```

- *Type:* interface{}

---

##### `JsonExtension`<sup>Required</sup> <a name="JsonExtension" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonExtension"></a>

```go
func JsonExtension() *string
```

- *Type:* *string

---

##### `MaxBadRecords`<sup>Required</sup> <a name="MaxBadRecords" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecords"></a>

```go
func MaxBadRecords() *f64
```

- *Type:* *f64

---

##### `MetadataCacheMode`<sup>Required</sup> <a name="MetadataCacheMode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheMode"></a>

```go
func MetadataCacheMode() *string
```

- *Type:* *string

---

##### `ObjectMetadata`<sup>Required</sup> <a name="ObjectMetadata" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.objectMetadata"></a>

```go
func ObjectMetadata() *string
```

- *Type:* *string

---

##### `ReferenceFileSchemaUri`<sup>Required</sup> <a name="ReferenceFileSchemaUri" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUri"></a>

```go
func ReferenceFileSchemaUri() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `SourceFormat`<sup>Required</sup> <a name="SourceFormat" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceFormat"></a>

```go
func SourceFormat() *string
```

- *Type:* *string

---

##### `SourceUris`<sup>Required</sup> <a name="SourceUris" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceUris"></a>

```go
func SourceUris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryTableExternalDataConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a>

---


### BigqueryTableExternalDataConfigurationParquetOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationParquetOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableExternalDataConfigurationParquetOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryTableExternalDataConfigurationParquetOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnableListInference">ResetEnableListInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnumAsString">ResetEnumAsString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableListInference` <a name="ResetEnableListInference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnableListInference"></a>

```go
func ResetEnableListInference()
```

##### `ResetEnumAsString` <a name="ResetEnumAsString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnumAsString"></a>

```go
func ResetEnumAsString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInferenceInput">EnableListInferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsStringInput">EnumAsStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInference">EnableListInference</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsString">EnumAsString</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableListInferenceInput`<sup>Optional</sup> <a name="EnableListInferenceInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInferenceInput"></a>

```go
func EnableListInferenceInput() interface{}
```

- *Type:* interface{}

---

##### `EnumAsStringInput`<sup>Optional</sup> <a name="EnumAsStringInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsStringInput"></a>

```go
func EnumAsStringInput() interface{}
```

- *Type:* interface{}

---

##### `EnableListInference`<sup>Required</sup> <a name="EnableListInference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInference"></a>

```go
func EnableListInference() interface{}
```

- *Type:* interface{}

---

##### `EnumAsString`<sup>Required</sup> <a name="EnumAsString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsString"></a>

```go
func EnumAsString() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryTableExternalDataConfigurationParquetOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a>

---


### BigqueryTableMaterializedViewOutputReference <a name="BigqueryTableMaterializedViewOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableMaterializedViewOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryTableMaterializedViewOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resetAllowNonIncrementalDefinition">ResetAllowNonIncrementalDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resetEnableRefresh">ResetEnableRefresh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resetRefreshIntervalMs">ResetRefreshIntervalMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowNonIncrementalDefinition` <a name="ResetAllowNonIncrementalDefinition" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resetAllowNonIncrementalDefinition"></a>

```go
func ResetAllowNonIncrementalDefinition()
```

##### `ResetEnableRefresh` <a name="ResetEnableRefresh" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resetEnableRefresh"></a>

```go
func ResetEnableRefresh()
```

##### `ResetRefreshIntervalMs` <a name="ResetRefreshIntervalMs" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resetRefreshIntervalMs"></a>

```go
func ResetRefreshIntervalMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinitionInput">AllowNonIncrementalDefinitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.enableRefreshInput">EnableRefreshInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.refreshIntervalMsInput">RefreshIntervalMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinition">AllowNonIncrementalDefinition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.enableRefresh">EnableRefresh</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.refreshIntervalMs">RefreshIntervalMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowNonIncrementalDefinitionInput`<sup>Optional</sup> <a name="AllowNonIncrementalDefinitionInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinitionInput"></a>

```go
func AllowNonIncrementalDefinitionInput() interface{}
```

- *Type:* interface{}

---

##### `EnableRefreshInput`<sup>Optional</sup> <a name="EnableRefreshInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.enableRefreshInput"></a>

```go
func EnableRefreshInput() interface{}
```

- *Type:* interface{}

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `RefreshIntervalMsInput`<sup>Optional</sup> <a name="RefreshIntervalMsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.refreshIntervalMsInput"></a>

```go
func RefreshIntervalMsInput() *f64
```

- *Type:* *f64

---

##### `AllowNonIncrementalDefinition`<sup>Required</sup> <a name="AllowNonIncrementalDefinition" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinition"></a>

```go
func AllowNonIncrementalDefinition() interface{}
```

- *Type:* interface{}

---

##### `EnableRefresh`<sup>Required</sup> <a name="EnableRefresh" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.enableRefresh"></a>

```go
func EnableRefresh() interface{}
```

- *Type:* interface{}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `RefreshIntervalMs`<sup>Required</sup> <a name="RefreshIntervalMs" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.refreshIntervalMs"></a>

```go
func RefreshIntervalMs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryTableMaterializedView
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a>

---


### BigqueryTableRangePartitioningOutputReference <a name="BigqueryTableRangePartitioningOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableRangePartitioningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryTableRangePartitioningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.putRange">PutRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.putRange"></a>

```go
func PutRange(value BigqueryTableRangePartitioningRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference">BigqueryTableRangePartitioningRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.range"></a>

```go
func Range() BigqueryTableRangePartitioningRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference">BigqueryTableRangePartitioningRangeOutputReference</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.rangeInput"></a>

```go
func RangeInput() BigqueryTableRangePartitioningRange
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a>

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryTableRangePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a>

---


### BigqueryTableRangePartitioningRangeOutputReference <a name="BigqueryTableRangePartitioningRangeOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableRangePartitioningRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryTableRangePartitioningRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.endInput">EndInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.startInput">StartInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.end">End</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.start">Start</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.endInput"></a>

```go
func EndInput() *f64
```

- *Type:* *f64

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *f64
```

- *Type:* *f64

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.startInput"></a>

```go
func StartInput() *f64
```

- *Type:* *f64

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.end"></a>

```go
func End() *f64
```

- *Type:* *f64

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.start"></a>

```go
func Start() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryTableRangePartitioningRange
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a>

---


### BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference <a name="BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumnInput">ReferencedColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumnInput">ReferencingColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumn">ReferencedColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumn">ReferencingColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReferencedColumnInput`<sup>Optional</sup> <a name="ReferencedColumnInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumnInput"></a>

```go
func ReferencedColumnInput() *string
```

- *Type:* *string

---

##### `ReferencingColumnInput`<sup>Optional</sup> <a name="ReferencingColumnInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumnInput"></a>

```go
func ReferencingColumnInput() *string
```

- *Type:* *string

---

##### `ReferencedColumn`<sup>Required</sup> <a name="ReferencedColumn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumn"></a>

```go
func ReferencedColumn() *string
```

- *Type:* *string

---

##### `ReferencingColumn`<sup>Required</sup> <a name="ReferencingColumn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumn"></a>

```go
func ReferencingColumn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryTableTableConstraintsForeignKeysColumnReferences
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a>

---


### BigqueryTableTableConstraintsForeignKeysList <a name="BigqueryTableTableConstraintsForeignKeysList" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableTableConstraintsForeignKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BigqueryTableTableConstraintsForeignKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.get"></a>

```go
func Get(index *f64) BigqueryTableTableConstraintsForeignKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BigqueryTableTableConstraintsForeignKeysOutputReference <a name="BigqueryTableTableConstraintsForeignKeysOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableTableConstraintsForeignKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BigqueryTableTableConstraintsForeignKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putColumnReferences">PutColumnReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable">PutReferencedTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnReferences` <a name="PutColumnReferences" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putColumnReferences"></a>

```go
func PutColumnReferences(value BigqueryTableTableConstraintsForeignKeysColumnReferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putColumnReferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a>

---

##### `PutReferencedTable` <a name="PutReferencedTable" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable"></a>

```go
func PutReferencedTable(value BigqueryTableTableConstraintsForeignKeysReferencedTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferences">ColumnReferences</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference">BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTable">ReferencedTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference">BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferencesInput">ColumnReferencesInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTableInput">ReferencedTableInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnReferences`<sup>Required</sup> <a name="ColumnReferences" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferences"></a>

```go
func ColumnReferences() BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference">BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference</a>

---

##### `ReferencedTable`<sup>Required</sup> <a name="ReferencedTable" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTable"></a>

```go
func ReferencedTable() BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference">BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference</a>

---

##### `ColumnReferencesInput`<sup>Optional</sup> <a name="ColumnReferencesInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferencesInput"></a>

```go
func ColumnReferencesInput() BigqueryTableTableConstraintsForeignKeysColumnReferences
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReferencedTableInput`<sup>Optional</sup> <a name="ReferencedTableInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTableInput"></a>

```go
func ReferencedTableInput() BigqueryTableTableConstraintsForeignKeysReferencedTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference <a name="BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableIdInput"></a>

```go
func TableIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryTableTableConstraintsForeignKeysReferencedTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a>

---


### BigqueryTableTableConstraintsOutputReference <a name="BigqueryTableTableConstraintsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableTableConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryTableTableConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.putForeignKeys">PutForeignKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.putPrimaryKey">PutPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resetForeignKeys">ResetForeignKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resetPrimaryKey">ResetPrimaryKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForeignKeys` <a name="PutForeignKeys" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.putForeignKeys"></a>

```go
func PutForeignKeys(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.putForeignKeys.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPrimaryKey` <a name="PutPrimaryKey" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.putPrimaryKey"></a>

```go
func PutPrimaryKey(value BigqueryTableTableConstraintsPrimaryKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.putPrimaryKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a>

---

##### `ResetForeignKeys` <a name="ResetForeignKeys" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resetForeignKeys"></a>

```go
func ResetForeignKeys()
```

##### `ResetPrimaryKey` <a name="ResetPrimaryKey" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resetPrimaryKey"></a>

```go
func ResetPrimaryKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.foreignKeys">ForeignKeys</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList">BigqueryTableTableConstraintsForeignKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.primaryKey">PrimaryKey</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference">BigqueryTableTableConstraintsPrimaryKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.foreignKeysInput">ForeignKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForeignKeys`<sup>Required</sup> <a name="ForeignKeys" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.foreignKeys"></a>

```go
func ForeignKeys() BigqueryTableTableConstraintsForeignKeysList
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList">BigqueryTableTableConstraintsForeignKeysList</a>

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.primaryKey"></a>

```go
func PrimaryKey() BigqueryTableTableConstraintsPrimaryKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference">BigqueryTableTableConstraintsPrimaryKeyOutputReference</a>

---

##### `ForeignKeysInput`<sup>Optional</sup> <a name="ForeignKeysInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.foreignKeysInput"></a>

```go
func ForeignKeysInput() interface{}
```

- *Type:* interface{}

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.primaryKeyInput"></a>

```go
func PrimaryKeyInput() BigqueryTableTableConstraintsPrimaryKey
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryTableTableConstraints
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a>

---


### BigqueryTableTableConstraintsPrimaryKeyOutputReference <a name="BigqueryTableTableConstraintsPrimaryKeyOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableTableConstraintsPrimaryKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryTableTableConstraintsPrimaryKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columns">Columns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columnsInput"></a>

```go
func ColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columns"></a>

```go
func Columns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryTableTableConstraintsPrimaryKey
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a>

---


### BigqueryTableTableReplicationInfoOutputReference <a name="BigqueryTableTableReplicationInfoOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableTableReplicationInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryTableTableReplicationInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.resetReplicationIntervalMs">ResetReplicationIntervalMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplicationIntervalMs` <a name="ResetReplicationIntervalMs" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.resetReplicationIntervalMs"></a>

```go
func ResetReplicationIntervalMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMsInput">ReplicationIntervalMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetIdInput">SourceDatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceProjectIdInput">SourceProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceTableIdInput">SourceTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMs">ReplicationIntervalMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetId">SourceDatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceProjectId">SourceProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceTableId">SourceTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReplicationIntervalMsInput`<sup>Optional</sup> <a name="ReplicationIntervalMsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMsInput"></a>

```go
func ReplicationIntervalMsInput() *f64
```

- *Type:* *f64

---

##### `SourceDatasetIdInput`<sup>Optional</sup> <a name="SourceDatasetIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetIdInput"></a>

```go
func SourceDatasetIdInput() *string
```

- *Type:* *string

---

##### `SourceProjectIdInput`<sup>Optional</sup> <a name="SourceProjectIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceProjectIdInput"></a>

```go
func SourceProjectIdInput() *string
```

- *Type:* *string

---

##### `SourceTableIdInput`<sup>Optional</sup> <a name="SourceTableIdInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceTableIdInput"></a>

```go
func SourceTableIdInput() *string
```

- *Type:* *string

---

##### `ReplicationIntervalMs`<sup>Required</sup> <a name="ReplicationIntervalMs" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMs"></a>

```go
func ReplicationIntervalMs() *f64
```

- *Type:* *f64

---

##### `SourceDatasetId`<sup>Required</sup> <a name="SourceDatasetId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetId"></a>

```go
func SourceDatasetId() *string
```

- *Type:* *string

---

##### `SourceProjectId`<sup>Required</sup> <a name="SourceProjectId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceProjectId"></a>

```go
func SourceProjectId() *string
```

- *Type:* *string

---

##### `SourceTableId`<sup>Required</sup> <a name="SourceTableId" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceTableId"></a>

```go
func SourceTableId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryTableTableReplicationInfo
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a>

---


### BigqueryTableTimePartitioningOutputReference <a name="BigqueryTableTimePartitioningOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableTimePartitioningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryTableTimePartitioningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resetExpirationMs">ResetExpirationMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resetField">ResetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resetRequirePartitionFilter">ResetRequirePartitionFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationMs` <a name="ResetExpirationMs" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resetExpirationMs"></a>

```go
func ResetExpirationMs()
```

##### `ResetField` <a name="ResetField" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resetField"></a>

```go
func ResetField()
```

##### `ResetRequirePartitionFilter` <a name="ResetRequirePartitionFilter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resetRequirePartitionFilter"></a>

```go
func ResetRequirePartitionFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.expirationMsInput">ExpirationMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.requirePartitionFilterInput">RequirePartitionFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.expirationMs">ExpirationMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpirationMsInput`<sup>Optional</sup> <a name="ExpirationMsInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.expirationMsInput"></a>

```go
func ExpirationMsInput() *f64
```

- *Type:* *f64

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `RequirePartitionFilterInput`<sup>Optional</sup> <a name="RequirePartitionFilterInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.requirePartitionFilterInput"></a>

```go
func RequirePartitionFilterInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ExpirationMs`<sup>Required</sup> <a name="ExpirationMs" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.expirationMs"></a>

```go
func ExpirationMs() *f64
```

- *Type:* *f64

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `RequirePartitionFilter`<sup>Required</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.requirePartitionFilter"></a>

```go
func RequirePartitionFilter() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryTableTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a>

---


### BigqueryTableViewOutputReference <a name="BigqueryTableViewOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerytable"

bigquerytable.NewBigqueryTableViewOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryTableViewOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.resetUseLegacySql">ResetUseLegacySql</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseLegacySql` <a name="ResetUseLegacySql" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.resetUseLegacySql"></a>

```go
func ResetUseLegacySql()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.useLegacySqlInput">UseLegacySqlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.useLegacySql">UseLegacySql</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `UseLegacySqlInput`<sup>Optional</sup> <a name="UseLegacySqlInput" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.useLegacySqlInput"></a>

```go
func UseLegacySqlInput() interface{}
```

- *Type:* interface{}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `UseLegacySql`<sup>Required</sup> <a name="UseLegacySql" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.useLegacySql"></a>

```go
func UseLegacySql() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryTableView
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a>

---



