# `dataprocBatch` Submodule <a name="`dataprocBatch` Submodule" id="@cdktf/provider-google.dataprocBatch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocBatch <a name="DataprocBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch google_dataproc_batch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatch(scope Construct, id *string, config DataprocBatchConfig) DataprocBatch
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig">DataprocBatchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig">DataprocBatchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.putEnvironmentConfig">PutEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.putPysparkBatch">PutPysparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.putRuntimeConfig">PutRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkBatch">PutSparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkRBatch">PutSparkRBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkSqlBatch">PutSparkSqlBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetBatchId">ResetBatchId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetEnvironmentConfig">ResetEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetPysparkBatch">ResetPysparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetRuntimeConfig">ResetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetSparkBatch">ResetSparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetSparkRBatch">ResetSparkRBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetSparkSqlBatch">ResetSparkSqlBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnvironmentConfig` <a name="PutEnvironmentConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putEnvironmentConfig"></a>

```go
func PutEnvironmentConfig(value DataprocBatchEnvironmentConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a>

---

##### `PutPysparkBatch` <a name="PutPysparkBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putPysparkBatch"></a>

```go
func PutPysparkBatch(value DataprocBatchPysparkBatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putPysparkBatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a>

---

##### `PutRuntimeConfig` <a name="PutRuntimeConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putRuntimeConfig"></a>

```go
func PutRuntimeConfig(value DataprocBatchRuntimeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a>

---

##### `PutSparkBatch` <a name="PutSparkBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkBatch"></a>

```go
func PutSparkBatch(value DataprocBatchSparkBatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkBatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a>

---

##### `PutSparkRBatch` <a name="PutSparkRBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkRBatch"></a>

```go
func PutSparkRBatch(value DataprocBatchSparkRBatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkRBatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a>

---

##### `PutSparkSqlBatch` <a name="PutSparkSqlBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkSqlBatch"></a>

```go
func PutSparkSqlBatch(value DataprocBatchSparkSqlBatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkSqlBatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putTimeouts"></a>

```go
func PutTimeouts(value DataprocBatchTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts">DataprocBatchTimeouts</a>

---

##### `ResetBatchId` <a name="ResetBatchId" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetBatchId"></a>

```go
func ResetBatchId()
```

##### `ResetEnvironmentConfig` <a name="ResetEnvironmentConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetEnvironmentConfig"></a>

```go
func ResetEnvironmentConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPysparkBatch` <a name="ResetPysparkBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetPysparkBatch"></a>

```go
func ResetPysparkBatch()
```

##### `ResetRuntimeConfig` <a name="ResetRuntimeConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetRuntimeConfig"></a>

```go
func ResetRuntimeConfig()
```

##### `ResetSparkBatch` <a name="ResetSparkBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetSparkBatch"></a>

```go
func ResetSparkBatch()
```

##### `ResetSparkRBatch` <a name="ResetSparkRBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetSparkRBatch"></a>

```go
func ResetSparkRBatch()
```

##### `ResetSparkSqlBatch` <a name="ResetSparkSqlBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetSparkSqlBatch"></a>

```go
func ResetSparkSqlBatch()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataprocBatch resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.DataprocBatch_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.DataprocBatch_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.DataprocBatch_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.DataprocBatch_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataprocBatch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataprocBatch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataprocBatch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataprocBatch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.environmentConfig">EnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference">DataprocBatchEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.pysparkBatch">PysparkBatch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference">DataprocBatchPysparkBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference">DataprocBatchRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.runtimeInfo">RuntimeInfo</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList">DataprocBatchRuntimeInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkBatch">SparkBatch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference">DataprocBatchSparkBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkRBatch">SparkRBatch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference">DataprocBatchSparkRBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkSqlBatch">SparkSqlBatch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference">DataprocBatchSparkSqlBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.stateHistory">StateHistory</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList">DataprocBatchStateHistoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.stateTime">StateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference">DataprocBatchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.batchIdInput">BatchIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.environmentConfigInput">EnvironmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.pysparkBatchInput">PysparkBatchInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.runtimeConfigInput">RuntimeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkBatchInput">SparkBatchInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkRBatchInput">SparkRBatchInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkSqlBatchInput">SparkSqlBatchInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.batchId">BatchId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EnvironmentConfig`<sup>Required</sup> <a name="EnvironmentConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.environmentConfig"></a>

```go
func EnvironmentConfig() DataprocBatchEnvironmentConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference">DataprocBatchEnvironmentConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `PysparkBatch`<sup>Required</sup> <a name="PysparkBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.pysparkBatch"></a>

```go
func PysparkBatch() DataprocBatchPysparkBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference">DataprocBatchPysparkBatchOutputReference</a>

---

##### `RuntimeConfig`<sup>Required</sup> <a name="RuntimeConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.runtimeConfig"></a>

```go
func RuntimeConfig() DataprocBatchRuntimeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference">DataprocBatchRuntimeConfigOutputReference</a>

---

##### `RuntimeInfo`<sup>Required</sup> <a name="RuntimeInfo" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.runtimeInfo"></a>

```go
func RuntimeInfo() DataprocBatchRuntimeInfoList
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList">DataprocBatchRuntimeInfoList</a>

---

##### `SparkBatch`<sup>Required</sup> <a name="SparkBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkBatch"></a>

```go
func SparkBatch() DataprocBatchSparkBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference">DataprocBatchSparkBatchOutputReference</a>

---

##### `SparkRBatch`<sup>Required</sup> <a name="SparkRBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkRBatch"></a>

```go
func SparkRBatch() DataprocBatchSparkRBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference">DataprocBatchSparkRBatchOutputReference</a>

---

##### `SparkSqlBatch`<sup>Required</sup> <a name="SparkSqlBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkSqlBatch"></a>

```go
func SparkSqlBatch() DataprocBatchSparkSqlBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference">DataprocBatchSparkSqlBatchOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateHistory`<sup>Required</sup> <a name="StateHistory" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.stateHistory"></a>

```go
func StateHistory() DataprocBatchStateHistoryList
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList">DataprocBatchStateHistoryList</a>

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `StateTime`<sup>Required</sup> <a name="StateTime" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.stateTime"></a>

```go
func StateTime() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.timeouts"></a>

```go
func Timeouts() DataprocBatchTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference">DataprocBatchTimeoutsOutputReference</a>

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `BatchIdInput`<sup>Optional</sup> <a name="BatchIdInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.batchIdInput"></a>

```go
func BatchIdInput() *string
```

- *Type:* *string

---

##### `EnvironmentConfigInput`<sup>Optional</sup> <a name="EnvironmentConfigInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.environmentConfigInput"></a>

```go
func EnvironmentConfigInput() DataprocBatchEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PysparkBatchInput`<sup>Optional</sup> <a name="PysparkBatchInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.pysparkBatchInput"></a>

```go
func PysparkBatchInput() DataprocBatchPysparkBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a>

---

##### `RuntimeConfigInput`<sup>Optional</sup> <a name="RuntimeConfigInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.runtimeConfigInput"></a>

```go
func RuntimeConfigInput() DataprocBatchRuntimeConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a>

---

##### `SparkBatchInput`<sup>Optional</sup> <a name="SparkBatchInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkBatchInput"></a>

```go
func SparkBatchInput() DataprocBatchSparkBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a>

---

##### `SparkRBatchInput`<sup>Optional</sup> <a name="SparkRBatchInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkRBatchInput"></a>

```go
func SparkRBatchInput() DataprocBatchSparkRBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a>

---

##### `SparkSqlBatchInput`<sup>Optional</sup> <a name="SparkSqlBatchInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkSqlBatchInput"></a>

```go
func SparkSqlBatchInput() DataprocBatchSparkSqlBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BatchId`<sup>Required</sup> <a name="BatchId" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.batchId"></a>

```go
func BatchId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocBatchConfig <a name="DataprocBatchConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

&dataprocbatch.DataprocBatchConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BatchId: *string,
	EnvironmentConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.dataprocBatch.DataprocBatchEnvironmentConfig,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Project: *string,
	PysparkBatch: github.com/cdktf/cdktf-provider-google-go/google/v16.dataprocBatch.DataprocBatchPysparkBatch,
	RuntimeConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.dataprocBatch.DataprocBatchRuntimeConfig,
	SparkBatch: github.com/cdktf/cdktf-provider-google-go/google/v16.dataprocBatch.DataprocBatchSparkBatch,
	SparkRBatch: github.com/cdktf/cdktf-provider-google-go/google/v16.dataprocBatch.DataprocBatchSparkRBatch,
	SparkSqlBatch: github.com/cdktf/cdktf-provider-google-go/google/v16.dataprocBatch.DataprocBatchSparkSqlBatch,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.dataprocBatch.DataprocBatchTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.batchId">BatchId</a></code> | <code>*string</code> | The ID to use for the batch, which will become the final component of the batch's resource name. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.environmentConfig">EnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a></code> | environment_config block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#id DataprocBatch#id}. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels to associate with this batch. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.location">Location</a></code> | <code>*string</code> | The location in which the batch will be created in. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#project DataprocBatch#project}. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.pysparkBatch">PysparkBatch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a></code> | pyspark_batch block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.sparkBatch">SparkBatch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a></code> | spark_batch block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.sparkRBatch">SparkRBatch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a></code> | spark_r_batch block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.sparkSqlBatch">SparkSqlBatch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a></code> | spark_sql_batch block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts">DataprocBatchTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BatchId`<sup>Optional</sup> <a name="BatchId" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.batchId"></a>

```go
BatchId *string
```

- *Type:* *string

The ID to use for the batch, which will become the final component of the batch's resource name.

This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#batch_id DataprocBatch#batch_id}

---

##### `EnvironmentConfig`<sup>Optional</sup> <a name="EnvironmentConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.environmentConfig"></a>

```go
EnvironmentConfig DataprocBatchEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a>

environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#environment_config DataprocBatch#environment_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#id DataprocBatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels to associate with this batch.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#labels DataprocBatch#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location in which the batch will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#location DataprocBatch#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#project DataprocBatch#project}.

---

##### `PysparkBatch`<sup>Optional</sup> <a name="PysparkBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.pysparkBatch"></a>

```go
PysparkBatch DataprocBatchPysparkBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a>

pyspark_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#pyspark_batch DataprocBatch#pyspark_batch}

---

##### `RuntimeConfig`<sup>Optional</sup> <a name="RuntimeConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.runtimeConfig"></a>

```go
RuntimeConfig DataprocBatchRuntimeConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#runtime_config DataprocBatch#runtime_config}

---

##### `SparkBatch`<sup>Optional</sup> <a name="SparkBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.sparkBatch"></a>

```go
SparkBatch DataprocBatchSparkBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a>

spark_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#spark_batch DataprocBatch#spark_batch}

---

##### `SparkRBatch`<sup>Optional</sup> <a name="SparkRBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.sparkRBatch"></a>

```go
SparkRBatch DataprocBatchSparkRBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a>

spark_r_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#spark_r_batch DataprocBatch#spark_r_batch}

---

##### `SparkSqlBatch`<sup>Optional</sup> <a name="SparkSqlBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.sparkSqlBatch"></a>

```go
SparkSqlBatch DataprocBatchSparkSqlBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a>

spark_sql_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#spark_sql_batch DataprocBatch#spark_sql_batch}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.timeouts"></a>

```go
Timeouts DataprocBatchTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts">DataprocBatchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#timeouts DataprocBatch#timeouts}

---

### DataprocBatchEnvironmentConfig <a name="DataprocBatchEnvironmentConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

&dataprocbatch.DataprocBatchEnvironmentConfig {
	ExecutionConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig,
	PeripheralsConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig.property.executionConfig">ExecutionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a></code> | execution_config block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig.property.peripheralsConfig">PeripheralsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a></code> | peripherals_config block. |

---

##### `ExecutionConfig`<sup>Optional</sup> <a name="ExecutionConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig.property.executionConfig"></a>

```go
ExecutionConfig DataprocBatchEnvironmentConfigExecutionConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a>

execution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#execution_config DataprocBatch#execution_config}

---

##### `PeripheralsConfig`<sup>Optional</sup> <a name="PeripheralsConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig.property.peripheralsConfig"></a>

```go
PeripheralsConfig DataprocBatchEnvironmentConfigPeripheralsConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a>

peripherals_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#peripherals_config DataprocBatch#peripherals_config}

---

### DataprocBatchEnvironmentConfigExecutionConfig <a name="DataprocBatchEnvironmentConfigExecutionConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

&dataprocbatch.DataprocBatchEnvironmentConfigExecutionConfig {
	KmsKey: *string,
	NetworkTags: *[]*string,
	NetworkUri: *string,
	ServiceAccount: *string,
	StagingBucket: *string,
	SubnetworkUri: *string,
	Ttl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The Cloud KMS key to use for encryption. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.networkTags">NetworkTags</a></code> | <code>*[]*string</code> | Tags used for network traffic control. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.networkUri">NetworkUri</a></code> | <code>*string</code> | Network configuration for workload execution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Service account that used to execute workload. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.stagingBucket">StagingBucket</a></code> | <code>*string</code> | A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.subnetworkUri">SubnetworkUri</a></code> | <code>*string</code> | Subnetwork configuration for workload execution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.ttl">Ttl</a></code> | <code>*string</code> | The duration after which the workload will be terminated. |

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The Cloud KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#kms_key DataprocBatch#kms_key}

---

##### `NetworkTags`<sup>Optional</sup> <a name="NetworkTags" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.networkTags"></a>

```go
NetworkTags *[]*string
```

- *Type:* *[]*string

Tags used for network traffic control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#network_tags DataprocBatch#network_tags}

---

##### `NetworkUri`<sup>Optional</sup> <a name="NetworkUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.networkUri"></a>

```go
NetworkUri *string
```

- *Type:* *string

Network configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#network_uri DataprocBatch#network_uri}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Service account that used to execute workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#service_account DataprocBatch#service_account}

---

##### `StagingBucket`<sup>Optional</sup> <a name="StagingBucket" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.stagingBucket"></a>

```go
StagingBucket *string
```

- *Type:* *string

A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files.

If you do not specify a staging bucket,
Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running,
and then create and manage project-level, per-location staging and temporary buckets.
This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#staging_bucket DataprocBatch#staging_bucket}

---

##### `SubnetworkUri`<sup>Optional</sup> <a name="SubnetworkUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.subnetworkUri"></a>

```go
SubnetworkUri *string
```

- *Type:* *string

Subnetwork configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#subnetwork_uri DataprocBatch#subnetwork_uri}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

The duration after which the workload will be terminated.

When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing
work to finish. If ttl is not specified for a batch workload, the workload will be allowed to run until it
exits naturally (or run forever without exiting). If ttl is not specified for an interactive session,
it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours.
Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idleTtl are specified (for an interactive session),
the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or
when ttl has been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#ttl DataprocBatch#ttl}

---

### DataprocBatchEnvironmentConfigPeripheralsConfig <a name="DataprocBatchEnvironmentConfigPeripheralsConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

&dataprocbatch.DataprocBatchEnvironmentConfigPeripheralsConfig {
	MetastoreService: *string,
	SparkHistoryServerConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig.property.metastoreService">MetastoreService</a></code> | <code>*string</code> | Resource name of an existing Dataproc Metastore service. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig">SparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `MetastoreService`<sup>Optional</sup> <a name="MetastoreService" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig.property.metastoreService"></a>

```go
MetastoreService *string
```

- *Type:* *string

Resource name of an existing Dataproc Metastore service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#metastore_service DataprocBatch#metastore_service}

---

##### `SparkHistoryServerConfig`<sup>Optional</sup> <a name="SparkHistoryServerConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig"></a>

```go
SparkHistoryServerConfig DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#spark_history_server_config DataprocBatch#spark_history_server_config}

---

### DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig <a name="DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

&dataprocbatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig {
	DataprocCluster: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster">DataprocCluster</a></code> | <code>*string</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. |

---

##### `DataprocCluster`<sup>Optional</sup> <a name="DataprocCluster" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster"></a>

```go
DataprocCluster *string
```

- *Type:* *string

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#dataproc_cluster DataprocBatch#dataproc_cluster}

---

### DataprocBatchPysparkBatch <a name="DataprocBatchPysparkBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

&dataprocbatch.DataprocBatchPysparkBatch {
	ArchiveUris: *[]*string,
	Args: *[]*string,
	FileUris: *[]*string,
	JarFileUris: *[]*string,
	MainPythonFileUri: *string,
	PythonFileUris: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.args">Args</a></code> | <code>*[]*string</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.mainPythonFileUri">MainPythonFileUri</a></code> | <code>*string</code> | The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.pythonFileUris">PythonFileUris</a></code> | <code>*[]*string</code> | HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. |

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.archiveUris"></a>

```go
ArchiveUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#archive_uris DataprocBatch#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#args DataprocBatch#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.fileUris"></a>

```go
FileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#file_uris DataprocBatch#file_uris}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.jarFileUris"></a>

```go
JarFileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#jar_file_uris DataprocBatch#jar_file_uris}

---

##### `MainPythonFileUri`<sup>Optional</sup> <a name="MainPythonFileUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.mainPythonFileUri"></a>

```go
MainPythonFileUri *string
```

- *Type:* *string

The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#main_python_file_uri DataprocBatch#main_python_file_uri}

---

##### `PythonFileUris`<sup>Optional</sup> <a name="PythonFileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.pythonFileUris"></a>

```go
PythonFileUris *[]*string
```

- *Type:* *[]*string

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#python_file_uris DataprocBatch#python_file_uris}

---

### DataprocBatchRuntimeConfig <a name="DataprocBatchRuntimeConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

&dataprocbatch.DataprocBatchRuntimeConfig {
	AutotuningConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig,
	Cohort: *string,
	ContainerImage: *string,
	Properties: *map[string]*string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.autotuningConfig">AutotuningConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a></code> | autotuning_config block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.cohort">Cohort</a></code> | <code>*string</code> | Optional. Cohort identifier. Identifies families of the workloads having the same shape, e.g. daily ETL jobs. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.containerImage">ContainerImage</a></code> | <code>*string</code> | Optional custom container image for the job runtime environment. If not specified, a default container image will be used. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.properties">Properties</a></code> | <code>*map[string]*string</code> | A mapping of property names to values, which are used to configure workload execution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.version">Version</a></code> | <code>*string</code> | Version of the batch runtime. |

---

##### `AutotuningConfig`<sup>Optional</sup> <a name="AutotuningConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.autotuningConfig"></a>

```go
AutotuningConfig DataprocBatchRuntimeConfigAutotuningConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a>

autotuning_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#autotuning_config DataprocBatch#autotuning_config}

---

##### `Cohort`<sup>Optional</sup> <a name="Cohort" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.cohort"></a>

```go
Cohort *string
```

- *Type:* *string

Optional. Cohort identifier. Identifies families of the workloads having the same shape, e.g. daily ETL jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#cohort DataprocBatch#cohort}

---

##### `ContainerImage`<sup>Optional</sup> <a name="ContainerImage" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.containerImage"></a>

```go
ContainerImage *string
```

- *Type:* *string

Optional custom container image for the job runtime environment. If not specified, a default container image will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#container_image DataprocBatch#container_image}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

A mapping of property names to values, which are used to configure workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#properties DataprocBatch#properties}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Version of the batch runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#version DataprocBatch#version}

---

### DataprocBatchRuntimeConfigAutotuningConfig <a name="DataprocBatchRuntimeConfigAutotuningConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

&dataprocbatch.DataprocBatchRuntimeConfigAutotuningConfig {
	Scenarios: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig.property.scenarios">Scenarios</a></code> | <code>*[]*string</code> | Optional. Scenarios for which tunings are applied. Possible values: ["SCALING", "BROADCAST_HASH_JOIN", "MEMORY"]. |

---

##### `Scenarios`<sup>Optional</sup> <a name="Scenarios" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig.property.scenarios"></a>

```go
Scenarios *[]*string
```

- *Type:* *[]*string

Optional. Scenarios for which tunings are applied. Possible values: ["SCALING", "BROADCAST_HASH_JOIN", "MEMORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#scenarios DataprocBatch#scenarios}

---

### DataprocBatchRuntimeInfo <a name="DataprocBatchRuntimeInfo" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

&dataprocbatch.DataprocBatchRuntimeInfo {

}
```


### DataprocBatchRuntimeInfoApproximateUsage <a name="DataprocBatchRuntimeInfoApproximateUsage" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

&dataprocbatch.DataprocBatchRuntimeInfoApproximateUsage {

}
```


### DataprocBatchRuntimeInfoCurrentUsage <a name="DataprocBatchRuntimeInfoCurrentUsage" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

&dataprocbatch.DataprocBatchRuntimeInfoCurrentUsage {

}
```


### DataprocBatchSparkBatch <a name="DataprocBatchSparkBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

&dataprocbatch.DataprocBatchSparkBatch {
	ArchiveUris: *[]*string,
	Args: *[]*string,
	FileUris: *[]*string,
	JarFileUris: *[]*string,
	MainClass: *string,
	MainJarFileUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.args">Args</a></code> | <code>*[]*string</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.mainClass">MainClass</a></code> | <code>*string</code> | The name of the driver main class. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.mainJarFileUri">MainJarFileUri</a></code> | <code>*string</code> | The HCFS URI of the jar file that contains the main class. |

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.archiveUris"></a>

```go
ArchiveUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#archive_uris DataprocBatch#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#args DataprocBatch#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.fileUris"></a>

```go
FileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#file_uris DataprocBatch#file_uris}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.jarFileUris"></a>

```go
JarFileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#jar_file_uris DataprocBatch#jar_file_uris}

---

##### `MainClass`<sup>Optional</sup> <a name="MainClass" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.mainClass"></a>

```go
MainClass *string
```

- *Type:* *string

The name of the driver main class.

The jar file that contains the class must be in the
classpath or specified in jarFileUris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#main_class DataprocBatch#main_class}

---

##### `MainJarFileUri`<sup>Optional</sup> <a name="MainJarFileUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.mainJarFileUri"></a>

```go
MainJarFileUri *string
```

- *Type:* *string

The HCFS URI of the jar file that contains the main class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#main_jar_file_uri DataprocBatch#main_jar_file_uri}

---

### DataprocBatchSparkRBatch <a name="DataprocBatchSparkRBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

&dataprocbatch.DataprocBatchSparkRBatch {
	ArchiveUris: *[]*string,
	Args: *[]*string,
	FileUris: *[]*string,
	MainRFileUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.args">Args</a></code> | <code>*[]*string</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.mainRFileUri">MainRFileUri</a></code> | <code>*string</code> | The HCFS URI of the main R file to use as the driver. |

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.archiveUris"></a>

```go
ArchiveUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#archive_uris DataprocBatch#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#args DataprocBatch#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.fileUris"></a>

```go
FileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#file_uris DataprocBatch#file_uris}

---

##### `MainRFileUri`<sup>Optional</sup> <a name="MainRFileUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.mainRFileUri"></a>

```go
MainRFileUri *string
```

- *Type:* *string

The HCFS URI of the main R file to use as the driver.

Must be a .R or .r file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#main_r_file_uri DataprocBatch#main_r_file_uri}

---

### DataprocBatchSparkSqlBatch <a name="DataprocBatchSparkSqlBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

&dataprocbatch.DataprocBatchSparkSqlBatch {
	JarFileUris: *[]*string,
	QueryFileUri: *string,
	QueryVariables: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | HCFS URIs of jar files to be added to the Spark CLASSPATH. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.property.queryFileUri">QueryFileUri</a></code> | <code>*string</code> | The HCFS URI of the script that contains Spark SQL queries to execute. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.property.queryVariables">QueryVariables</a></code> | <code>*map[string]*string</code> | Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). |

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.property.jarFileUris"></a>

```go
JarFileUris *[]*string
```

- *Type:* *[]*string

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#jar_file_uris DataprocBatch#jar_file_uris}

---

##### `QueryFileUri`<sup>Optional</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.property.queryFileUri"></a>

```go
QueryFileUri *string
```

- *Type:* *string

The HCFS URI of the script that contains Spark SQL queries to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#query_file_uri DataprocBatch#query_file_uri}

---

##### `QueryVariables`<sup>Optional</sup> <a name="QueryVariables" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.property.queryVariables"></a>

```go
QueryVariables *map[string]*string
```

- *Type:* *map[string]*string

Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#query_variables DataprocBatch#query_variables}

---

### DataprocBatchStateHistory <a name="DataprocBatchStateHistory" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

&dataprocbatch.DataprocBatchStateHistory {

}
```


### DataprocBatchTimeouts <a name="DataprocBatchTimeouts" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

&dataprocbatch.DataprocBatchTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#create DataprocBatch#create}. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#delete DataprocBatch#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#update DataprocBatch#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#create DataprocBatch#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#delete DataprocBatch#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_batch#update DataprocBatch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocBatchEnvironmentConfigExecutionConfigOutputReference <a name="DataprocBatchEnvironmentConfigExecutionConfigOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchEnvironmentConfigExecutionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocBatchEnvironmentConfigExecutionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags">ResetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkUri">ResetNetworkUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket">ResetStagingBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri">ResetSubnetworkUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetNetworkTags` <a name="ResetNetworkTags" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags"></a>

```go
func ResetNetworkTags()
```

##### `ResetNetworkUri` <a name="ResetNetworkUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkUri"></a>

```go
func ResetNetworkUri()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetStagingBucket` <a name="ResetStagingBucket" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket"></a>

```go
func ResetStagingBucket()
```

##### `ResetSubnetworkUri` <a name="ResetSubnetworkUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri"></a>

```go
func ResetSubnetworkUri()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput">NetworkTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUriInput">NetworkUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput">StagingBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput">SubnetworkUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTags">NetworkTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUri">NetworkUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket">StagingBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri">SubnetworkUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `NetworkTagsInput`<sup>Optional</sup> <a name="NetworkTagsInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput"></a>

```go
func NetworkTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkUriInput`<sup>Optional</sup> <a name="NetworkUriInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUriInput"></a>

```go
func NetworkUriInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `StagingBucketInput`<sup>Optional</sup> <a name="StagingBucketInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput"></a>

```go
func StagingBucketInput() *string
```

- *Type:* *string

---

##### `SubnetworkUriInput`<sup>Optional</sup> <a name="SubnetworkUriInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput"></a>

```go
func SubnetworkUriInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `NetworkTags`<sup>Required</sup> <a name="NetworkTags" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTags"></a>

```go
func NetworkTags() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkUri`<sup>Required</sup> <a name="NetworkUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUri"></a>

```go
func NetworkUri() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `StagingBucket`<sup>Required</sup> <a name="StagingBucket" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket"></a>

```go
func StagingBucket() *string
```

- *Type:* *string

---

##### `SubnetworkUri`<sup>Required</sup> <a name="SubnetworkUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri"></a>

```go
func SubnetworkUri() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocBatchEnvironmentConfigExecutionConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a>

---


### DataprocBatchEnvironmentConfigOutputReference <a name="DataprocBatchEnvironmentConfigOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchEnvironmentConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocBatchEnvironmentConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putExecutionConfig">PutExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig">PutPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resetExecutionConfig">ResetExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resetPeripheralsConfig">ResetPeripheralsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExecutionConfig` <a name="PutExecutionConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putExecutionConfig"></a>

```go
func PutExecutionConfig(value DataprocBatchEnvironmentConfigExecutionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putExecutionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a>

---

##### `PutPeripheralsConfig` <a name="PutPeripheralsConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig"></a>

```go
func PutPeripheralsConfig(value DataprocBatchEnvironmentConfigPeripheralsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a>

---

##### `ResetExecutionConfig` <a name="ResetExecutionConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resetExecutionConfig"></a>

```go
func ResetExecutionConfig()
```

##### `ResetPeripheralsConfig` <a name="ResetPeripheralsConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resetPeripheralsConfig"></a>

```go
func ResetPeripheralsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.executionConfig">ExecutionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference">DataprocBatchEnvironmentConfigExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfig">PeripheralsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference">DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.executionConfigInput">ExecutionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfigInput">PeripheralsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionConfig`<sup>Required</sup> <a name="ExecutionConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.executionConfig"></a>

```go
func ExecutionConfig() DataprocBatchEnvironmentConfigExecutionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference">DataprocBatchEnvironmentConfigExecutionConfigOutputReference</a>

---

##### `PeripheralsConfig`<sup>Required</sup> <a name="PeripheralsConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfig"></a>

```go
func PeripheralsConfig() DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference">DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference</a>

---

##### `ExecutionConfigInput`<sup>Optional</sup> <a name="ExecutionConfigInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.executionConfigInput"></a>

```go
func ExecutionConfigInput() DataprocBatchEnvironmentConfigExecutionConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a>

---

##### `PeripheralsConfigInput`<sup>Optional</sup> <a name="PeripheralsConfigInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfigInput"></a>

```go
func PeripheralsConfigInput() DataprocBatchEnvironmentConfigPeripheralsConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocBatchEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a>

---


### DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference <a name="DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig">PutSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService">ResetMetastoreService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig">ResetSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSparkHistoryServerConfig` <a name="PutSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig"></a>

```go
func PutSparkHistoryServerConfig(value DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `ResetMetastoreService` <a name="ResetMetastoreService" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService"></a>

```go
func ResetMetastoreService()
```

##### `ResetSparkHistoryServerConfig` <a name="ResetSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig"></a>

```go
func ResetSparkHistoryServerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig">SparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput">MetastoreServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput">SparkHistoryServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService">MetastoreService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SparkHistoryServerConfig`<sup>Required</sup> <a name="SparkHistoryServerConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig"></a>

```go
func SparkHistoryServerConfig() DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a>

---

##### `MetastoreServiceInput`<sup>Optional</sup> <a name="MetastoreServiceInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput"></a>

```go
func MetastoreServiceInput() *string
```

- *Type:* *string

---

##### `SparkHistoryServerConfigInput`<sup>Optional</sup> <a name="SparkHistoryServerConfigInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput"></a>

```go
func SparkHistoryServerConfigInput() DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `MetastoreService`<sup>Required</sup> <a name="MetastoreService" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService"></a>

```go
func MetastoreService() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocBatchEnvironmentConfigPeripheralsConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a>

---


### DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference <a name="DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster">ResetDataprocCluster</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataprocCluster` <a name="ResetDataprocCluster" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```go
func ResetDataprocCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">DataprocClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster">DataprocCluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataprocClusterInput`<sup>Optional</sup> <a name="DataprocClusterInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```go
func DataprocClusterInput() *string
```

- *Type:* *string

---

##### `DataprocCluster`<sup>Required</sup> <a name="DataprocCluster" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```go
func DataprocCluster() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---


### DataprocBatchPysparkBatchOutputReference <a name="DataprocBatchPysparkBatchOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchPysparkBatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocBatchPysparkBatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetMainPythonFileUri">ResetMainPythonFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetPythonFileUris">ResetPythonFileUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetArchiveUris"></a>

```go
func ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetFileUris"></a>

```go
func ResetFileUris()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetJarFileUris"></a>

```go
func ResetJarFileUris()
```

##### `ResetMainPythonFileUri` <a name="ResetMainPythonFileUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetMainPythonFileUri"></a>

```go
func ResetMainPythonFileUri()
```

##### `ResetPythonFileUris` <a name="ResetPythonFileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetPythonFileUris"></a>

```go
func ResetPythonFileUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.mainPythonFileUriInput">MainPythonFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.pythonFileUrisInput">PythonFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.mainPythonFileUri">MainPythonFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.pythonFileUris">PythonFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.archiveUrisInput"></a>

```go
func ArchiveUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.fileUrisInput"></a>

```go
func FileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.jarFileUrisInput"></a>

```go
func JarFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `MainPythonFileUriInput`<sup>Optional</sup> <a name="MainPythonFileUriInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.mainPythonFileUriInput"></a>

```go
func MainPythonFileUriInput() *string
```

- *Type:* *string

---

##### `PythonFileUrisInput`<sup>Optional</sup> <a name="PythonFileUrisInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.pythonFileUrisInput"></a>

```go
func PythonFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.archiveUris"></a>

```go
func ArchiveUris() *[]*string
```

- *Type:* *[]*string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.fileUris"></a>

```go
func FileUris() *[]*string
```

- *Type:* *[]*string

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.jarFileUris"></a>

```go
func JarFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `MainPythonFileUri`<sup>Required</sup> <a name="MainPythonFileUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.mainPythonFileUri"></a>

```go
func MainPythonFileUri() *string
```

- *Type:* *string

---

##### `PythonFileUris`<sup>Required</sup> <a name="PythonFileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.pythonFileUris"></a>

```go
func PythonFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocBatchPysparkBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a>

---


### DataprocBatchRuntimeConfigAutotuningConfigOutputReference <a name="DataprocBatchRuntimeConfigAutotuningConfigOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchRuntimeConfigAutotuningConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocBatchRuntimeConfigAutotuningConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.resetScenarios">ResetScenarios</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScenarios` <a name="ResetScenarios" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.resetScenarios"></a>

```go
func ResetScenarios()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenariosInput">ScenariosInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenarios">Scenarios</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScenariosInput`<sup>Optional</sup> <a name="ScenariosInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenariosInput"></a>

```go
func ScenariosInput() *[]*string
```

- *Type:* *[]*string

---

##### `Scenarios`<sup>Required</sup> <a name="Scenarios" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenarios"></a>

```go
func Scenarios() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocBatchRuntimeConfigAutotuningConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a>

---


### DataprocBatchRuntimeConfigOutputReference <a name="DataprocBatchRuntimeConfigOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchRuntimeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocBatchRuntimeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.putAutotuningConfig">PutAutotuningConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetAutotuningConfig">ResetAutotuningConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetCohort">ResetCohort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetContainerImage">ResetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutotuningConfig` <a name="PutAutotuningConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.putAutotuningConfig"></a>

```go
func PutAutotuningConfig(value DataprocBatchRuntimeConfigAutotuningConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.putAutotuningConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a>

---

##### `ResetAutotuningConfig` <a name="ResetAutotuningConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetAutotuningConfig"></a>

```go
func ResetAutotuningConfig()
```

##### `ResetCohort` <a name="ResetCohort" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetCohort"></a>

```go
func ResetCohort()
```

##### `ResetContainerImage` <a name="ResetContainerImage" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetContainerImage"></a>

```go
func ResetContainerImage()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.autotuningConfig">AutotuningConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference">DataprocBatchRuntimeConfigAutotuningConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.effectiveProperties">EffectiveProperties</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.autotuningConfigInput">AutotuningConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.cohortInput">CohortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.containerImageInput">ContainerImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.cohort">Cohort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.containerImage">ContainerImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutotuningConfig`<sup>Required</sup> <a name="AutotuningConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.autotuningConfig"></a>

```go
func AutotuningConfig() DataprocBatchRuntimeConfigAutotuningConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference">DataprocBatchRuntimeConfigAutotuningConfigOutputReference</a>

---

##### `EffectiveProperties`<sup>Required</sup> <a name="EffectiveProperties" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.effectiveProperties"></a>

```go
func EffectiveProperties() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AutotuningConfigInput`<sup>Optional</sup> <a name="AutotuningConfigInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.autotuningConfigInput"></a>

```go
func AutotuningConfigInput() DataprocBatchRuntimeConfigAutotuningConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a>

---

##### `CohortInput`<sup>Optional</sup> <a name="CohortInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.cohortInput"></a>

```go
func CohortInput() *string
```

- *Type:* *string

---

##### `ContainerImageInput`<sup>Optional</sup> <a name="ContainerImageInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.containerImageInput"></a>

```go
func ContainerImageInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Cohort`<sup>Required</sup> <a name="Cohort" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.cohort"></a>

```go
func Cohort() *string
```

- *Type:* *string

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.containerImage"></a>

```go
func ContainerImage() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocBatchRuntimeConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a>

---


### DataprocBatchRuntimeInfoApproximateUsageList <a name="DataprocBatchRuntimeInfoApproximateUsageList" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchRuntimeInfoApproximateUsageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataprocBatchRuntimeInfoApproximateUsageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.get"></a>

```go
func Get(index *f64) DataprocBatchRuntimeInfoApproximateUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataprocBatchRuntimeInfoApproximateUsageOutputReference <a name="DataprocBatchRuntimeInfoApproximateUsageOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchRuntimeInfoApproximateUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataprocBatchRuntimeInfoApproximateUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliAcceleratorSeconds">MilliAcceleratorSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliDcuSeconds">MilliDcuSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.shuffleStorageGbSeconds">ShuffleStorageGbSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsage">DataprocBatchRuntimeInfoApproximateUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `MilliAcceleratorSeconds`<sup>Required</sup> <a name="MilliAcceleratorSeconds" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliAcceleratorSeconds"></a>

```go
func MilliAcceleratorSeconds() *string
```

- *Type:* *string

---

##### `MilliDcuSeconds`<sup>Required</sup> <a name="MilliDcuSeconds" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliDcuSeconds"></a>

```go
func MilliDcuSeconds() *string
```

- *Type:* *string

---

##### `ShuffleStorageGbSeconds`<sup>Required</sup> <a name="ShuffleStorageGbSeconds" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.shuffleStorageGbSeconds"></a>

```go
func ShuffleStorageGbSeconds() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocBatchRuntimeInfoApproximateUsage
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsage">DataprocBatchRuntimeInfoApproximateUsage</a>

---


### DataprocBatchRuntimeInfoCurrentUsageList <a name="DataprocBatchRuntimeInfoCurrentUsageList" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchRuntimeInfoCurrentUsageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataprocBatchRuntimeInfoCurrentUsageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.get"></a>

```go
func Get(index *f64) DataprocBatchRuntimeInfoCurrentUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataprocBatchRuntimeInfoCurrentUsageOutputReference <a name="DataprocBatchRuntimeInfoCurrentUsageOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchRuntimeInfoCurrentUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataprocBatchRuntimeInfoCurrentUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliAccelerator">MilliAccelerator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcu">MilliDcu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcuPremium">MilliDcuPremium</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGb">ShuffleStorageGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGbPremium">ShuffleStorageGbPremium</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.snapshotTime">SnapshotTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsage">DataprocBatchRuntimeInfoCurrentUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `MilliAccelerator`<sup>Required</sup> <a name="MilliAccelerator" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliAccelerator"></a>

```go
func MilliAccelerator() *string
```

- *Type:* *string

---

##### `MilliDcu`<sup>Required</sup> <a name="MilliDcu" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcu"></a>

```go
func MilliDcu() *string
```

- *Type:* *string

---

##### `MilliDcuPremium`<sup>Required</sup> <a name="MilliDcuPremium" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcuPremium"></a>

```go
func MilliDcuPremium() *string
```

- *Type:* *string

---

##### `ShuffleStorageGb`<sup>Required</sup> <a name="ShuffleStorageGb" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGb"></a>

```go
func ShuffleStorageGb() *string
```

- *Type:* *string

---

##### `ShuffleStorageGbPremium`<sup>Required</sup> <a name="ShuffleStorageGbPremium" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGbPremium"></a>

```go
func ShuffleStorageGbPremium() *string
```

- *Type:* *string

---

##### `SnapshotTime`<sup>Required</sup> <a name="SnapshotTime" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.snapshotTime"></a>

```go
func SnapshotTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocBatchRuntimeInfoCurrentUsage
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsage">DataprocBatchRuntimeInfoCurrentUsage</a>

---


### DataprocBatchRuntimeInfoList <a name="DataprocBatchRuntimeInfoList" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchRuntimeInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataprocBatchRuntimeInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.get"></a>

```go
func Get(index *f64) DataprocBatchRuntimeInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataprocBatchRuntimeInfoOutputReference <a name="DataprocBatchRuntimeInfoOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchRuntimeInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataprocBatchRuntimeInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.approximateUsage">ApproximateUsage</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList">DataprocBatchRuntimeInfoApproximateUsageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.currentUsage">CurrentUsage</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList">DataprocBatchRuntimeInfoCurrentUsageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.diagnosticOutputUri">DiagnosticOutputUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.endpoints">Endpoints</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.outputUri">OutputUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfo">DataprocBatchRuntimeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApproximateUsage`<sup>Required</sup> <a name="ApproximateUsage" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.approximateUsage"></a>

```go
func ApproximateUsage() DataprocBatchRuntimeInfoApproximateUsageList
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList">DataprocBatchRuntimeInfoApproximateUsageList</a>

---

##### `CurrentUsage`<sup>Required</sup> <a name="CurrentUsage" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.currentUsage"></a>

```go
func CurrentUsage() DataprocBatchRuntimeInfoCurrentUsageList
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList">DataprocBatchRuntimeInfoCurrentUsageList</a>

---

##### `DiagnosticOutputUri`<sup>Required</sup> <a name="DiagnosticOutputUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.diagnosticOutputUri"></a>

```go
func DiagnosticOutputUri() *string
```

- *Type:* *string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.endpoints"></a>

```go
func Endpoints() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `OutputUri`<sup>Required</sup> <a name="OutputUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.outputUri"></a>

```go
func OutputUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocBatchRuntimeInfo
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfo">DataprocBatchRuntimeInfo</a>

---


### DataprocBatchSparkBatchOutputReference <a name="DataprocBatchSparkBatchOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchSparkBatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocBatchSparkBatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetMainClass">ResetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetMainJarFileUri">ResetMainJarFileUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetArchiveUris"></a>

```go
func ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetFileUris"></a>

```go
func ResetFileUris()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetJarFileUris"></a>

```go
func ResetJarFileUris()
```

##### `ResetMainClass` <a name="ResetMainClass" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetMainClass"></a>

```go
func ResetMainClass()
```

##### `ResetMainJarFileUri` <a name="ResetMainJarFileUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetMainJarFileUri"></a>

```go
func ResetMainJarFileUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainClassInput">MainClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainJarFileUriInput">MainJarFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainClass">MainClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainJarFileUri">MainJarFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.archiveUrisInput"></a>

```go
func ArchiveUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.fileUrisInput"></a>

```go
func FileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.jarFileUrisInput"></a>

```go
func JarFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `MainClassInput`<sup>Optional</sup> <a name="MainClassInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainClassInput"></a>

```go
func MainClassInput() *string
```

- *Type:* *string

---

##### `MainJarFileUriInput`<sup>Optional</sup> <a name="MainJarFileUriInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainJarFileUriInput"></a>

```go
func MainJarFileUriInput() *string
```

- *Type:* *string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.archiveUris"></a>

```go
func ArchiveUris() *[]*string
```

- *Type:* *[]*string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.fileUris"></a>

```go
func FileUris() *[]*string
```

- *Type:* *[]*string

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.jarFileUris"></a>

```go
func JarFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `MainClass`<sup>Required</sup> <a name="MainClass" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainClass"></a>

```go
func MainClass() *string
```

- *Type:* *string

---

##### `MainJarFileUri`<sup>Required</sup> <a name="MainJarFileUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainJarFileUri"></a>

```go
func MainJarFileUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocBatchSparkBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a>

---


### DataprocBatchSparkRBatchOutputReference <a name="DataprocBatchSparkRBatchOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchSparkRBatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocBatchSparkRBatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetMainRFileUri">ResetMainRFileUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetArchiveUris"></a>

```go
func ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetFileUris"></a>

```go
func ResetFileUris()
```

##### `ResetMainRFileUri` <a name="ResetMainRFileUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetMainRFileUri"></a>

```go
func ResetMainRFileUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.mainRFileUriInput">MainRFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.mainRFileUri">MainRFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.archiveUrisInput"></a>

```go
func ArchiveUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.fileUrisInput"></a>

```go
func FileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `MainRFileUriInput`<sup>Optional</sup> <a name="MainRFileUriInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.mainRFileUriInput"></a>

```go
func MainRFileUriInput() *string
```

- *Type:* *string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.archiveUris"></a>

```go
func ArchiveUris() *[]*string
```

- *Type:* *[]*string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.fileUris"></a>

```go
func FileUris() *[]*string
```

- *Type:* *[]*string

---

##### `MainRFileUri`<sup>Required</sup> <a name="MainRFileUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.mainRFileUri"></a>

```go
func MainRFileUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocBatchSparkRBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a>

---


### DataprocBatchSparkSqlBatchOutputReference <a name="DataprocBatchSparkSqlBatchOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchSparkSqlBatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocBatchSparkSqlBatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resetQueryFileUri">ResetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resetQueryVariables">ResetQueryVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resetJarFileUris"></a>

```go
func ResetJarFileUris()
```

##### `ResetQueryFileUri` <a name="ResetQueryFileUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resetQueryFileUri"></a>

```go
func ResetQueryFileUri()
```

##### `ResetQueryVariables` <a name="ResetQueryVariables" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resetQueryVariables"></a>

```go
func ResetQueryVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryFileUriInput">QueryFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryVariablesInput">QueryVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryFileUri">QueryFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryVariables">QueryVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.jarFileUrisInput"></a>

```go
func JarFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryFileUriInput`<sup>Optional</sup> <a name="QueryFileUriInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryFileUriInput"></a>

```go
func QueryFileUriInput() *string
```

- *Type:* *string

---

##### `QueryVariablesInput`<sup>Optional</sup> <a name="QueryVariablesInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryVariablesInput"></a>

```go
func QueryVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.jarFileUris"></a>

```go
func JarFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `QueryFileUri`<sup>Required</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryFileUri"></a>

```go
func QueryFileUri() *string
```

- *Type:* *string

---

##### `QueryVariables`<sup>Required</sup> <a name="QueryVariables" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryVariables"></a>

```go
func QueryVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocBatchSparkSqlBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a>

---


### DataprocBatchStateHistoryList <a name="DataprocBatchStateHistoryList" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchStateHistoryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataprocBatchStateHistoryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.get"></a>

```go
func Get(index *f64) DataprocBatchStateHistoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataprocBatchStateHistoryOutputReference <a name="DataprocBatchStateHistoryOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchStateHistoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataprocBatchStateHistoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.stateStartTime">StateStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistory">DataprocBatchStateHistory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `StateStartTime`<sup>Required</sup> <a name="StateStartTime" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.stateStartTime"></a>

```go
func StateStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocBatchStateHistory
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistory">DataprocBatchStateHistory</a>

---


### DataprocBatchTimeoutsOutputReference <a name="DataprocBatchTimeoutsOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataprocbatch"

dataprocbatch.NewDataprocBatchTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocBatchTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



