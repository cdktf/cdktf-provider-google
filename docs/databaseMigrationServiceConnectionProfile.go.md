# `databaseMigrationServiceConnectionProfile` Submodule <a name="`databaseMigrationServiceConnectionProfile` Submodule" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMigrationServiceConnectionProfile <a name="DatabaseMigrationServiceConnectionProfile" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile google_database_migration_service_connection_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfile(scope Construct, id *string, config DatabaseMigrationServiceConnectionProfileConfig) DatabaseMigrationServiceConnectionProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig">DatabaseMigrationServiceConnectionProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig">DatabaseMigrationServiceConnectionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putAlloydb">PutAlloydb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putCloudsql">PutCloudsql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putMysql">PutMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putOracle">PutOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putPostgresql">PutPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetAlloydb">ResetAlloydb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetCloudsql">ResetCloudsql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetMysql">ResetMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetOracle">ResetOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetPostgresql">ResetPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlloydb` <a name="PutAlloydb" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putAlloydb"></a>

```go
func PutAlloydb(value DatabaseMigrationServiceConnectionProfileAlloydb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putAlloydb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb">DatabaseMigrationServiceConnectionProfileAlloydb</a>

---

##### `PutCloudsql` <a name="PutCloudsql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putCloudsql"></a>

```go
func PutCloudsql(value DatabaseMigrationServiceConnectionProfileCloudsql)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putCloudsql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql">DatabaseMigrationServiceConnectionProfileCloudsql</a>

---

##### `PutMysql` <a name="PutMysql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putMysql"></a>

```go
func PutMysql(value DatabaseMigrationServiceConnectionProfileMysql)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putMysql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql">DatabaseMigrationServiceConnectionProfileMysql</a>

---

##### `PutOracle` <a name="PutOracle" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putOracle"></a>

```go
func PutOracle(value DatabaseMigrationServiceConnectionProfileOracle)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putOracle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle">DatabaseMigrationServiceConnectionProfileOracle</a>

---

##### `PutPostgresql` <a name="PutPostgresql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putPostgresql"></a>

```go
func PutPostgresql(value DatabaseMigrationServiceConnectionProfilePostgresql)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putPostgresql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql">DatabaseMigrationServiceConnectionProfilePostgresql</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseMigrationServiceConnectionProfileTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts">DatabaseMigrationServiceConnectionProfileTimeouts</a>

---

##### `ResetAlloydb` <a name="ResetAlloydb" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetAlloydb"></a>

```go
func ResetAlloydb()
```

##### `ResetCloudsql` <a name="ResetCloudsql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetCloudsql"></a>

```go
func ResetCloudsql()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMysql` <a name="ResetMysql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetMysql"></a>

```go
func ResetMysql()
```

##### `ResetOracle` <a name="ResetOracle" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetOracle"></a>

```go
func ResetOracle()
```

##### `ResetPostgresql` <a name="ResetPostgresql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetPostgresql"></a>

```go
func ResetPostgresql()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMigrationServiceConnectionProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseMigrationServiceConnectionProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseMigrationServiceConnectionProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseMigrationServiceConnectionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMigrationServiceConnectionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.alloydb">Alloydb</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.cloudsql">Cloudsql</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference">DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.dbprovider">Dbprovider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.error">Error</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList">DatabaseMigrationServiceConnectionProfileErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.mysql">Mysql</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference">DatabaseMigrationServiceConnectionProfileMysqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.oracle">Oracle</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference">DatabaseMigrationServiceConnectionProfileOracleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.postgresql">Postgresql</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference">DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference">DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.alloydbInput">AlloydbInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb">DatabaseMigrationServiceConnectionProfileAlloydb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.cloudsqlInput">CloudsqlInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql">DatabaseMigrationServiceConnectionProfileCloudsql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.connectionProfileIdInput">ConnectionProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.mysqlInput">MysqlInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql">DatabaseMigrationServiceConnectionProfileMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.oracleInput">OracleInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle">DatabaseMigrationServiceConnectionProfileOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.postgresqlInput">PostgresqlInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql">DatabaseMigrationServiceConnectionProfilePostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.connectionProfileId">ConnectionProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Alloydb`<sup>Required</sup> <a name="Alloydb" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.alloydb"></a>

```go
func Alloydb() DatabaseMigrationServiceConnectionProfileAlloydbOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbOutputReference</a>

---

##### `Cloudsql`<sup>Required</sup> <a name="Cloudsql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.cloudsql"></a>

```go
func Cloudsql() DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference">DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Dbprovider`<sup>Required</sup> <a name="Dbprovider" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.dbprovider"></a>

```go
func Dbprovider() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.error"></a>

```go
func Error() DatabaseMigrationServiceConnectionProfileErrorList
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList">DatabaseMigrationServiceConnectionProfileErrorList</a>

---

##### `Mysql`<sup>Required</sup> <a name="Mysql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.mysql"></a>

```go
func Mysql() DatabaseMigrationServiceConnectionProfileMysqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference">DatabaseMigrationServiceConnectionProfileMysqlOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Oracle`<sup>Required</sup> <a name="Oracle" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.oracle"></a>

```go
func Oracle() DatabaseMigrationServiceConnectionProfileOracleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference">DatabaseMigrationServiceConnectionProfileOracleOutputReference</a>

---

##### `Postgresql`<sup>Required</sup> <a name="Postgresql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.postgresql"></a>

```go
func Postgresql() DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference">DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.timeouts"></a>

```go
func Timeouts() DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference">DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference</a>

---

##### `AlloydbInput`<sup>Optional</sup> <a name="AlloydbInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.alloydbInput"></a>

```go
func AlloydbInput() DatabaseMigrationServiceConnectionProfileAlloydb
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb">DatabaseMigrationServiceConnectionProfileAlloydb</a>

---

##### `CloudsqlInput`<sup>Optional</sup> <a name="CloudsqlInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.cloudsqlInput"></a>

```go
func CloudsqlInput() DatabaseMigrationServiceConnectionProfileCloudsql
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql">DatabaseMigrationServiceConnectionProfileCloudsql</a>

---

##### `ConnectionProfileIdInput`<sup>Optional</sup> <a name="ConnectionProfileIdInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.connectionProfileIdInput"></a>

```go
func ConnectionProfileIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MysqlInput`<sup>Optional</sup> <a name="MysqlInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.mysqlInput"></a>

```go
func MysqlInput() DatabaseMigrationServiceConnectionProfileMysql
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql">DatabaseMigrationServiceConnectionProfileMysql</a>

---

##### `OracleInput`<sup>Optional</sup> <a name="OracleInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.oracleInput"></a>

```go
func OracleInput() DatabaseMigrationServiceConnectionProfileOracle
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle">DatabaseMigrationServiceConnectionProfileOracle</a>

---

##### `PostgresqlInput`<sup>Optional</sup> <a name="PostgresqlInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.postgresqlInput"></a>

```go
func PostgresqlInput() DatabaseMigrationServiceConnectionProfilePostgresql
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql">DatabaseMigrationServiceConnectionProfilePostgresql</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionProfileId`<sup>Required</sup> <a name="ConnectionProfileId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.connectionProfileId"></a>

```go
func ConnectionProfileId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMigrationServiceConnectionProfileAlloydb <a name="DatabaseMigrationServiceConnectionProfileAlloydb" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileAlloydb {
	ClusterId: *string,
	Settings: github.com/cdktf/cdktf-provider-google-go/google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb.property.clusterId">ClusterId</a></code> | <code>*string</code> | Required. The AlloyDB cluster ID that this connection profile is associated with. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettings</a></code> | settings block. |

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Required. The AlloyDB cluster ID that this connection profile is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#cluster_id DatabaseMigrationServiceConnectionProfile#cluster_id}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb.property.settings"></a>

```go
Settings DatabaseMigrationServiceConnectionProfileAlloydbSettings
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#settings DatabaseMigrationServiceConnectionProfile#settings}

---

### DatabaseMigrationServiceConnectionProfileAlloydbSettings <a name="DatabaseMigrationServiceConnectionProfileAlloydbSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileAlloydbSettings {
	InitialUser: github.com/cdktf/cdktf-provider-google-go/google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser,
	VpcNetwork: *string,
	Labels: *map[string]*string,
	PrimaryInstanceSettings: github.com/cdktf/cdktf-provider-google-go/google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings.property.initialUser">InitialUser</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a></code> | initial_user block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings.property.vpcNetwork">VpcNetwork</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels for the AlloyDB cluster created by DMS. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings.property.primaryInstanceSettings">PrimaryInstanceSettings</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a></code> | primary_instance_settings block. |

---

##### `InitialUser`<sup>Required</sup> <a name="InitialUser" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings.property.initialUser"></a>

```go
InitialUser DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a>

initial_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#initial_user DatabaseMigrationServiceConnectionProfile#initial_user}

---

##### `VpcNetwork`<sup>Required</sup> <a name="VpcNetwork" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings.property.vpcNetwork"></a>

```go
VpcNetwork *string
```

- *Type:* *string

Required.

The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster.
It is specified in the form: 'projects/{project_number}/global/networks/{network_id}'. This is required to create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#vpc_network DatabaseMigrationServiceConnectionProfile#vpc_network}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels for the AlloyDB cluster created by DMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#labels DatabaseMigrationServiceConnectionProfile#labels}

---

##### `PrimaryInstanceSettings`<sup>Optional</sup> <a name="PrimaryInstanceSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings.property.primaryInstanceSettings"></a>

```go
PrimaryInstanceSettings DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a>

primary_instance_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#primary_instance_settings DatabaseMigrationServiceConnectionProfile#primary_instance_settings}

---

### DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser <a name="DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser {
	Password: *string,
	User: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser.property.password">Password</a></code> | <code>*string</code> | The initial password for the user. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser.property.user">User</a></code> | <code>*string</code> | The database username. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser.property.password"></a>

```go
Password *string
```

- *Type:* *string

The initial password for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#password DatabaseMigrationServiceConnectionProfile#password}

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser.property.user"></a>

```go
User *string
```

- *Type:* *string

The database username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#user DatabaseMigrationServiceConnectionProfile#user}

---

### DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings <a name="DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings {
	Id: *string,
	MachineConfig: github.com/cdktf/cdktf-provider-google-go/google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig,
	DatabaseFlags: *map[string]*string,
	Labels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.id">Id</a></code> | <code>*string</code> | The database username. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.machineConfig">MachineConfig</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a></code> | machine_config block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.databaseFlags">DatabaseFlags</a></code> | <code>*map[string]*string</code> | Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels for the AlloyDB primary instance created by DMS. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.id"></a>

```go
Id *string
```

- *Type:* *string

The database username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#id DatabaseMigrationServiceConnectionProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MachineConfig`<sup>Required</sup> <a name="MachineConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.machineConfig"></a>

```go
MachineConfig DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a>

machine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#machine_config DatabaseMigrationServiceConnectionProfile#machine_config}

---

##### `DatabaseFlags`<sup>Optional</sup> <a name="DatabaseFlags" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.databaseFlags"></a>

```go
DatabaseFlags *map[string]*string
```

- *Type:* *map[string]*string

Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances.

See the AlloyDB documentation for how these can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#database_flags DatabaseMigrationServiceConnectionProfile#database_flags}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels for the AlloyDB primary instance created by DMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#labels DatabaseMigrationServiceConnectionProfile#labels}

---

### DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig <a name="DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig {
	CpuCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig.property.cpuCount">CpuCount</a></code> | <code>*f64</code> | The number of CPU's in the VM instance. |

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig.property.cpuCount"></a>

```go
CpuCount *f64
```

- *Type:* *f64

The number of CPU's in the VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#cpu_count DatabaseMigrationServiceConnectionProfile#cpu_count}

---

### DatabaseMigrationServiceConnectionProfileCloudsql <a name="DatabaseMigrationServiceConnectionProfileCloudsql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileCloudsql {
	Settings: github.com/cdktf/cdktf-provider-google-go/google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings">DatabaseMigrationServiceConnectionProfileCloudsqlSettings</a></code> | settings block. |

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql.property.settings"></a>

```go
Settings DatabaseMigrationServiceConnectionProfileCloudsqlSettings
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings">DatabaseMigrationServiceConnectionProfileCloudsqlSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#settings DatabaseMigrationServiceConnectionProfile#settings}

---

### DatabaseMigrationServiceConnectionProfileCloudsqlSettings <a name="DatabaseMigrationServiceConnectionProfileCloudsqlSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings {
	SourceId: *string,
	ActivationPolicy: *string,
	AutoStorageIncrease: interface{},
	CmekKeyName: *string,
	Collation: *string,
	DatabaseFlags: *map[string]*string,
	DatabaseVersion: *string,
	DataDiskSizeGb: *string,
	DataDiskType: *string,
	Edition: *string,
	IpConfig: github.com/cdktf/cdktf-provider-google-go/google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig,
	RootPassword: *string,
	StorageAutoResizeLimit: *string,
	Tier: *string,
	UserLabels: *map[string]*string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.sourceId">SourceId</a></code> | <code>*string</code> | The Database Migration Service source connection profile ID, in the format: projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.activationPolicy">ActivationPolicy</a></code> | <code>*string</code> | The activation policy specifies when the instance is activated; |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.autoStorageIncrease">AutoStorageIncrease</a></code> | <code>interface{}</code> | If you enable this setting, Cloud SQL checks your available storage every 30 seconds. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.cmekKeyName">CmekKeyName</a></code> | <code>*string</code> | The KMS key name used for the csql instance. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.collation">Collation</a></code> | <code>*string</code> | The Cloud SQL default instance level collation. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.databaseFlags">DatabaseFlags</a></code> | <code>*map[string]*string</code> | The database flags passed to the Cloud SQL instance at startup. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | The database engine type and version. Currently supported values located at https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.connectionProfiles#sqldatabaseversion. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.dataDiskSizeGb">DataDiskSizeGb</a></code> | <code>*string</code> | The storage capacity available to the database, in GB. The minimum (and default) size is 10GB. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.dataDiskType">DataDiskType</a></code> | <code>*string</code> | The type of storage. Possible values: ["PD_SSD", "PD_HDD"]. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.edition">Edition</a></code> | <code>*string</code> | The edition of the given Cloud SQL instance. Possible values: ["ENTERPRISE", "ENTERPRISE_PLUS"]. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.ipConfig">IpConfig</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a></code> | ip_config block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.rootPassword">RootPassword</a></code> | <code>*string</code> | Input only. Initial root password. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.storageAutoResizeLimit">StorageAutoResizeLimit</a></code> | <code>*string</code> | The maximum size to which storage capacity can be automatically increased. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.tier">Tier</a></code> | <code>*string</code> | The tier (or machine type) for this instance, for example: db-n1-standard-1 (MySQL instances) or db-custom-1-3840 (PostgreSQL instances). |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.userLabels">UserLabels</a></code> | <code>*map[string]*string</code> | The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.zone">Zone</a></code> | <code>*string</code> | The Google Cloud Platform zone where your Cloud SQL datdabse instance is located. |

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.sourceId"></a>

```go
SourceId *string
```

- *Type:* *string

The Database Migration Service source connection profile ID, in the format: projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#source_id DatabaseMigrationServiceConnectionProfile#source_id}

---

##### `ActivationPolicy`<sup>Optional</sup> <a name="ActivationPolicy" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.activationPolicy"></a>

```go
ActivationPolicy *string
```

- *Type:* *string

The activation policy specifies when the instance is activated;

it is applicable only when the instance state is 'RUNNABLE'. Possible values: ["ALWAYS", "NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#activation_policy DatabaseMigrationServiceConnectionProfile#activation_policy}

---

##### `AutoStorageIncrease`<sup>Optional</sup> <a name="AutoStorageIncrease" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.autoStorageIncrease"></a>

```go
AutoStorageIncrease interface{}
```

- *Type:* interface{}

If you enable this setting, Cloud SQL checks your available storage every 30 seconds.

If the available storage falls below a threshold size, Cloud SQL automatically adds additional storage capacity.
If the available storage repeatedly falls below the threshold size, Cloud SQL continues to add storage until it reaches the maximum of 30 TB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#auto_storage_increase DatabaseMigrationServiceConnectionProfile#auto_storage_increase}

---

##### `CmekKeyName`<sup>Optional</sup> <a name="CmekKeyName" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.cmekKeyName"></a>

```go
CmekKeyName *string
```

- *Type:* *string

The KMS key name used for the csql instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#cmek_key_name DatabaseMigrationServiceConnectionProfile#cmek_key_name}

---

##### `Collation`<sup>Optional</sup> <a name="Collation" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.collation"></a>

```go
Collation *string
```

- *Type:* *string

The Cloud SQL default instance level collation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#collation DatabaseMigrationServiceConnectionProfile#collation}

---

##### `DatabaseFlags`<sup>Optional</sup> <a name="DatabaseFlags" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.databaseFlags"></a>

```go
DatabaseFlags *map[string]*string
```

- *Type:* *map[string]*string

The database flags passed to the Cloud SQL instance at startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#database_flags DatabaseMigrationServiceConnectionProfile#database_flags}

---

##### `DatabaseVersion`<sup>Optional</sup> <a name="DatabaseVersion" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.databaseVersion"></a>

```go
DatabaseVersion *string
```

- *Type:* *string

The database engine type and version. Currently supported values located at https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.connectionProfiles#sqldatabaseversion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#database_version DatabaseMigrationServiceConnectionProfile#database_version}

---

##### `DataDiskSizeGb`<sup>Optional</sup> <a name="DataDiskSizeGb" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.dataDiskSizeGb"></a>

```go
DataDiskSizeGb *string
```

- *Type:* *string

The storage capacity available to the database, in GB. The minimum (and default) size is 10GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#data_disk_size_gb DatabaseMigrationServiceConnectionProfile#data_disk_size_gb}

---

##### `DataDiskType`<sup>Optional</sup> <a name="DataDiskType" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.dataDiskType"></a>

```go
DataDiskType *string
```

- *Type:* *string

The type of storage. Possible values: ["PD_SSD", "PD_HDD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#data_disk_type DatabaseMigrationServiceConnectionProfile#data_disk_type}

---

##### `Edition`<sup>Optional</sup> <a name="Edition" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.edition"></a>

```go
Edition *string
```

- *Type:* *string

The edition of the given Cloud SQL instance. Possible values: ["ENTERPRISE", "ENTERPRISE_PLUS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#edition DatabaseMigrationServiceConnectionProfile#edition}

---

##### `IpConfig`<sup>Optional</sup> <a name="IpConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.ipConfig"></a>

```go
IpConfig DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a>

ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#ip_config DatabaseMigrationServiceConnectionProfile#ip_config}

---

##### `RootPassword`<sup>Optional</sup> <a name="RootPassword" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.rootPassword"></a>

```go
RootPassword *string
```

- *Type:* *string

Input only. Initial root password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#root_password DatabaseMigrationServiceConnectionProfile#root_password}

---

##### `StorageAutoResizeLimit`<sup>Optional</sup> <a name="StorageAutoResizeLimit" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.storageAutoResizeLimit"></a>

```go
StorageAutoResizeLimit *string
```

- *Type:* *string

The maximum size to which storage capacity can be automatically increased.

The default value is 0, which specifies that there is no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#storage_auto_resize_limit DatabaseMigrationServiceConnectionProfile#storage_auto_resize_limit}

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

The tier (or machine type) for this instance, for example: db-n1-standard-1 (MySQL instances) or db-custom-1-3840 (PostgreSQL instances).

For more information, see https://cloud.google.com/sql/docs/mysql/instance-settings

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#tier DatabaseMigrationServiceConnectionProfile#tier}

---

##### `UserLabels`<sup>Optional</sup> <a name="UserLabels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.userLabels"></a>

```go
UserLabels *map[string]*string
```

- *Type:* *map[string]*string

The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#user_labels DatabaseMigrationServiceConnectionProfile#user_labels}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The Google Cloud Platform zone where your Cloud SQL datdabse instance is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#zone DatabaseMigrationServiceConnectionProfile#zone}

---

### DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig <a name="DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig {
	AuthorizedNetworks: interface{},
	EnableIpv4: interface{},
	PrivateNetwork: *string,
	RequireSsl: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.authorizedNetworks">AuthorizedNetworks</a></code> | <code>interface{}</code> | authorized_networks block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.enableIpv4">EnableIpv4</a></code> | <code>interface{}</code> | Whether the instance should be assigned an IPv4 address or not. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.privateNetwork">PrivateNetwork</a></code> | <code>*string</code> | The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.requireSsl">RequireSsl</a></code> | <code>interface{}</code> | Whether SSL connections over IP should be enforced or not. |

---

##### `AuthorizedNetworks`<sup>Optional</sup> <a name="AuthorizedNetworks" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.authorizedNetworks"></a>

```go
AuthorizedNetworks interface{}
```

- *Type:* interface{}

authorized_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#authorized_networks DatabaseMigrationServiceConnectionProfile#authorized_networks}

---

##### `EnableIpv4`<sup>Optional</sup> <a name="EnableIpv4" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.enableIpv4"></a>

```go
EnableIpv4 interface{}
```

- *Type:* interface{}

Whether the instance should be assigned an IPv4 address or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#enable_ipv4 DatabaseMigrationServiceConnectionProfile#enable_ipv4}

---

##### `PrivateNetwork`<sup>Optional</sup> <a name="PrivateNetwork" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.privateNetwork"></a>

```go
PrivateNetwork *string
```

- *Type:* *string

The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP.

For example, projects/myProject/global/networks/default.
This setting can be updated, but it cannot be removed after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#private_network DatabaseMigrationServiceConnectionProfile#private_network}

---

##### `RequireSsl`<sup>Optional</sup> <a name="RequireSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.requireSsl"></a>

```go
RequireSsl interface{}
```

- *Type:* interface{}

Whether SSL connections over IP should be enforced or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#require_ssl DatabaseMigrationServiceConnectionProfile#require_ssl}

---

### DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks <a name="DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks {
	Value: *string,
	ExpireTime: *string,
	Label: *string,
	Ttl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.value">Value</a></code> | <code>*string</code> | The allowlisted value for the access control list. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.expireTime">ExpireTime</a></code> | <code>*string</code> | The time when this access control entry expires in RFC 3339 format. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.label">Label</a></code> | <code>*string</code> | A label to identify this entry. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.ttl">Ttl</a></code> | <code>*string</code> | Input only. The time-to-leave of this access control entry. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.value"></a>

```go
Value *string
```

- *Type:* *string

The allowlisted value for the access control list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#value DatabaseMigrationServiceConnectionProfile#value}

---

##### `ExpireTime`<sup>Optional</sup> <a name="ExpireTime" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.expireTime"></a>

```go
ExpireTime *string
```

- *Type:* *string

The time when this access control entry expires in RFC 3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#expire_time DatabaseMigrationServiceConnectionProfile#expire_time}

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.label"></a>

```go
Label *string
```

- *Type:* *string

A label to identify this entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#label DatabaseMigrationServiceConnectionProfile#label}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

Input only. The time-to-leave of this access control entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#ttl DatabaseMigrationServiceConnectionProfile#ttl}

---

### DatabaseMigrationServiceConnectionProfileConfig <a name="DatabaseMigrationServiceConnectionProfileConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionProfileId: *string,
	Alloydb: github.com/cdktf/cdktf-provider-google-go/google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb,
	Cloudsql: github.com/cdktf/cdktf-provider-google-go/google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql,
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Mysql: github.com/cdktf/cdktf-provider-google-go/google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql,
	Oracle: github.com/cdktf/cdktf-provider-google-go/google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle,
	Postgresql: github.com/cdktf/cdktf-provider-google-go/google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.connectionProfileId">ConnectionProfileId</a></code> | <code>*string</code> | The ID of the connection profile. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.alloydb">Alloydb</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb">DatabaseMigrationServiceConnectionProfileAlloydb</a></code> | alloydb block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.cloudsql">Cloudsql</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql">DatabaseMigrationServiceConnectionProfileCloudsql</a></code> | cloudsql block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The connection profile display name. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#id DatabaseMigrationServiceConnectionProfile#id}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.location">Location</a></code> | <code>*string</code> | The location where the connection profile should reside. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.mysql">Mysql</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql">DatabaseMigrationServiceConnectionProfileMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.oracle">Oracle</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle">DatabaseMigrationServiceConnectionProfileOracle</a></code> | oracle block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.postgresql">Postgresql</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql">DatabaseMigrationServiceConnectionProfilePostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#project DatabaseMigrationServiceConnectionProfile#project}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts">DatabaseMigrationServiceConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionProfileId`<sup>Required</sup> <a name="ConnectionProfileId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.connectionProfileId"></a>

```go
ConnectionProfileId *string
```

- *Type:* *string

The ID of the connection profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#connection_profile_id DatabaseMigrationServiceConnectionProfile#connection_profile_id}

---

##### `Alloydb`<sup>Optional</sup> <a name="Alloydb" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.alloydb"></a>

```go
Alloydb DatabaseMigrationServiceConnectionProfileAlloydb
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb">DatabaseMigrationServiceConnectionProfileAlloydb</a>

alloydb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#alloydb DatabaseMigrationServiceConnectionProfile#alloydb}

---

##### `Cloudsql`<sup>Optional</sup> <a name="Cloudsql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.cloudsql"></a>

```go
Cloudsql DatabaseMigrationServiceConnectionProfileCloudsql
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql">DatabaseMigrationServiceConnectionProfileCloudsql</a>

cloudsql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#cloudsql DatabaseMigrationServiceConnectionProfile#cloudsql}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The connection profile display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#display_name DatabaseMigrationServiceConnectionProfile#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#id DatabaseMigrationServiceConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#labels DatabaseMigrationServiceConnectionProfile#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location where the connection profile should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#location DatabaseMigrationServiceConnectionProfile#location}

---

##### `Mysql`<sup>Optional</sup> <a name="Mysql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.mysql"></a>

```go
Mysql DatabaseMigrationServiceConnectionProfileMysql
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql">DatabaseMigrationServiceConnectionProfileMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#mysql DatabaseMigrationServiceConnectionProfile#mysql}

---

##### `Oracle`<sup>Optional</sup> <a name="Oracle" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.oracle"></a>

```go
Oracle DatabaseMigrationServiceConnectionProfileOracle
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle">DatabaseMigrationServiceConnectionProfileOracle</a>

oracle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#oracle DatabaseMigrationServiceConnectionProfile#oracle}

---

##### `Postgresql`<sup>Optional</sup> <a name="Postgresql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.postgresql"></a>

```go
Postgresql DatabaseMigrationServiceConnectionProfilePostgresql
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql">DatabaseMigrationServiceConnectionProfilePostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#postgresql DatabaseMigrationServiceConnectionProfile#postgresql}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#project DatabaseMigrationServiceConnectionProfile#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileConfig.property.timeouts"></a>

```go
Timeouts DatabaseMigrationServiceConnectionProfileTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts">DatabaseMigrationServiceConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#timeouts DatabaseMigrationServiceConnectionProfile#timeouts}

---

### DatabaseMigrationServiceConnectionProfileError <a name="DatabaseMigrationServiceConnectionProfileError" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileError.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileError {

}
```


### DatabaseMigrationServiceConnectionProfileMysql <a name="DatabaseMigrationServiceConnectionProfileMysql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileMysql {
	Host: *string,
	Password: *string,
	Port: *f64,
	Username: *string,
	CloudSqlId: *string,
	Ssl: github.com/cdktf/cdktf-provider-google-go/google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.host">Host</a></code> | <code>*string</code> | Required. The IP or hostname of the source MySQL database. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.password">Password</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.port">Port</a></code> | <code>*f64</code> | Required. The network port of the source MySQL database. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.username">Username</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.cloudSqlId">CloudSqlId</a></code> | <code>*string</code> | If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.ssl">Ssl</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl">DatabaseMigrationServiceConnectionProfileMysqlSsl</a></code> | ssl block. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.host"></a>

```go
Host *string
```

- *Type:* *string

Required. The IP or hostname of the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#host DatabaseMigrationServiceConnectionProfile#host}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.password"></a>

```go
Password *string
```

- *Type:* *string

Required.

Input only. The password for the user that Database Migration Service will be using to connect to the database.
This field is not returned on request, and the value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#password DatabaseMigrationServiceConnectionProfile#password}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Required. The network port of the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#port DatabaseMigrationServiceConnectionProfile#port}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.username"></a>

```go
Username *string
```

- *Type:* *string

Required.

The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#username DatabaseMigrationServiceConnectionProfile#username}

---

##### `CloudSqlId`<sup>Optional</sup> <a name="CloudSqlId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.cloudSqlId"></a>

```go
CloudSqlId *string
```

- *Type:* *string

If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#cloud_sql_id DatabaseMigrationServiceConnectionProfile#cloud_sql_id}

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql.property.ssl"></a>

```go
Ssl DatabaseMigrationServiceConnectionProfileMysqlSsl
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl">DatabaseMigrationServiceConnectionProfileMysqlSsl</a>

ssl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#ssl DatabaseMigrationServiceConnectionProfile#ssl}

---

### DatabaseMigrationServiceConnectionProfileMysqlSsl <a name="DatabaseMigrationServiceConnectionProfileMysqlSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileMysqlSsl {
	CaCertificate: *string,
	ClientCertificate: *string,
	ClientKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | Input only. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl.property.clientKey">ClientKey</a></code> | <code>*string</code> | Input only. |

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl.property.caCertificate"></a>

```go
CaCertificate *string
```

- *Type:* *string

Required.

Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate.
The replica will use this certificate to verify it's connecting to the right host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#ca_certificate DatabaseMigrationServiceConnectionProfile#ca_certificate}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl.property.clientCertificate"></a>

```go
ClientCertificate *string
```

- *Type:* *string

Input only.

The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.
If this field is used then the 'clientKey' field is mandatory

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#client_certificate DatabaseMigrationServiceConnectionProfile#client_certificate}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl.property.clientKey"></a>

```go
ClientKey *string
```

- *Type:* *string

Input only.

The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate.
If this field is used then the 'clientCertificate' field is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#client_key DatabaseMigrationServiceConnectionProfile#client_key}

---

### DatabaseMigrationServiceConnectionProfileOracle <a name="DatabaseMigrationServiceConnectionProfileOracle" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileOracle {
	DatabaseService: *string,
	Host: *string,
	Password: *string,
	Port: *f64,
	Username: *string,
	ForwardSshConnectivity: github.com/cdktf/cdktf-provider-google-go/google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity,
	PrivateConnectivity: github.com/cdktf/cdktf-provider-google-go/google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity,
	Ssl: github.com/cdktf/cdktf-provider-google-go/google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl,
	StaticServiceIpConnectivity: github.com/cdktf/cdktf-provider-google-go/google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.databaseService">DatabaseService</a></code> | <code>*string</code> | Required. Database service for the Oracle connection. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.host">Host</a></code> | <code>*string</code> | Required. The IP or hostname of the source Oracle database. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.password">Password</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.port">Port</a></code> | <code>*f64</code> | Required. The network port of the source Oracle database. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.username">Username</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.forwardSshConnectivity">ForwardSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity">DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity</a></code> | forward_ssh_connectivity block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.privateConnectivity">PrivateConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity">DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity</a></code> | private_connectivity block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.ssl">Ssl</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl">DatabaseMigrationServiceConnectionProfileOracleSsl</a></code> | ssl block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.staticServiceIpConnectivity">StaticServiceIpConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity">DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity</a></code> | static_service_ip_connectivity block. |

---

##### `DatabaseService`<sup>Required</sup> <a name="DatabaseService" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.databaseService"></a>

```go
DatabaseService *string
```

- *Type:* *string

Required. Database service for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#database_service DatabaseMigrationServiceConnectionProfile#database_service}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.host"></a>

```go
Host *string
```

- *Type:* *string

Required. The IP or hostname of the source Oracle database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#host DatabaseMigrationServiceConnectionProfile#host}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.password"></a>

```go
Password *string
```

- *Type:* *string

Required.

Input only. The password for the user that Database Migration Service will be using to connect to the database.
This field is not returned on request, and the value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#password DatabaseMigrationServiceConnectionProfile#password}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Required. The network port of the source Oracle database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#port DatabaseMigrationServiceConnectionProfile#port}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.username"></a>

```go
Username *string
```

- *Type:* *string

Required.

The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#username DatabaseMigrationServiceConnectionProfile#username}

---

##### `ForwardSshConnectivity`<sup>Optional</sup> <a name="ForwardSshConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.forwardSshConnectivity"></a>

```go
ForwardSshConnectivity DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity">DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity</a>

forward_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#forward_ssh_connectivity DatabaseMigrationServiceConnectionProfile#forward_ssh_connectivity}

---

##### `PrivateConnectivity`<sup>Optional</sup> <a name="PrivateConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.privateConnectivity"></a>

```go
PrivateConnectivity DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity">DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity</a>

private_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#private_connectivity DatabaseMigrationServiceConnectionProfile#private_connectivity}

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.ssl"></a>

```go
Ssl DatabaseMigrationServiceConnectionProfileOracleSsl
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl">DatabaseMigrationServiceConnectionProfileOracleSsl</a>

ssl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#ssl DatabaseMigrationServiceConnectionProfile#ssl}

---

##### `StaticServiceIpConnectivity`<sup>Optional</sup> <a name="StaticServiceIpConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle.property.staticServiceIpConnectivity"></a>

```go
StaticServiceIpConnectivity DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity">DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity</a>

static_service_ip_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#static_service_ip_connectivity DatabaseMigrationServiceConnectionProfile#static_service_ip_connectivity}

---

### DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity <a name="DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity {
	Hostname: *string,
	Port: *f64,
	Username: *string,
	Password: *string,
	PrivateKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.hostname">Hostname</a></code> | <code>*string</code> | Required. Hostname for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.port">Port</a></code> | <code>*f64</code> | Port for the SSH tunnel, default value is 22. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.username">Username</a></code> | <code>*string</code> | Required. Username for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.password">Password</a></code> | <code>*string</code> | Input only. SSH password. Only one of 'password' and 'private_key' can be configured. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Input only. SSH private key. Only one of 'password' and 'private_key' can be configured. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Required. Hostname for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#hostname DatabaseMigrationServiceConnectionProfile#hostname}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port for the SSH tunnel, default value is 22.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#port DatabaseMigrationServiceConnectionProfile#port}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.username"></a>

```go
Username *string
```

- *Type:* *string

Required. Username for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#username DatabaseMigrationServiceConnectionProfile#username}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.password"></a>

```go
Password *string
```

- *Type:* *string

Input only. SSH password. Only one of 'password' and 'private_key' can be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#password DatabaseMigrationServiceConnectionProfile#password}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Input only. SSH private key. Only one of 'password' and 'private_key' can be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#private_key DatabaseMigrationServiceConnectionProfile#private_key}

---

### DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity <a name="DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity {
	PrivateConnection: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity.property.privateConnection">PrivateConnection</a></code> | <code>*string</code> | Required. The resource name (URI) of the private connection. |

---

##### `PrivateConnection`<sup>Required</sup> <a name="PrivateConnection" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity.property.privateConnection"></a>

```go
PrivateConnection *string
```

- *Type:* *string

Required. The resource name (URI) of the private connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#private_connection DatabaseMigrationServiceConnectionProfile#private_connection}

---

### DatabaseMigrationServiceConnectionProfileOracleSsl <a name="DatabaseMigrationServiceConnectionProfileOracleSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileOracleSsl {
	CaCertificate: *string,
	ClientCertificate: *string,
	ClientKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | Input only. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl.property.clientKey">ClientKey</a></code> | <code>*string</code> | Input only. |

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl.property.caCertificate"></a>

```go
CaCertificate *string
```

- *Type:* *string

Required.

Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate.
The replica will use this certificate to verify it's connecting to the right host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#ca_certificate DatabaseMigrationServiceConnectionProfile#ca_certificate}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl.property.clientCertificate"></a>

```go
ClientCertificate *string
```

- *Type:* *string

Input only.

The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.
If this field is used then the 'clientKey' field is mandatory

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#client_certificate DatabaseMigrationServiceConnectionProfile#client_certificate}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl.property.clientKey"></a>

```go
ClientKey *string
```

- *Type:* *string

Input only.

The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate.
If this field is used then the 'clientCertificate' field is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#client_key DatabaseMigrationServiceConnectionProfile#client_key}

---

### DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity <a name="DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity {

}
```


### DatabaseMigrationServiceConnectionProfilePostgresql <a name="DatabaseMigrationServiceConnectionProfilePostgresql" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfilePostgresql {
	Host: *string,
	Password: *string,
	Port: *f64,
	Username: *string,
	CloudSqlId: *string,
	Ssl: github.com/cdktf/cdktf-provider-google-go/google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.host">Host</a></code> | <code>*string</code> | Required. The IP or hostname of the source MySQL database. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.password">Password</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.port">Port</a></code> | <code>*f64</code> | Required. The network port of the source MySQL database. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.username">Username</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.cloudSqlId">CloudSqlId</a></code> | <code>*string</code> | If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.ssl">Ssl</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl">DatabaseMigrationServiceConnectionProfilePostgresqlSsl</a></code> | ssl block. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.host"></a>

```go
Host *string
```

- *Type:* *string

Required. The IP or hostname of the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#host DatabaseMigrationServiceConnectionProfile#host}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.password"></a>

```go
Password *string
```

- *Type:* *string

Required.

Input only. The password for the user that Database Migration Service will be using to connect to the database.
This field is not returned on request, and the value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#password DatabaseMigrationServiceConnectionProfile#password}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Required. The network port of the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#port DatabaseMigrationServiceConnectionProfile#port}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.username"></a>

```go
Username *string
```

- *Type:* *string

Required.

The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#username DatabaseMigrationServiceConnectionProfile#username}

---

##### `CloudSqlId`<sup>Optional</sup> <a name="CloudSqlId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.cloudSqlId"></a>

```go
CloudSqlId *string
```

- *Type:* *string

If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#cloud_sql_id DatabaseMigrationServiceConnectionProfile#cloud_sql_id}

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql.property.ssl"></a>

```go
Ssl DatabaseMigrationServiceConnectionProfilePostgresqlSsl
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl">DatabaseMigrationServiceConnectionProfilePostgresqlSsl</a>

ssl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#ssl DatabaseMigrationServiceConnectionProfile#ssl}

---

### DatabaseMigrationServiceConnectionProfilePostgresqlSsl <a name="DatabaseMigrationServiceConnectionProfilePostgresqlSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl {
	CaCertificate: *string,
	ClientCertificate: *string,
	ClientKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | Input only. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl.property.clientKey">ClientKey</a></code> | <code>*string</code> | Input only. |

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl.property.caCertificate"></a>

```go
CaCertificate *string
```

- *Type:* *string

Required.

Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate.
The replica will use this certificate to verify it's connecting to the right host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#ca_certificate DatabaseMigrationServiceConnectionProfile#ca_certificate}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl.property.clientCertificate"></a>

```go
ClientCertificate *string
```

- *Type:* *string

Input only.

The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.
If this field is used then the 'clientKey' field is mandatory

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#client_certificate DatabaseMigrationServiceConnectionProfile#client_certificate}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl.property.clientKey"></a>

```go
ClientKey *string
```

- *Type:* *string

Input only.

The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate.
If this field is used then the 'clientCertificate' field is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#client_key DatabaseMigrationServiceConnectionProfile#client_key}

---

### DatabaseMigrationServiceConnectionProfileTimeouts <a name="DatabaseMigrationServiceConnectionProfileTimeouts" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

&databasemigrationserviceconnectionprofile.DatabaseMigrationServiceConnectionProfileTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#create DatabaseMigrationServiceConnectionProfile#create}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#delete DatabaseMigrationServiceConnectionProfile#delete}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#update DatabaseMigrationServiceConnectionProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#create DatabaseMigrationServiceConnectionProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#delete DatabaseMigrationServiceConnectionProfile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/database_migration_service_connection_profile#update DatabaseMigrationServiceConnectionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMigrationServiceConnectionProfileAlloydbOutputReference <a name="DatabaseMigrationServiceConnectionProfileAlloydbOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileAlloydbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceConnectionProfileAlloydbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.putSettings"></a>

```go
func PutSettings(value DatabaseMigrationServiceConnectionProfileAlloydbSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettings</a>

---

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.resetSettings"></a>

```go
func ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.settingsInput">SettingsInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb">DatabaseMigrationServiceConnectionProfileAlloydb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.settings"></a>

```go
func Settings() DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.settingsInput"></a>

```go
func SettingsInput() DatabaseMigrationServiceConnectionProfileAlloydbSettings
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettings</a>

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceConnectionProfileAlloydb
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydb">DatabaseMigrationServiceConnectionProfileAlloydb</a>

---


### DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference <a name="DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.passwordSet">PasswordSet</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordSet`<sup>Required</sup> <a name="PasswordSet" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.passwordSet"></a>

```go
func PasswordSet() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a>

---


### DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference <a name="DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putInitialUser">PutInitialUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putPrimaryInstanceSettings">PutPrimaryInstanceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resetPrimaryInstanceSettings">ResetPrimaryInstanceSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInitialUser` <a name="PutInitialUser" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putInitialUser"></a>

```go
func PutInitialUser(value DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putInitialUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a>

---

##### `PutPrimaryInstanceSettings` <a name="PutPrimaryInstanceSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putPrimaryInstanceSettings"></a>

```go
func PutPrimaryInstanceSettings(value DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putPrimaryInstanceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a>

---

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetPrimaryInstanceSettings` <a name="ResetPrimaryInstanceSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resetPrimaryInstanceSettings"></a>

```go
func ResetPrimaryInstanceSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.initialUser">InitialUser</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.primaryInstanceSettings">PrimaryInstanceSettings</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.initialUserInput">InitialUserInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.primaryInstanceSettingsInput">PrimaryInstanceSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.vpcNetworkInput">VpcNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.vpcNetwork">VpcNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InitialUser`<sup>Required</sup> <a name="InitialUser" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.initialUser"></a>

```go
func InitialUser() DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference</a>

---

##### `PrimaryInstanceSettings`<sup>Required</sup> <a name="PrimaryInstanceSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.primaryInstanceSettings"></a>

```go
func PrimaryInstanceSettings() DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference</a>

---

##### `InitialUserInput`<sup>Optional</sup> <a name="InitialUserInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.initialUserInput"></a>

```go
func InitialUserInput() DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PrimaryInstanceSettingsInput`<sup>Optional</sup> <a name="PrimaryInstanceSettingsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.primaryInstanceSettingsInput"></a>

```go
func PrimaryInstanceSettingsInput() DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a>

---

##### `VpcNetworkInput`<sup>Optional</sup> <a name="VpcNetworkInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.vpcNetworkInput"></a>

```go
func VpcNetworkInput() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcNetwork`<sup>Required</sup> <a name="VpcNetwork" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.vpcNetwork"></a>

```go
func VpcNetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceConnectionProfileAlloydbSettings
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettings</a>

---


### DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference <a name="DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.cpuCountInput">CpuCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.cpuCount">CpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuCountInput`<sup>Optional</sup> <a name="CpuCountInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.cpuCountInput"></a>

```go
func CpuCountInput() *f64
```

- *Type:* *f64

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.cpuCount"></a>

```go
func CpuCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a>

---


### DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference <a name="DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.putMachineConfig">PutMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resetDatabaseFlags">ResetDatabaseFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMachineConfig` <a name="PutMachineConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.putMachineConfig"></a>

```go
func PutMachineConfig(value DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.putMachineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a>

---

##### `ResetDatabaseFlags` <a name="ResetDatabaseFlags" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resetDatabaseFlags"></a>

```go
func ResetDatabaseFlags()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resetLabels"></a>

```go
func ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.machineConfig">MachineConfig</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.databaseFlagsInput">DatabaseFlagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.machineConfigInput">MachineConfigInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.databaseFlags">DatabaseFlags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MachineConfig`<sup>Required</sup> <a name="MachineConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.machineConfig"></a>

```go
func MachineConfig() DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference</a>

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `DatabaseFlagsInput`<sup>Optional</sup> <a name="DatabaseFlagsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.databaseFlagsInput"></a>

```go
func DatabaseFlagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MachineConfigInput`<sup>Optional</sup> <a name="MachineConfigInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.machineConfigInput"></a>

```go
func MachineConfigInput() DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a>

---

##### `DatabaseFlags`<sup>Required</sup> <a name="DatabaseFlags" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.databaseFlags"></a>

```go
func DatabaseFlags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a>

---


### DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference <a name="DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings"></a>

```go
func PutSettings(value DatabaseMigrationServiceConnectionProfileCloudsqlSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings">DatabaseMigrationServiceConnectionProfileCloudsqlSettings</a>

---

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.resetSettings"></a>

```go
func ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.cloudSqlId">CloudSqlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.publicIp">PublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.settingsInput">SettingsInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings">DatabaseMigrationServiceConnectionProfileCloudsqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql">DatabaseMigrationServiceConnectionProfileCloudsql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudSqlId`<sup>Required</sup> <a name="CloudSqlId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.cloudSqlId"></a>

```go
func CloudSqlId() *string
```

- *Type:* *string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.publicIp"></a>

```go
func PublicIp() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.settings"></a>

```go
func Settings() DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference</a>

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.settingsInput"></a>

```go
func SettingsInput() DatabaseMigrationServiceConnectionProfileCloudsqlSettings
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings">DatabaseMigrationServiceConnectionProfileCloudsqlSettings</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceConnectionProfileCloudsql
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsql">DatabaseMigrationServiceConnectionProfileCloudsql</a>

---


### DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList <a name="DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.get"></a>

```go
func Get(index *f64) DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference <a name="DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resetExpireTime">ResetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpireTime` <a name="ResetExpireTime" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resetExpireTime"></a>

```go
func ResetExpireTime()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.expireTimeInput">ExpireTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpireTimeInput`<sup>Optional</sup> <a name="ExpireTimeInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.expireTimeInput"></a>

```go
func ExpireTimeInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference <a name="DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.putAuthorizedNetworks">PutAuthorizedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetAuthorizedNetworks">ResetAuthorizedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetEnableIpv4">ResetEnableIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetPrivateNetwork">ResetPrivateNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetRequireSsl">ResetRequireSsl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizedNetworks` <a name="PutAuthorizedNetworks" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.putAuthorizedNetworks"></a>

```go
func PutAuthorizedNetworks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.putAuthorizedNetworks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuthorizedNetworks` <a name="ResetAuthorizedNetworks" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetAuthorizedNetworks"></a>

```go
func ResetAuthorizedNetworks()
```

##### `ResetEnableIpv4` <a name="ResetEnableIpv4" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetEnableIpv4"></a>

```go
func ResetEnableIpv4()
```

##### `ResetPrivateNetwork` <a name="ResetPrivateNetwork" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetPrivateNetwork"></a>

```go
func ResetPrivateNetwork()
```

##### `ResetRequireSsl` <a name="ResetRequireSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetRequireSsl"></a>

```go
func ResetRequireSsl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.authorizedNetworks">AuthorizedNetworks</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.authorizedNetworksInput">AuthorizedNetworksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.enableIpv4Input">EnableIpv4Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.privateNetworkInput">PrivateNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.requireSslInput">RequireSslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.enableIpv4">EnableIpv4</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.privateNetwork">PrivateNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.requireSsl">RequireSsl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizedNetworks`<sup>Required</sup> <a name="AuthorizedNetworks" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.authorizedNetworks"></a>

```go
func AuthorizedNetworks() DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList</a>

---

##### `AuthorizedNetworksInput`<sup>Optional</sup> <a name="AuthorizedNetworksInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.authorizedNetworksInput"></a>

```go
func AuthorizedNetworksInput() interface{}
```

- *Type:* interface{}

---

##### `EnableIpv4Input`<sup>Optional</sup> <a name="EnableIpv4Input" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.enableIpv4Input"></a>

```go
func EnableIpv4Input() interface{}
```

- *Type:* interface{}

---

##### `PrivateNetworkInput`<sup>Optional</sup> <a name="PrivateNetworkInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.privateNetworkInput"></a>

```go
func PrivateNetworkInput() *string
```

- *Type:* *string

---

##### `RequireSslInput`<sup>Optional</sup> <a name="RequireSslInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.requireSslInput"></a>

```go
func RequireSslInput() interface{}
```

- *Type:* interface{}

---

##### `EnableIpv4`<sup>Required</sup> <a name="EnableIpv4" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.enableIpv4"></a>

```go
func EnableIpv4() interface{}
```

- *Type:* interface{}

---

##### `PrivateNetwork`<sup>Required</sup> <a name="PrivateNetwork" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.privateNetwork"></a>

```go
func PrivateNetwork() *string
```

- *Type:* *string

---

##### `RequireSsl`<sup>Required</sup> <a name="RequireSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.requireSsl"></a>

```go
func RequireSsl() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a>

---


### DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference <a name="DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.putIpConfig">PutIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetActivationPolicy">ResetActivationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetAutoStorageIncrease">ResetAutoStorageIncrease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetCmekKeyName">ResetCmekKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetCollation">ResetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDatabaseFlags">ResetDatabaseFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDatabaseVersion">ResetDatabaseVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDataDiskSizeGb">ResetDataDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDataDiskType">ResetDataDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetEdition">ResetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetIpConfig">ResetIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetRootPassword">ResetRootPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetStorageAutoResizeLimit">ResetStorageAutoResizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetTier">ResetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetUserLabels">ResetUserLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpConfig` <a name="PutIpConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.putIpConfig"></a>

```go
func PutIpConfig(value DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.putIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a>

---

##### `ResetActivationPolicy` <a name="ResetActivationPolicy" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetActivationPolicy"></a>

```go
func ResetActivationPolicy()
```

##### `ResetAutoStorageIncrease` <a name="ResetAutoStorageIncrease" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetAutoStorageIncrease"></a>

```go
func ResetAutoStorageIncrease()
```

##### `ResetCmekKeyName` <a name="ResetCmekKeyName" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetCmekKeyName"></a>

```go
func ResetCmekKeyName()
```

##### `ResetCollation` <a name="ResetCollation" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetCollation"></a>

```go
func ResetCollation()
```

##### `ResetDatabaseFlags` <a name="ResetDatabaseFlags" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDatabaseFlags"></a>

```go
func ResetDatabaseFlags()
```

##### `ResetDatabaseVersion` <a name="ResetDatabaseVersion" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDatabaseVersion"></a>

```go
func ResetDatabaseVersion()
```

##### `ResetDataDiskSizeGb` <a name="ResetDataDiskSizeGb" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDataDiskSizeGb"></a>

```go
func ResetDataDiskSizeGb()
```

##### `ResetDataDiskType` <a name="ResetDataDiskType" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDataDiskType"></a>

```go
func ResetDataDiskType()
```

##### `ResetEdition` <a name="ResetEdition" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetEdition"></a>

```go
func ResetEdition()
```

##### `ResetIpConfig` <a name="ResetIpConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetIpConfig"></a>

```go
func ResetIpConfig()
```

##### `ResetRootPassword` <a name="ResetRootPassword" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetRootPassword"></a>

```go
func ResetRootPassword()
```

##### `ResetStorageAutoResizeLimit` <a name="ResetStorageAutoResizeLimit" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetStorageAutoResizeLimit"></a>

```go
func ResetStorageAutoResizeLimit()
```

##### `ResetTier` <a name="ResetTier" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetTier"></a>

```go
func ResetTier()
```

##### `ResetUserLabels` <a name="ResetUserLabels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetUserLabels"></a>

```go
func ResetUserLabels()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetZone"></a>

```go
func ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.ipConfig">IpConfig</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.rootPasswordSet">RootPasswordSet</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.activationPolicyInput">ActivationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.autoStorageIncreaseInput">AutoStorageIncreaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.cmekKeyNameInput">CmekKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.collationInput">CollationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseFlagsInput">DatabaseFlagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseVersionInput">DatabaseVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskSizeGbInput">DataDiskSizeGbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskTypeInput">DataDiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.editionInput">EditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.ipConfigInput">IpConfigInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.rootPasswordInput">RootPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.sourceIdInput">SourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.storageAutoResizeLimitInput">StorageAutoResizeLimitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.userLabelsInput">UserLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.activationPolicy">ActivationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.autoStorageIncrease">AutoStorageIncrease</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.cmekKeyName">CmekKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.collation">Collation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseFlags">DatabaseFlags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskSizeGb">DataDiskSizeGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskType">DataDiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.edition">Edition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.rootPassword">RootPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.sourceId">SourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.storageAutoResizeLimit">StorageAutoResizeLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.userLabels">UserLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings">DatabaseMigrationServiceConnectionProfileCloudsqlSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpConfig`<sup>Required</sup> <a name="IpConfig" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.ipConfig"></a>

```go
func IpConfig() DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference</a>

---

##### `RootPasswordSet`<sup>Required</sup> <a name="RootPasswordSet" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.rootPasswordSet"></a>

```go
func RootPasswordSet() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ActivationPolicyInput`<sup>Optional</sup> <a name="ActivationPolicyInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.activationPolicyInput"></a>

```go
func ActivationPolicyInput() *string
```

- *Type:* *string

---

##### `AutoStorageIncreaseInput`<sup>Optional</sup> <a name="AutoStorageIncreaseInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.autoStorageIncreaseInput"></a>

```go
func AutoStorageIncreaseInput() interface{}
```

- *Type:* interface{}

---

##### `CmekKeyNameInput`<sup>Optional</sup> <a name="CmekKeyNameInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.cmekKeyNameInput"></a>

```go
func CmekKeyNameInput() *string
```

- *Type:* *string

---

##### `CollationInput`<sup>Optional</sup> <a name="CollationInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.collationInput"></a>

```go
func CollationInput() *string
```

- *Type:* *string

---

##### `DatabaseFlagsInput`<sup>Optional</sup> <a name="DatabaseFlagsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseFlagsInput"></a>

```go
func DatabaseFlagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatabaseVersionInput`<sup>Optional</sup> <a name="DatabaseVersionInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseVersionInput"></a>

```go
func DatabaseVersionInput() *string
```

- *Type:* *string

---

##### `DataDiskSizeGbInput`<sup>Optional</sup> <a name="DataDiskSizeGbInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskSizeGbInput"></a>

```go
func DataDiskSizeGbInput() *string
```

- *Type:* *string

---

##### `DataDiskTypeInput`<sup>Optional</sup> <a name="DataDiskTypeInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskTypeInput"></a>

```go
func DataDiskTypeInput() *string
```

- *Type:* *string

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.editionInput"></a>

```go
func EditionInput() *string
```

- *Type:* *string

---

##### `IpConfigInput`<sup>Optional</sup> <a name="IpConfigInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.ipConfigInput"></a>

```go
func IpConfigInput() DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a>

---

##### `RootPasswordInput`<sup>Optional</sup> <a name="RootPasswordInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.rootPasswordInput"></a>

```go
func RootPasswordInput() *string
```

- *Type:* *string

---

##### `SourceIdInput`<sup>Optional</sup> <a name="SourceIdInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.sourceIdInput"></a>

```go
func SourceIdInput() *string
```

- *Type:* *string

---

##### `StorageAutoResizeLimitInput`<sup>Optional</sup> <a name="StorageAutoResizeLimitInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.storageAutoResizeLimitInput"></a>

```go
func StorageAutoResizeLimitInput() *string
```

- *Type:* *string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `UserLabelsInput`<sup>Optional</sup> <a name="UserLabelsInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.userLabelsInput"></a>

```go
func UserLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `ActivationPolicy`<sup>Required</sup> <a name="ActivationPolicy" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.activationPolicy"></a>

```go
func ActivationPolicy() *string
```

- *Type:* *string

---

##### `AutoStorageIncrease`<sup>Required</sup> <a name="AutoStorageIncrease" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.autoStorageIncrease"></a>

```go
func AutoStorageIncrease() interface{}
```

- *Type:* interface{}

---

##### `CmekKeyName`<sup>Required</sup> <a name="CmekKeyName" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.cmekKeyName"></a>

```go
func CmekKeyName() *string
```

- *Type:* *string

---

##### `Collation`<sup>Required</sup> <a name="Collation" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.collation"></a>

```go
func Collation() *string
```

- *Type:* *string

---

##### `DatabaseFlags`<sup>Required</sup> <a name="DatabaseFlags" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseFlags"></a>

```go
func DatabaseFlags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseVersion"></a>

```go
func DatabaseVersion() *string
```

- *Type:* *string

---

##### `DataDiskSizeGb`<sup>Required</sup> <a name="DataDiskSizeGb" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskSizeGb"></a>

```go
func DataDiskSizeGb() *string
```

- *Type:* *string

---

##### `DataDiskType`<sup>Required</sup> <a name="DataDiskType" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskType"></a>

```go
func DataDiskType() *string
```

- *Type:* *string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.edition"></a>

```go
func Edition() *string
```

- *Type:* *string

---

##### `RootPassword`<sup>Required</sup> <a name="RootPassword" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.rootPassword"></a>

```go
func RootPassword() *string
```

- *Type:* *string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.sourceId"></a>

```go
func SourceId() *string
```

- *Type:* *string

---

##### `StorageAutoResizeLimit`<sup>Required</sup> <a name="StorageAutoResizeLimit" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.storageAutoResizeLimit"></a>

```go
func StorageAutoResizeLimit() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `UserLabels`<sup>Required</sup> <a name="UserLabels" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.userLabels"></a>

```go
func UserLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceConnectionProfileCloudsqlSettings
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileCloudsqlSettings">DatabaseMigrationServiceConnectionProfileCloudsqlSettings</a>

---


### DatabaseMigrationServiceConnectionProfileErrorList <a name="DatabaseMigrationServiceConnectionProfileErrorList" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseMigrationServiceConnectionProfileErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.get"></a>

```go
func Get(index *f64) DatabaseMigrationServiceConnectionProfileErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseMigrationServiceConnectionProfileErrorOutputReference <a name="DatabaseMigrationServiceConnectionProfileErrorOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseMigrationServiceConnectionProfileErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.details">Details</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileError">DatabaseMigrationServiceConnectionProfileError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.details"></a>

```go
func Details() StringMapList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceConnectionProfileError
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileError">DatabaseMigrationServiceConnectionProfileError</a>

---


### DatabaseMigrationServiceConnectionProfileMysqlOutputReference <a name="DatabaseMigrationServiceConnectionProfileMysqlOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileMysqlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceConnectionProfileMysqlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.putSsl">PutSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.resetCloudSqlId">ResetCloudSqlId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.resetSsl">ResetSsl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSsl` <a name="PutSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.putSsl"></a>

```go
func PutSsl(value DatabaseMigrationServiceConnectionProfileMysqlSsl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.putSsl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl">DatabaseMigrationServiceConnectionProfileMysqlSsl</a>

---

##### `ResetCloudSqlId` <a name="ResetCloudSqlId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.resetCloudSqlId"></a>

```go
func ResetCloudSqlId()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.resetSsl"></a>

```go
func ResetSsl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.passwordSet">PasswordSet</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.ssl">Ssl</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference">DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.cloudSqlIdInput">CloudSqlIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.sslInput">SslInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl">DatabaseMigrationServiceConnectionProfileMysqlSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.cloudSqlId">CloudSqlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql">DatabaseMigrationServiceConnectionProfileMysql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordSet`<sup>Required</sup> <a name="PasswordSet" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.passwordSet"></a>

```go
func PasswordSet() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.ssl"></a>

```go
func Ssl() DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference">DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference</a>

---

##### `CloudSqlIdInput`<sup>Optional</sup> <a name="CloudSqlIdInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.cloudSqlIdInput"></a>

```go
func CloudSqlIdInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.sslInput"></a>

```go
func SslInput() DatabaseMigrationServiceConnectionProfileMysqlSsl
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl">DatabaseMigrationServiceConnectionProfileMysqlSsl</a>

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `CloudSqlId`<sup>Required</sup> <a name="CloudSqlId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.cloudSqlId"></a>

```go
func CloudSqlId() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceConnectionProfileMysql
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysql">DatabaseMigrationServiceConnectionProfileMysql</a>

---


### DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference <a name="DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resetClientKey">ResetClientKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resetClientCertificate"></a>

```go
func ResetClientCertificate()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resetClientKey"></a>

```go
func ResetClientKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.caCertificateInput">CaCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientKeyInput">ClientKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl">DatabaseMigrationServiceConnectionProfileMysqlSsl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `CaCertificateInput`<sup>Optional</sup> <a name="CaCertificateInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.caCertificateInput"></a>

```go
func CaCertificateInput() *string
```

- *Type:* *string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientCertificateInput"></a>

```go
func ClientCertificateInput() *string
```

- *Type:* *string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientKeyInput"></a>

```go
func ClientKeyInput() *string
```

- *Type:* *string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.caCertificate"></a>

```go
func CaCertificate() *string
```

- *Type:* *string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceConnectionProfileMysqlSsl
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileMysqlSsl">DatabaseMigrationServiceConnectionProfileMysqlSsl</a>

---


### DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference <a name="DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity">DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity">DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity</a>

---


### DatabaseMigrationServiceConnectionProfileOracleOutputReference <a name="DatabaseMigrationServiceConnectionProfileOracleOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileOracleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceConnectionProfileOracleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putForwardSshConnectivity">PutForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putPrivateConnectivity">PutPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putSsl">PutSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putStaticServiceIpConnectivity">PutStaticServiceIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resetForwardSshConnectivity">ResetForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resetPrivateConnectivity">ResetPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resetSsl">ResetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resetStaticServiceIpConnectivity">ResetStaticServiceIpConnectivity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForwardSshConnectivity` <a name="PutForwardSshConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putForwardSshConnectivity"></a>

```go
func PutForwardSshConnectivity(value DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putForwardSshConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity">DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity</a>

---

##### `PutPrivateConnectivity` <a name="PutPrivateConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putPrivateConnectivity"></a>

```go
func PutPrivateConnectivity(value DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putPrivateConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity">DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity</a>

---

##### `PutSsl` <a name="PutSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putSsl"></a>

```go
func PutSsl(value DatabaseMigrationServiceConnectionProfileOracleSsl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putSsl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl">DatabaseMigrationServiceConnectionProfileOracleSsl</a>

---

##### `PutStaticServiceIpConnectivity` <a name="PutStaticServiceIpConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putStaticServiceIpConnectivity"></a>

```go
func PutStaticServiceIpConnectivity(value DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.putStaticServiceIpConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity">DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity</a>

---

##### `ResetForwardSshConnectivity` <a name="ResetForwardSshConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resetForwardSshConnectivity"></a>

```go
func ResetForwardSshConnectivity()
```

##### `ResetPrivateConnectivity` <a name="ResetPrivateConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resetPrivateConnectivity"></a>

```go
func ResetPrivateConnectivity()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resetSsl"></a>

```go
func ResetSsl()
```

##### `ResetStaticServiceIpConnectivity` <a name="ResetStaticServiceIpConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.resetStaticServiceIpConnectivity"></a>

```go
func ResetStaticServiceIpConnectivity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.forwardSshConnectivity">ForwardSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference">DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.passwordSet">PasswordSet</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.privateConnectivity">PrivateConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference">DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.ssl">Ssl</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference">DatabaseMigrationServiceConnectionProfileOracleSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.staticServiceIpConnectivity">StaticServiceIpConnectivity</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference">DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.databaseServiceInput">DatabaseServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.forwardSshConnectivityInput">ForwardSshConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity">DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.privateConnectivityInput">PrivateConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity">DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.sslInput">SslInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl">DatabaseMigrationServiceConnectionProfileOracleSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.staticServiceIpConnectivityInput">StaticServiceIpConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity">DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.databaseService">DatabaseService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle">DatabaseMigrationServiceConnectionProfileOracle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardSshConnectivity`<sup>Required</sup> <a name="ForwardSshConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.forwardSshConnectivity"></a>

```go
func ForwardSshConnectivity() DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference">DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference</a>

---

##### `PasswordSet`<sup>Required</sup> <a name="PasswordSet" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.passwordSet"></a>

```go
func PasswordSet() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PrivateConnectivity`<sup>Required</sup> <a name="PrivateConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.privateConnectivity"></a>

```go
func PrivateConnectivity() DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference">DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference</a>

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.ssl"></a>

```go
func Ssl() DatabaseMigrationServiceConnectionProfileOracleSslOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference">DatabaseMigrationServiceConnectionProfileOracleSslOutputReference</a>

---

##### `StaticServiceIpConnectivity`<sup>Required</sup> <a name="StaticServiceIpConnectivity" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.staticServiceIpConnectivity"></a>

```go
func StaticServiceIpConnectivity() DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference">DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference</a>

---

##### `DatabaseServiceInput`<sup>Optional</sup> <a name="DatabaseServiceInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.databaseServiceInput"></a>

```go
func DatabaseServiceInput() *string
```

- *Type:* *string

---

##### `ForwardSshConnectivityInput`<sup>Optional</sup> <a name="ForwardSshConnectivityInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.forwardSshConnectivityInput"></a>

```go
func ForwardSshConnectivityInput() DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity">DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity</a>

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PrivateConnectivityInput`<sup>Optional</sup> <a name="PrivateConnectivityInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.privateConnectivityInput"></a>

```go
func PrivateConnectivityInput() DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity">DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity</a>

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.sslInput"></a>

```go
func SslInput() DatabaseMigrationServiceConnectionProfileOracleSsl
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl">DatabaseMigrationServiceConnectionProfileOracleSsl</a>

---

##### `StaticServiceIpConnectivityInput`<sup>Optional</sup> <a name="StaticServiceIpConnectivityInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.staticServiceIpConnectivityInput"></a>

```go
func StaticServiceIpConnectivityInput() DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity">DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity</a>

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `DatabaseService`<sup>Required</sup> <a name="DatabaseService" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.databaseService"></a>

```go
func DatabaseService() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceConnectionProfileOracle
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracle">DatabaseMigrationServiceConnectionProfileOracle</a>

---


### DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference <a name="DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.privateConnectionInput">PrivateConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.privateConnection">PrivateConnection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity">DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateConnectionInput`<sup>Optional</sup> <a name="PrivateConnectionInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.privateConnectionInput"></a>

```go
func PrivateConnectionInput() *string
```

- *Type:* *string

---

##### `PrivateConnection`<sup>Required</sup> <a name="PrivateConnection" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.privateConnection"></a>

```go
func PrivateConnection() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity">DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity</a>

---


### DatabaseMigrationServiceConnectionProfileOracleSslOutputReference <a name="DatabaseMigrationServiceConnectionProfileOracleSslOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileOracleSslOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceConnectionProfileOracleSslOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.resetClientKey">ResetClientKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.resetClientCertificate"></a>

```go
func ResetClientCertificate()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.resetClientKey"></a>

```go
func ResetClientKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.caCertificateInput">CaCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.clientKeyInput">ClientKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl">DatabaseMigrationServiceConnectionProfileOracleSsl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `CaCertificateInput`<sup>Optional</sup> <a name="CaCertificateInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.caCertificateInput"></a>

```go
func CaCertificateInput() *string
```

- *Type:* *string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.clientCertificateInput"></a>

```go
func ClientCertificateInput() *string
```

- *Type:* *string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.clientKeyInput"></a>

```go
func ClientKeyInput() *string
```

- *Type:* *string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.caCertificate"></a>

```go
func CaCertificate() *string
```

- *Type:* *string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSslOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceConnectionProfileOracleSsl
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleSsl">DatabaseMigrationServiceConnectionProfileOracleSsl</a>

---


### DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference <a name="DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity">DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity">DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity</a>

---


### DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference <a name="DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.putSsl">PutSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resetCloudSqlId">ResetCloudSqlId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resetSsl">ResetSsl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSsl` <a name="PutSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.putSsl"></a>

```go
func PutSsl(value DatabaseMigrationServiceConnectionProfilePostgresqlSsl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.putSsl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl">DatabaseMigrationServiceConnectionProfilePostgresqlSsl</a>

---

##### `ResetCloudSqlId` <a name="ResetCloudSqlId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resetCloudSqlId"></a>

```go
func ResetCloudSqlId()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resetSsl"></a>

```go
func ResetSsl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.networkArchitecture">NetworkArchitecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.passwordSet">PasswordSet</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.ssl">Ssl</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference">DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.cloudSqlIdInput">CloudSqlIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.sslInput">SslInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl">DatabaseMigrationServiceConnectionProfilePostgresqlSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.cloudSqlId">CloudSqlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql">DatabaseMigrationServiceConnectionProfilePostgresql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkArchitecture`<sup>Required</sup> <a name="NetworkArchitecture" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.networkArchitecture"></a>

```go
func NetworkArchitecture() *string
```

- *Type:* *string

---

##### `PasswordSet`<sup>Required</sup> <a name="PasswordSet" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.passwordSet"></a>

```go
func PasswordSet() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.ssl"></a>

```go
func Ssl() DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference">DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference</a>

---

##### `CloudSqlIdInput`<sup>Optional</sup> <a name="CloudSqlIdInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.cloudSqlIdInput"></a>

```go
func CloudSqlIdInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.sslInput"></a>

```go
func SslInput() DatabaseMigrationServiceConnectionProfilePostgresqlSsl
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl">DatabaseMigrationServiceConnectionProfilePostgresqlSsl</a>

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `CloudSqlId`<sup>Required</sup> <a name="CloudSqlId" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.cloudSqlId"></a>

```go
func CloudSqlId() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceConnectionProfilePostgresql
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresql">DatabaseMigrationServiceConnectionProfilePostgresql</a>

---


### DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference <a name="DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resetClientKey">ResetClientKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resetClientCertificate"></a>

```go
func ResetClientCertificate()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resetClientKey"></a>

```go
func ResetClientKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.caCertificateInput">CaCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientKeyInput">ClientKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl">DatabaseMigrationServiceConnectionProfilePostgresqlSsl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `CaCertificateInput`<sup>Optional</sup> <a name="CaCertificateInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.caCertificateInput"></a>

```go
func CaCertificateInput() *string
```

- *Type:* *string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientCertificateInput"></a>

```go
func ClientCertificateInput() *string
```

- *Type:* *string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientKeyInput"></a>

```go
func ClientKeyInput() *string
```

- *Type:* *string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.caCertificate"></a>

```go
func CaCertificate() *string
```

- *Type:* *string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationServiceConnectionProfilePostgresqlSsl
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfilePostgresqlSsl">DatabaseMigrationServiceConnectionProfilePostgresqlSsl</a>

---


### DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference <a name="DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/databasemigrationserviceconnectionprofile"

databasemigrationserviceconnectionprofile.NewDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServiceConnectionProfile.DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



